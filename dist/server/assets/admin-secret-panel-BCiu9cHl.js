import { jsx, jsxs } from "react/jsx-runtime";
import { s as supabase } from "./client-B4gmiHaE.js";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import "@supabase/supabase-js";
const ADMIN_PASSWORD = "iraivazhiacupuncturevarmamadminqri101";
const ADMIN_SESSION_KEY = "ivclinic_admin";
const SLOTS = ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM"];
function AdminPanel() {
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [blockedSlots, setBlockedSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [manageDate, setManageDate] = useState(format(/* @__PURE__ */ new Date(), "yyyy-MM-dd"));
  useEffect(() => {
    const saved = localStorage.getItem(ADMIN_SESSION_KEY);
    if (saved === "true") {
      setAuthorized(true);
    }
  }, []);
  useEffect(() => {
    const channel = supabase.channel("live-admin").on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "appointments"
    }, () => {
      fetchAppointments();
    }).on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "blocked_slots"
    }, () => {
      fetchBlockedSlots();
    }).subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [manageDate]);
  useEffect(() => {
    fetchAppointments();
    fetchBlockedSlots();
  }, [manageDate]);
  async function fetchAppointments() {
    const {
      data,
      error
    } = await supabase.from("appointments").select("*").order("appointment_date", {
      ascending: true
    });
    if (error) {
      console.error(error);
      return;
    }
    if (data) {
      setAppointments(data);
    }
  }
  async function fetchBlockedSlots() {
    const {
      data,
      error
    } = await supabase.from("blocked_slots").select("*").eq("appointment_date", manageDate);
    if (error) {
      console.error(error);
      return;
    }
    if (data) {
      setBlockedSlots(data);
    }
  }
  async function toggleSlot(slot) {
    const existing = blockedSlots.find((b) => b.time_slot === slot);
    if (existing) {
      const {
        error
      } = await supabase.from("blocked_slots").delete().eq("id", existing.id);
      if (error) {
        console.error(error);
        alert("Failed to unblock slot");
        return;
      }
      alert("Slot unblocked");
    } else {
      const {
        error
      } = await supabase.from("blocked_slots").insert({
        appointment_date: manageDate,
        time_slot: slot
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
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-background px-6", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-xl", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-6 text-center", children: "Admin Access" }),
      /* @__PURE__ */ jsx("input", { type: "password", placeholder: "Enter admin password", value: password, onChange: (e) => setPassword(e.target.value), className: "w-full h-12 rounded-xl border border-border px-4 outline-none" }),
      /* @__PURE__ */ jsx("button", { onClick: handleLogin, className: "w-full h-12 rounded-xl bg-primary text-primary-foreground mt-4", children: "Enter Dashboard" })
    ] }) });
  }
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-background px-6 py-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold", children: "Clinic Admin Dashboard" }),
      /* @__PURE__ */ jsx("button", { onClick: logout, className: "px-5 py-2 rounded-xl border border-border", children: "Logout" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-border p-8 bg-card", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-14", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between mb-6", children: /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold", children: "Manage Appointment Slots" }) }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4", children: SLOTS.map((slot) => {
          const blocked = blockedSlots.some((b) => b.slot_time === slot);
          const booked = appointments.some((a) => a.appointment_date === manageDate && a.time_slot === slot);
          return /* @__PURE__ */ jsxs("button", { type: "button", disabled: booked, onClick: () => toggleSlot(slot), className: `p-5 rounded-2xl border transition font-semibold ${booked ? "bg-gray-300 text-black cursor-not-allowed" : blocked ? "bg-red-500 text-white" : "bg-green-600 text-white"}`, children: [
            /* @__PURE__ */ jsx("div", { className: "text-lg", children: slot }),
            /* @__PURE__ */ jsx("div", { className: "text-xs mt-2", children: booked ? "BOOKED" : blocked ? "BLOCKED" : "AVAILABLE" })
          ] }, slot);
        }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold", children: "Booked Appointments" }),
          /* @__PURE__ */ jsx("input", { type: "date", value: selectedDate, onChange: (e) => setSelectedDate(e.target.value), className: "h-12 rounded-xl border border-border px-4" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: appointments.filter((appointment) => selectedDate ? appointment.appointment_date === selectedDate : true).map((appointment) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border p-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("div", { className: "font-bold text-2xl", children: appointment.patient_name }),
              /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Age:" }),
                " ",
                appointment.age
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Gender:" }),
                " ",
                appointment.gender
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Mobile:" }),
                " ",
                appointment.mobile
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Location:" }),
                " ",
                appointment.location || "No location"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Email:" }),
                " ",
                appointment.email || "No email"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-right space-y-2", children: [
              /* @__PURE__ */ jsx("div", { className: "font-semibold text-lg", children: appointment.appointment_date }),
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-primary", children: appointment.time_slot })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-5 text-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Health Problem:" }),
            " ",
            appointment.health_problem
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 text-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Additional Notes:" }),
            " ",
            appointment.notes || "No notes"
          ] })
        ] }, appointment.id)) })
      ] })
    ] })
  ] }) });
}
export {
  AdminPanel as component
};
