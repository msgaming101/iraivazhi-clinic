import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import * as React from "react";
import { useMemo, useState, useEffect } from "react";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { startOfDay, addDays, format } from "date-fns";
import { ChevronDown, Check, ChevronUp, CheckCircle2, Clock, Calendar, Loader2 } from "lucide-react";
import { c as cn, L as Layout, B as Button, w as waLink, a as Logo } from "./Layout-tH0CpsyR.js";
import { I as Input, T as Textarea, L as Label } from "./label-CN4K7Jvs.js";
import * as SelectPrimitive from "@radix-ui/react-select";
import { toast } from "sonner";
import { s as supabase } from "./client-B4gmiHaE.js";
import { C as CLINIC } from "./router-CUQ3MY0C.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "@supabase/supabase-js";
const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
const SLOTS = ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM"];
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
  notes: z.string().optional()
});
function Appointment() {
  const qc = useQueryClient();
  const today = startOfDay(/* @__PURE__ */ new Date());
  const dateOptions = useMemo(() => Array.from({
    length: 14
  }).map((_, i) => addDays(today, i + 1)), []);
  const [form, setForm] = useState({
    patient_name: "",
    age: void 0,
    gender: void 0,
    mobile: "",
    email: "",
    health_problem: "",
    location: "",
    appointment_date: format(addDays(today, 1), "yyyy-MM-dd"),
    time_slot: "",
    notes: ""
  });
  const [success, setSuccess] = useState(null);
  const {
    data: booked = []
  } = useQuery({
    queryKey: ["appointments"],
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from("appointments").select("appointment_date,time_slot");
      if (error) throw error;
      return data || [];
    },
    refetchInterval: 5e3
  });
  const {
    data: blockedSlots = []
  } = useQuery({
    queryKey: ["blocked-slots"],
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from("blocked_slots").select("*");
      if (error) throw error;
      return data;
    }
  });
  useEffect(() => {
    const channel = supabase.channel("appointments-live").on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "appointments"
    }, () => {
      qc.invalidateQueries({
        queryKey: ["appointments"]
      });
    }).subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);
  const mutation = useMutation({
    mutationFn: async (data) => {
      const alreadyBooked = booked.find((b) => b.appointment_date === data.appointment_date && b.time_slot === data.time_slot);
      if (alreadyBooked) {
        throw new Error("This slot is already booked");
      }
      const blocked = blockedSlots.find((b) => b.slot_date === data.appointment_date && b.slot_time === data.time_slot);
      if (blocked) {
        throw new Error("This slot is blocked");
      }
      const {
        error
      } = await supabase.from("appointments").insert({
        patient_name: data.patient_name,
        age: data.age,
        gender: data.gender,
        mobile: data.mobile,
        email: data.email || null,
        health_problem: data.health_problem,
        location: data.location,
        appointment_date: data.appointment_date,
        time_slot: data.time_slot,
        notes: data.notes || null
      });
      if (error) throw error;
    },
    onSuccess: async (_d, vars) => {
      setSuccess({
        date: vars.appointment_date,
        slot: vars.time_slot
      });
      await qc.invalidateQueries();
      toast.success("Appointment booked successfully");
    },
    onError: (err) => {
      toast.error(err.message || "Booking failed");
    }
  });
  const onSubmit = (e) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    mutation.mutate(parsed.data);
  };
  if (success) {
    return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsxs("section", { className: "container mx-auto px-6 py-24 max-w-xl text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "size-20 rounded-full bg-primary-soft mx-auto flex items-center justify-center", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "size-10 text-primary" }) }),
      /* @__PURE__ */ jsx("h1", { className: "mt-6 text-3xl font-bold", children: "Appointment Confirmed" }),
      /* @__PURE__ */ jsxs("p", { className: "mt-4 text-muted-foreground", children: [
        "Your appointment is booked for",
        " ",
        /* @__PURE__ */ jsx("strong", { children: success.date }),
        " at",
        " ",
        /* @__PURE__ */ jsx("strong", { children: success.slot })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex gap-4 justify-center", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsx(Link, { to: "/", children: "Home" }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsx("a", { href: waLink(`Hello, I booked appointment on ${success.date} at ${success.slot}`), target: "_blank", children: "WhatsApp" }) })
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsx("section", { className: "container mx-auto px-6 py-16", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-[1fr_1.4fr] gap-10", children: [
    /* @__PURE__ */ jsx("aside", { children: /* @__PURE__ */ jsxs("div", { className: "sticky top-28 p-6 rounded-3xl bg-gradient-primary text-primary-foreground", children: [
      /* @__PURE__ */ jsx(Logo, { size: 42, className: "mb-4" }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: CLINIC.name }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm", children: "Real-time slot booking." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-2 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx(Clock, { className: "size-4" }),
          CLINIC.hours.join(" · ")
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx(Calendar, { className: "size-4" }),
          "Mon – Sat"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit, className: "p-6 rounded-3xl border border-border bg-card space-y-5", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: "Book Appointment" }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsx(Field, { label: "Patient Name *", children: /* @__PURE__ */ jsx(Input, { value: form.patient_name || "", onChange: (e) => setForm({
          ...form,
          patient_name: e.target.value
        }) }) }),
        /* @__PURE__ */ jsx(Field, { label: "Age *", children: /* @__PURE__ */ jsx(Input, { type: "number", value: form.age ?? "", onChange: (e) => setForm({
          ...form,
          age: Number(e.target.value)
        }) }) }),
        /* @__PURE__ */ jsx(Field, { label: "Gender *", children: /* @__PURE__ */ jsxs(Select, { value: form.gender, onValueChange: (v) => setForm({
          ...form,
          gender: v
        }), children: [
          /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select" }) }),
          /* @__PURE__ */ jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsx(SelectItem, { value: "Male", children: "Male" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "Female", children: "Female" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "Other", children: "Other" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(Field, { label: "Mobile *", children: /* @__PURE__ */ jsx(Input, { value: form.mobile || "", onChange: (e) => setForm({
          ...form,
          mobile: e.target.value
        }) }) }),
        /* @__PURE__ */ jsx(Field, { label: "Email", className: "sm:col-span-2", children: /* @__PURE__ */ jsx(Input, { type: "email", value: form.email || "", onChange: (e) => setForm({
          ...form,
          email: e.target.value
        }) }) }),
        /* @__PURE__ */ jsx(Field, { label: "Location *", className: "sm:col-span-2", children: /* @__PURE__ */ jsx(Input, { value: form.location || "", onChange: (e) => setForm({
          ...form,
          location: e.target.value
        }), placeholder: "Enter your area/location" }) }),
        /* @__PURE__ */ jsx(Field, { label: "Health Problem *", className: "sm:col-span-2", children: /* @__PURE__ */ jsx(Textarea, { rows: 2, value: form.health_problem || "", onChange: (e) => setForm({
          ...form,
          health_problem: e.target.value
        }) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { children: "Preferred Date *" }),
        /* @__PURE__ */ jsx("div", { className: "mt-3 flex gap-2 overflow-x-auto", children: dateOptions.map((d) => {
          const iso = format(d, "yyyy-MM-dd");
          return /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setForm({
            ...form,
            appointment_date: iso,
            time_slot: ""
          }), className: `px-4 py-3 rounded-xl border ${form.appointment_date === iso ? "bg-primary text-white" : ""}`, children: format(d, "dd MMM") }, iso);
        }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { children: "Preferred Time Slot *" }),
        /* @__PURE__ */ jsx("div", { className: "mt-3 grid grid-cols-3 sm:grid-cols-4 gap-2", children: SLOTS.map((slot) => {
          const taken = booked.some((b) => b.appointment_date === form.appointment_date && b.time_slot === slot);
          const blocked = blockedSlots.some((b) => b.slot_date === form.appointment_date && b.slot_time === slot);
          return /* @__PURE__ */ jsx("button", { type: "button", disabled: taken || blocked, onClick: () => setForm({
            ...form,
            time_slot: slot
          }), className: `px-3 py-3 rounded-xl border text-sm ${form.time_slot === slot ? "bg-primary text-white" : taken || blocked ? "opacity-40 cursor-not-allowed line-through" : ""}`, children: slot }, slot);
        }) })
      ] }),
      /* @__PURE__ */ jsx(Field, { label: "Additional Notes", children: /* @__PURE__ */ jsx(Textarea, { rows: 2, value: form.notes || "", onChange: (e) => setForm({
        ...form,
        notes: e.target.value
      }) }) }),
      /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full h-12", disabled: mutation.isPending, children: mutation.isPending ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Loader2, { className: "size-4 animate-spin" }),
        "Booking..."
      ] }) : "Confirm Appointment" })
    ] })
  ] }) }) });
}
function Field({
  label,
  className,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { className, children: [
    /* @__PURE__ */ jsx(Label, { children: label }),
    /* @__PURE__ */ jsx("div", { className: "mt-2", children })
  ] });
}
export {
  Appointment as component
};
