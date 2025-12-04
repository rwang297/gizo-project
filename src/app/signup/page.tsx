"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authService, SignupData } from "@/lib/auth";

type FormValues = SignupData;

export default function SignupPage() {
  const router = useRouter();
  const [values, setValues] = useState<FormValues>({
    businessName: "",
    contactPersonName: "",
    email: "",
    password: "",
    phoneNumber: "",
    businessType: "",
    location: "",
    whatsapp: "",
    facebook: "",
    instagram: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [generalError, setGeneralError] = useState("");

  const businessTypes = useMemo(
    () => [
      "Retail",
      "Services",
      "Manufacturing",
      "Agriculture",
      "Food & Beverage",
      "Health & Beauty",
      "Technology",
      "Education",
      "Other",
    ],
    []
  );

  function onChange<K extends keyof FormValues>(key: K, val: FormValues[K]) {
    setValues((v) => ({ ...v, [key]: val }));
    setErrors((e) => ({ ...e, [key]: undefined }));
    setGeneralError("");
  }

  function validate(v: FormValues) {
    const err: Partial<Record<keyof FormValues, string>> = {};
    if (!v.businessName.trim()) err.businessName = "Business name is required";
    if (!v.contactPersonName.trim()) err.contactPersonName = "Contact person name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) err.email = "Enter a valid email";
    if (!v.password || v.password.length < 6) err.password = "Password must be at least 6 characters";
    if (!/^\+?[0-9]{7,15}$/.test(v.phoneNumber)) err.phoneNumber = "Enter a valid phone number";
    if (!v.businessType) err.businessType = "Select a business type";
    if (!v.location.trim()) err.location = "Location is required";
    // Social media fields are optional and accept any input
    return err;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setGeneralError("");
    setSubmitting(true);

    try {
      const response = await authService.signup(values);
      // Redirect to authentication page to verify email
      router.push("/auth/verify");
    } catch (error) {
      setGeneralError(error instanceof Error ? error.message : "Signup failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex w-full justify-center py-10">
      <div className="w-full max-w-4xl rounded-2xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-emerald-800">Join Kasuwan Gizo</h1>
          <p className="mt-1 text-sm text-emerald-800/80">Create your MSME profile and start connecting with customers</p>
        </div>

        <div className="mb-4 flex items-start justify-between gap-4">
          <p className="text-sm text-emerald-800/90 max-w-xl">Tip: Have photos, a short description and product prices ready to complete your listing faster.</p>
          <div className="hidden md:block rounded-md bg-white border border-emerald-100 px-3 py-2 text-sm text-emerald-700">Estimated time: 5 min</div>
        </div>

        {generalError && (
          <div className="mb-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-800">
            {generalError}
          </div>
        )}

        <form onSubmit={onSubmit} noValidate>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-800">Business Name *</label>
              <input
                type="text"
                value={values.businessName}
                onChange={(e) => onChange("businessName", e.target.value)}
                className="mt-1 w-full rounded-lg border border-emerald-300 bg-white px-3 py-2 text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                autoComplete="organization"
              />
              {errors.businessName && <p className="mt-1 text-sm text-red-600">{errors.businessName}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800">Contact Person Name *</label>
              <input
                type="text"
                value={values.contactPersonName}
                onChange={(e) => onChange("contactPersonName", e.target.value)}
                className="mt-1 w-full rounded-lg border border-emerald-300 bg-white px-3 py-2 text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                autoComplete="name"
              />
              {errors.contactPersonName && <p className="mt-1 text-sm text-red-600">{errors.contactPersonName}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800">Email Address *</label>
              <input
                type="email"
                value={values.email}
                onChange={(e) => onChange("email", e.target.value)}
                className="mt-1 w-full rounded-lg border border-emerald-300 bg-white px-3 py-2 text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                autoComplete="email"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800">Password *</label>
              <input
                type="password"
                value={values.password}
                onChange={(e) => onChange("password", e.target.value)}
                className="mt-1 w-full rounded-lg border border-emerald-300 bg-white px-3 py-2 text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                autoComplete="new-password"
              />
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800">Phone Number *</label>
              <input
                type="tel"
                inputMode="tel"
                placeholder="+234XXXXXXXXXX"
                value={values.phoneNumber}
                onChange={(e) => onChange("phoneNumber", e.target.value)}
                className="mt-1 w-full rounded-lg border border-emerald-300 bg-white px-3 py-2 text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                autoComplete="tel"
              />
              {errors.phoneNumber && <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800">Type of Business *</label>
              <select
                value={values.businessType}
                onChange={(e) => onChange("businessType", e.target.value)}
                className="mt-1 w-full rounded-lg border border-emerald-300 bg-white px-3 py-2 text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              >
                <option value="">Select business type</option>
                {businessTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              {errors.businessType && <p className="mt-1 text-sm text-red-600">{errors.businessType}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800">Location *</label>
              <input
                type="text"
                placeholder="City, State"
                value={values.location}
                onChange={(e) => onChange("location", e.target.value)}
                className="mt-1 w-full rounded-lg border border-emerald-300 bg-white px-3 py-2 text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                autoComplete="address-level2"
              />
              {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location}</p>}
            </div>

            <div className="md:col-span-2 mt-4">
              <h2 className="text-base font-semibold text-emerald-900">Social Media Links (Optional)</h2>
              <p className="text-sm text-emerald-900/80 mt-1">Add links to help customers reach you faster.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800">WhatsApp Number</label>
              <input
                type="text"
                inputMode="tel"
                placeholder="+234XXXXXXXXXX"
                value={values.whatsapp}
                onChange={(e) => onChange("whatsapp", e.target.value)}
                className="mt-1 w-full rounded-lg border border-emerald-300 bg-white px-3 py-2 text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              />
              {errors.whatsapp && <p className="mt-1 text-sm text-red-600">{errors.whatsapp}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800">Facebook Profile</label>
              <input
                type="text"
                placeholder="https://facebook.com/yourbusiness or any link"
                value={values.facebook}
                onChange={(e) => onChange("facebook", e.target.value)}
                className="mt-1 w-full rounded-lg border border-emerald-300 bg-white px-3 py-2 text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              />
              {errors.facebook && <p className="mt-1 text-sm text-red-600">{errors.facebook}</p>}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-800">Instagram Handle</label>
              <input
                type="text"
                placeholder="@yourbusiness or any link"
                value={values.instagram}
                onChange={(e) => onChange("instagram", e.target.value)}
                className="mt-1 w-full rounded-lg border border-emerald-300 bg-white px-3 py-2 text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              />
              {errors.instagram && <p className="mt-1 text-sm text-red-600">{errors.instagram}</p>}
            </div>
          </div>

          <div className="my-4 border-t border-emerald-100" />

          <div className="mt-6">
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-lg bg-emerald-600 px-4 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60"
            >
              {submitting ? "Creating Account..." : "Create Account"}
            </button>
            <p className="mt-3 text-center text-sm text-gray-700">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-emerald-700 hover:underline">Login here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
