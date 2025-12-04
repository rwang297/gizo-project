"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { authService } from "@/lib/auth";
import Link from "next/link";

export default function VerifyEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"waiting" | "verifying" | "success" | "error">("waiting");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const userId = searchParams.get("userId");
    const token = searchParams.get("token");

    // If URL has verification params, verify automatically
    if (userId && token) {
      verifyEmail(userId, token);
    } else {
      // Otherwise, show waiting message with stored user email
      const user = authService.getUser();
      if (user?.email) {
        setEmail(user.email);
      }
    }
  }, [searchParams]);

  async function verifyEmail(userId: string, token: string) {
    setStatus("verifying");
    setMessage("Verifying your email...");

    try {
      const result = await authService.verifyEmail(userId, token);
      setStatus("success");
      setMessage("Email verified successfully! Redirecting to login...");
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Verification failed. Please try again.");
    }
  }

  const handleManualVerification = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userId = formData.get("userId") as string;
    const token = formData.get("token") as string;

    if (!userId || !token) {
      setMessage("Please provide both User ID and verification token");
      return;
    }

    await verifyEmail(userId, token);
  };

  return (
    <div className="flex w-full justify-center py-10">
      <div className="w-full max-w-md rounded-2xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-emerald-800">Verify Your Email</h1>
          <p className="mt-1 text-sm text-emerald-800/80">Complete your account setup</p>
        </div>

        {status === "waiting" && (
          <div className="space-y-6">
            <div className="rounded-lg bg-blue-50 border border-blue-200 p-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900">Check your email</h3>
                  <p className="mt-1 text-sm text-blue-800">
                    {email ? (
                      <>We sent a verification link to <strong>{email}</strong>. Click the link to verify your email.</>
                    ) : (
                      <>We sent a verification link to your email address. Click the link to verify your email.</>
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-emerald-200 pt-6">
              <h2 className="font-semibold text-gray-800 mb-4">Or verify manually</h2>
              <p className="text-sm text-gray-600 mb-4">If you didn't receive the email, you can paste the verification details here:</p>
              
              <form onSubmit={handleManualVerification} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-800">User ID</label>
                  <input
                    type="text"
                    name="userId"
                    className="mt-1 w-full rounded-lg border border-emerald-300 bg-white px-3 py-2 text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    placeholder="Your user ID"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-800">Verification Token</label>
                  <input
                    type="text"
                    name="token"
                    className="mt-1 w-full rounded-lg border border-emerald-300 bg-white px-3 py-2 text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    placeholder="Your verification token"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-emerald-600 px-4 py-2 font-semibold text-white transition hover:bg-emerald-700"
                >
                  Verify Email
                </button>
              </form>
            </div>
          </div>
        )}

        {status === "verifying" && (
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 rounded-full border-4 border-emerald-200 border-t-emerald-600 animate-spin"></div>
              </div>
            </div>
            <p className="text-gray-700">{message}</p>
          </div>
        )}

        {status === "success" && (
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-green-900 text-lg">{message}</h3>
              <p className="mt-2 text-sm text-gray-600">You will be redirected to login shortly...</p>
            </div>
            <div>
              <Link href="/login" className="inline-block rounded-lg bg-emerald-600 px-6 py-2 font-semibold text-white transition hover:bg-emerald-700">
                Go to Login
              </Link>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-red-900 text-lg">Verification Failed</h3>
              <p className="mt-2 text-sm text-gray-600">{message}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Try entering your verification details again:</p>
              <form onSubmit={handleManualVerification} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-800">User ID</label>
                  <input
                    type="text"
                    name="userId"
                    className="mt-1 w-full rounded-lg border border-emerald-300 bg-white px-3 py-2 text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    placeholder="Your user ID"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-800">Verification Token</label>
                  <input
                    type="text"
                    name="token"
                    className="mt-1 w-full rounded-lg border border-emerald-300 bg-white px-3 py-2 text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    placeholder="Your verification token"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-emerald-600 px-4 py-2 font-semibold text-white transition hover:bg-emerald-700"
                >
                  Try Again
                </button>
              </form>
            </div>
            <div>
              <Link href="/signup" className="text-sm text-emerald-700 hover:underline font-semibold">
                Back to Signup
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
