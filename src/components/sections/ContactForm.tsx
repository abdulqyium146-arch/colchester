"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";
import { COMPANY } from "@/lib/utils";

const services = [
  "Roof Inspection",
  "Roof Survey",
  "Drone Roof Inspection",
  "Homebuyer Roof Report",
  "Commercial Roof Survey",
  "Emergency Inspection",
  "Insurance Assessment",
  "Roof Leak Investigation",
  "Not Sure — Advise Me",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    address: "",
    message: "",
    urgency: "standard",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-slate-900 mb-2">Enquiry Received!</h3>
        <p className="text-slate-600">
          Thank you {form.name}. We&apos;ll be in touch within 2 hours to confirm your
          inspection booking. For urgent enquiries call{" "}
          <a href={`tel:${COMPANY.phonePlain}`} className="text-amber-600 font-semibold">
            {COMPANY.phone}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            Full Name *
          </label>
          <input
            required
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none text-slate-900 text-sm transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            Phone Number *
          </label>
          <input
            required
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="07700 900000"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none text-slate-900 text-sm transition-all"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
          Email Address *
        </label>
        <input
          required
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none text-slate-900 text-sm transition-all"
        />
      </div>

      {/* Service */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
          Service Required *
        </label>
        <select
          required
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none text-slate-900 text-sm transition-all bg-white"
        >
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Property address */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
          Property Address / Postcode *
        </label>
        <input
          required
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="123 High Street, Colchester, CO1 1AA"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none text-slate-900 text-sm transition-all"
        />
      </div>

      {/* Urgency */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Urgency Level
        </label>
        <div className="grid grid-cols-3 gap-3">
          {[
            { value: "standard", label: "Standard", sub: "Within 1 week" },
            { value: "priority", label: "Priority", sub: "Within 48 hours" },
            { value: "emergency", label: "Emergency", sub: "Same day" },
          ].map(({ value, label, sub }) => (
            <label
              key={value}
              className={`flex flex-col items-center gap-1 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                form.urgency === value
                  ? "border-amber-500 bg-amber-50"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <input
                type="radio"
                name="urgency"
                value={value}
                checked={form.urgency === value}
                onChange={handleChange}
                className="sr-only"
              />
              <span className={`text-sm font-bold ${form.urgency === value ? "text-amber-700" : "text-slate-700"}`}>
                {label}
              </span>
              <span className="text-xs text-slate-400">{sub}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
          Additional Details
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about any specific concerns, visible damage or access requirements..."
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none text-slate-900 text-sm transition-all resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-400 text-white font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-amber-200 text-base"
      >
        {status === "submitting" ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Request Your Free Quote
          </>
        )}
      </button>

      <p className="text-xs text-slate-400 text-center">
        We respond within 2 hours during business hours. For urgent matters call{" "}
        <a href={`tel:${COMPANY.phonePlain}`} className="text-amber-600 font-semibold">
          {COMPANY.phone}
        </a>
      </p>
    </form>
  );
}
