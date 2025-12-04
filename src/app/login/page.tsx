"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Instantly navigate without any backend validation
    router.push("/dashboard");
  }

  return (
    <div className="flex w-full justify-center py-10">
      <div className="w-full max-w-md rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-emerald-800">Welcome back</h1>
          <p className="mt-1 text-sm text-emerald-800/80">Login to your account</p>
        </div>

        <form onSubmit={onSubmit}>
          <label className="block text-sm font-medium text-gray-800">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-lg border border-emerald-300 bg-white px-3 py-2 text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            autoComplete="email"
          />

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-800">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border border-emerald-300 bg-white px-3 py-2 text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-emerald-600 px-4 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            Login
          </button>

          <p className="mt-3 text-center text-sm text-gray-700">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="font-semibold text-emerald-700 hover:underline">
              Create one
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
