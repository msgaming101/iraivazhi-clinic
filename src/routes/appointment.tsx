import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { format, addDays, startOfDay } from "date-fns";
import {
  CheckCircle2,
  Loader2,
  Calendar as CalIcon,
  Clock,
} from "lucide-react";

import { Layout } from "@/components/Layout";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { CLINIC } from "@/lib/i18n";
import { waLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/appointment")({
  component: Appointment,
});

const SLOTS = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
];

const schema = z.object({
  patient_name: z.string().min(2),
  age: z.coerce.number().min(1).max(120),
  gender: z.enum(["Male", "Female", "Other"]),
  mobile: z.string().min(8),
  email: z.string().email().optional().or(z.literal("")),
  health_problem: z.string().min(3),
  location: z.string().min(2),
  appointment_date: z.string(),
  time_slot: z.string(),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

function Appointment() {
  const qc = useQueryClient();

  const today = startOfDay(new Date());

  const dateOptions = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) =>
        addDays(today, i + 1)
      ),
    []
  );

  const [form, setForm] = useState<Partial<FormData>>({
    patient_name: "",
    age: undefined,
    gender: undefined,
    mobile: "",
    email: "",
    health_problem: "",
    location: "",
    appointment_date: format(addDays(today, 1), "yyyy-MM-dd"),
    time_slot: "",
    notes: "",
  });

  const [success, setSuccess] = useState<{
    date: string;
    slot: string;
  } | null>(null);

  // FETCH APPOINTMENTS
  const { data: booked = [] } = useQuery({
    queryKey: ["appointments"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("appointments")
        .select("appointment_date,time_slot");

      if (error) throw error;

      return data || [];
    },
    refetchInterval: 5000,
  });

  // FETCH BLOCKED SLOTS
  const { data: blockedSlots = [] } = useQuery({
  queryKey: ["blocked-slots"],
  queryFn: async () => {
    const { data, error } = await supabase
      .from("blocked_slots")
      .select("*");

    if (error) throw error;

    return data;
  },
});

  // REALTIME
  useEffect(() => {
    const channel = supabase
      .channel("appointments-live")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "appointments",
        },
        () => {
          qc.invalidateQueries({
            queryKey: ["appointments"],
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const alreadyBooked = booked.find(
        (b: any) =>
          b.appointment_date === data.appointment_date &&
          b.time_slot === data.time_slot
      );

      if (alreadyBooked) {
        throw new Error("This slot is already booked");
      }

      const blocked = blockedSlots.find(
        (b: any) =>
          b.slot_date === data.appointment_date &&
          b.slot_time === data.time_slot
      );

      if (blocked) {
        throw new Error("This slot is blocked");
      }

      const { error } = await supabase
        .from("appointments")
        .insert({
          patient_name: data.patient_name,
          age: data.age,
          gender: data.gender,
          mobile: data.mobile,
          email: data.email || null,
          health_problem: data.health_problem,
          location: data.location,
          appointment_date: data.appointment_date,
          time_slot: data.time_slot,
          notes: data.notes || null,
        });

      if (error) throw error;
    },

    onSuccess: async (_d, vars) => {
      setSuccess({
        date: vars.appointment_date,
        slot: vars.time_slot,
      });

      await qc.invalidateQueries();

      toast.success("Appointment booked successfully");
    },

    onError: (err: any) => {
      toast.error(err.message || "Booking failed");
    },
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = schema.safeParse(form);

    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }

    mutation.mutate(parsed.data);
  };

  if (success) {
    return (
      <Layout>
        <section className="container mx-auto px-6 py-24 max-w-xl text-center">
          <div className="size-20 rounded-full bg-primary-soft mx-auto flex items-center justify-center">
            <CheckCircle2 className="size-10 text-primary" />
          </div>

          <h1 className="mt-6 text-3xl font-bold">
            Appointment Confirmed
          </h1>

          <p className="mt-4 text-muted-foreground">
            Your appointment is booked for{" "}
            <strong>{success.date}</strong> at{" "}
            <strong>{success.slot}</strong>
          </p>

          <div className="mt-8 flex gap-4 justify-center">
            <Button asChild variant="outline">
              <Link to="/">Home</Link>
            </Button>

            <Button asChild>
              <a
                href={waLink(
                  `Hello, I booked appointment on ${success.date} at ${success.slot}`
                )}
                target="_blank"
              >
                WhatsApp
              </a>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10">

          <aside>
            <div className="sticky top-28 p-6 rounded-3xl bg-gradient-primary text-primary-foreground">

              <Logo size={42} className="mb-4" />

              <h2 className="text-2xl font-bold">
                {CLINIC.name}
              </h2>

              <p className="mt-3 text-sm">
                Real-time slot booking.
              </p>

              <div className="mt-6 space-y-2 text-sm">
                <div className="flex gap-2">
                  <Clock className="size-4" />
                  {CLINIC.hours.join(" · ")}
                </div>

                <div className="flex gap-2">
                  <CalIcon className="size-4" />
                  Mon – Sat
                </div>
              </div>
            </div>
          </aside>

          <form
            onSubmit={onSubmit}
            className="p-6 rounded-3xl border border-border bg-card space-y-5"
          >
            <div>
              <h1 className="text-3xl font-bold">
                Book Appointment
              </h1>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">

              <Field label="Patient Name *">
                <Input
                  value={form.patient_name || ""}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      patient_name: e.target.value,
                    })
                  }
                />
              </Field>

              <Field label="Age *">
                <Input
                  type="number"
                  value={form.age ?? ""}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      age: Number(e.target.value),
                    })
                  }
                />
              </Field>

              <Field label="Gender *">
                <Select
                  value={form.gender}
                  onValueChange={(v) =>
                    setForm({
                      ...form,
                      gender: v as any,
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </Field>

              <Field label="Mobile *">
                <Input
                  value={form.mobile || ""}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      mobile: e.target.value,
                    })
                  }
                />
              </Field>

              <Field label="Email" className="sm:col-span-2">
                <Input
                  type="email"
                  value={form.email || ""}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                />
              </Field>
              <Field label="Location *" className="sm:col-span-2">
                <Input
                  value={form.location || ""}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      location: e.target.value,
                    })
                  }
                  placeholder="Enter your area/location"
                />
              </Field>
              <Field
                label="Health Problem *"
                className="sm:col-span-2"
              >
                <Textarea
                  rows={2}
                  value={form.health_problem || ""}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      health_problem: e.target.value,
                    })
                  }
                />
              </Field>

            </div>

            <div>
              <Label>Preferred Date *</Label>

              <div className="mt-3 flex gap-2 overflow-x-auto">

                {dateOptions.map((d) => {
                  const iso = format(d, "yyyy-MM-dd");

                  return (
                    <button
                      type="button"
                      key={iso}
                      onClick={() =>
                        setForm({
                          ...form,
                          appointment_date: iso,
                          time_slot: "",
                        })
                      }
                      className={`px-4 py-3 rounded-xl border ${
                        form.appointment_date === iso
                          ? "bg-primary text-white"
                          : ""
                      }`}
                    >
                      {format(d, "dd MMM")}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <Label>Preferred Time Slot *</Label>

              <div className="mt-3 grid grid-cols-3 sm:grid-cols-4 gap-2">

                {SLOTS.map((slot) => {

                  
                  const taken = booked.some(
                    (b: any) =>
                      b.appointment_date === form.appointment_date &&
                      b.time_slot === slot
                  );

                  const blocked = blockedSlots.some(
                    (b: any) =>
                      b.slot_date === form.appointment_date &&
                      b.slot_time === slot
                  );

                  return (
                    <button
                      type="button"
                      key={slot}
                      disabled={taken || blocked}
                      onClick={() =>
                        setForm({
                          ...form,
                          time_slot: slot,
                        })
                      }
                      className={`px-3 py-3 rounded-xl border text-sm ${
                        form.time_slot === slot
                          ? "bg-primary text-white"
                          : taken || blocked
                          ? "opacity-40 cursor-not-allowed line-through"
                          : ""
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>

            <Field label="Additional Notes">
              <Textarea
                rows={2}
                value={form.notes || ""}
                onChange={(e) =>
                  setForm({
                    ...form,
                    notes: e.target.value,
                  })
                }
              />
            </Field>

            <Button
              type="submit"
              className="w-full h-12"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Booking...
                </>
              ) : (
                "Confirm Appointment"
              )}
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

function Field({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <Label>{label}</Label>

      <div className="mt-2">
        {children}
      </div>
    </div>
  );
}