"use client";

import { useState } from "react";

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name")?.toString() ?? "",
      phone: formData.get("phone")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      service: formData.get("service")?.toString() ?? "",
      location: formData.get("location")?.toString() ?? "",
      notes: formData.get("notes")?.toString() ?? "",
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        // ✅ ליד אמיתי – עכשיו יורים פיקסל
        (window as any).fbq?.("track", "Lead");
        setSuccess(true);
        form.reset();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="aae__success">
        ✅ Thank you! We’ll contact you shortly.
      </div>
    );
  }

  return (
    <form className="aae__form" onSubmit={onSubmit}>
      <label className="aae__label">
        Full name
        <input className="aae__input" name="name" required />
      </label>

      <label className="aae__label">
        Phone number
        <input className="aae__input" name="phone" required />
      </label>

      <label className="aae__label">
        Email (optional)
        <input className="aae__input" name="email" />
      </label>

      <label className="aae__label">
        Service needed
        <select className="aae__input" name="service" required>
          <option value="">Select service</option>
          <option>Air Duct Cleaning</option>
          <option>Dryer Vent Cleaning</option>
          <option>Both</option>
        </select>
      </label>

      <label className="aae__label">
        City / ZIP
        <input className="aae__input" name="location" required />
      </label>

      <label className="aae__label">
        Notes
        <textarea className="aae__textarea" name="notes" />
      </label>

      <button
        className="aae__btn aae__btn--primary"
        type="submit"
        disabled={loading}
        style={{ width: "100%" }}
      >
        {loading ? "Sending..." : "Get My Quote"}
      </button>
    </form>
  );
}
