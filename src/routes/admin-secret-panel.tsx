import { supabase } from "@/integrations/supabase/client";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ADMIN_PASSWORD, ADMIN_SESSION_KEY } from "@/lib/admin";
import { format } from "date-fns";

export const Route = createFileRoute("/admin-secret-panel")({
  component: AdminPanel,
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

function AdminPanel() {
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");

  const [appointments, setAppointments] = useState<any[]>([]);
  const [blockedSlots, setBlockedSlots] = useState<any[]>([]);

  const [selectedDate, setSelectedDate] = useState("");
  const [manageDate, setManageDate] = useState(
    format(new Date(), "yyyy-MM-dd")
  );

  useEffect(() => {
    const saved = localStorage.getItem(ADMIN_SESSION_KEY);

    if (saved === "true") {
      setAuthorized(true);
    }
  }, []);
  useEffect(() => {
  const channel = supabase
    .channel("live-admin")

    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "appointments",
      },
      () => {
        fetchAppointments();
      }
    )

    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "blocked_slots",
      },
      () => {
        fetchBlockedSlots();
      }
    )

    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}, [manageDate]);
  useEffect(() => {
    fetchAppointments();
    fetchBlockedSlots();
  }, [manageDate]);

  async function fetchAppointments() {
    const { data, error } = await supabase
      .from("appointments")
      .select("*")
      .order("appointment_date", { ascending: true });

    if (error) {
      console.error(error);
      return;
    }

    if (data) {
      setAppointments(data);
    }
  }

  async function fetchBlockedSlots() {
    const { data, error } = await supabase
      .from("blocked_slots")
      .select("*")
      .eq("appointment_date", manageDate);
    if (error) {
      console.error(error);
      return;
    }

    if (data) {
      setBlockedSlots(data);
    }
  }

  async function toggleSlot(slot: string) {
    const existing = blockedSlots.find(
      (b) => b.time_slot === slot
    );

    if (existing) {
      const { error } = await supabase
        .from("blocked_slots")
        .delete()
        .eq("id", existing.id);

      if (error) {
        console.error(error);
        alert("Failed to unblock slot");
        return;
      }

      alert("Slot unblocked");
    } else {
      const { error } = await supabase
        .from("blocked_slots")
        .insert({
          appointment_date: manageDate,
          time_slot: slot,
        });

      if (error) {
        console.error(error);
        alert("Failed to block slot");
        return;
      }

      alert("Slot blocked");
    }

    await fetchBlockedSlots();
    await fetchAppointments();
  }

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem(ADMIN_SESSION_KEY, "true");
      setAuthorized(true);
    } else {
      alert("Wrong password");
    }
  };

  const logout = () => {
    localStorage.removeItem(ADMIN_SESSION_KEY);
    setAuthorized(false);
  };

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-6">
        <div className="w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-xl">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Admin Access
          </h1>

          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-12 rounded-xl border border-border px-4 outline-none"
          />

          <button
            onClick={handleLogin}
            className="w-full h-12 rounded-xl bg-primary text-primary-foreground mt-4"
          >
            Enter Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background px-6 py-10">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">
            Clinic Admin Dashboard
          </h1>

          <button
            onClick={logout}
            className="px-5 py-2 rounded-xl border border-border"
          >
            Logout
          </button>
        </div>

        <div className="rounded-3xl border border-border p-8 bg-card">

          {/* SLOT MANAGEMENT */}

          <div className="mb-14">

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">
                Manage Appointment Slots
              </h2>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">

              {SLOTS.map((slot) => {

                const blocked = blockedSlots.some(
                  (b) => b.slot_time === slot
                );

                const booked = appointments.some(
                  (a) =>
                    a.appointment_date === manageDate &&
                    a.time_slot === slot
                );

                return (
                  <button
                    key={slot}
                    type="button"
                    disabled={booked}
                    onClick={() => toggleSlot(slot)}
                    className={`p-5 rounded-2xl border transition font-semibold ${
                      booked
                        ? "bg-gray-300 text-black cursor-not-allowed"
                        : blocked
                        ? "bg-red-500 text-white"
                        : "bg-green-600 text-white"
                    }`}
                  >
                    <div className="text-lg">
                      {slot}
                    </div>

                    <div className="text-xs mt-2">
                      {booked
                        ? "BOOKED"
                        : blocked
                        ? "BLOCKED"
                        : "AVAILABLE"}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* APPOINTMENTS */}

          <div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <h2 className="text-2xl font-semibold">
                Booked Appointments
              </h2>

              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="h-12 rounded-xl border border-border px-4"
              />
            </div>

            <div className="space-y-4">

              {appointments
                .filter((appointment) =>
                  selectedDate
                    ? appointment.appointment_date === selectedDate
                    : true
                )
                .map((appointment) => (
                  <div
                    key={appointment.id}
                    className="rounded-2xl border border-border p-5"
                  >

                    <div className="flex items-start justify-between gap-6">

                      <div className="space-y-2">

                        <div className="font-bold text-2xl">
                          {appointment.patient_name}
                        </div>

                        <div className="text-sm">
                          <span className="font-semibold">
                            Age:
                          </span>{" "}
                          {appointment.age}
                        </div>

                        <div className="text-sm">
                          <span className="font-semibold">
                            Gender:
                          </span>{" "}
                          {appointment.gender}
                        </div>

                        <div className="text-sm">
                          <span className="font-semibold">
                            Mobile:
                          </span>{" "}
                          {appointment.mobile}
                        </div>
                        
                        <div className="text-sm">
                          <span className="font-semibold">
                            Location:
                          </span>{" "}
                          {appointment.location || "No location"}
                        </div>

                        <div className="text-sm">
                          <span className="font-semibold">
                            Email:
                          </span>{" "}
                          {appointment.email || "No email"}
                        </div>

                      </div>

                      <div className="text-right space-y-2">

                        <div className="font-semibold text-lg">
                          {appointment.appointment_date}
                        </div>

                        <div className="text-2xl font-bold text-primary">
                          {appointment.time_slot}
                        </div>

                      </div>
                    </div>

                    <div className="mt-5 text-sm">
                      <span className="font-semibold">
                        Health Problem:
                      </span>{" "}
                      {appointment.health_problem}
                    </div>

                    <div className="mt-3 text-sm">
                      <span className="font-semibold">
                        Additional Notes:
                      </span>{" "}
                      {appointment.notes || "No notes"}
                    </div>

                  </div>
                ))}

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}