"use client";

import React, { useEffect, useState } from "react";
import { useProtectedRoute } from "@/lib/hooks/useAuth";

export default function ProfilePage() {
  const { isReady, isAuthenticated } = useProtectedRoute();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading || !isReady) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="relative w-12 h-12 mx-auto mb-4">
            <div className="absolute inset-0 rounded-full border-4 border-emerald-200 border-t-emerald-600 animate-spin"></div>
          </div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-700">Business Profile</h1>
          <p className="text-sm text-gray-500">Manage your business information and public profile</p>
        </div>
        <div>
        </div>
      </div>
      <div className="bg-white border rounded-lg overflow-hidden">
        <div className="h-44 bg-gray-100 relative">
          <img
            src="/images/bg-image.jpg"
            alt="cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute -bottom-6 left-6 flex items-center gap-4">
            <div className="w-20 h-20 rounded-lg bg-white p-1 shadow-md flex items-center justify-center">
              <img src="/images/apple.png" alt="logo" className="w-full h-full object-contain" />
            </div>
            <div className="bg-white rounded-full px-3 py-1 text-sm text-green-600 font-medium shadow">Verified</div>
          </div>
        </div>

        <div className="p-6 pt-10">
          <p className="text-gray-700">We specialize in premium electronics, fashion, and lifestyle products. Our mission is to provide high-quality products with exceptional customer service.</p>
        </div>
      </div>


      <div className="bg-white border rounded-lg p-4">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <button className="px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 text-sm font-medium">General Info</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <label className="block text-sm text-gray-600">Business Name</label>
            <input className="w-full border rounded-lg px-3 py-2 bg-gray-50 text-gray-400" defaultValue="Gizo Premium Store" />

            <label className="block text-sm text-gray-600">Category</label>
            <input className="w-full border rounded-lg px-3 py-2 bg-gray-50 text-gray-500" defaultValue="Electronics & Fashion" />

            <label className="block text-sm text-gray-600">Business Description</label>
            <textarea className="w-full border rounded-lg px-3 py-2 bg-gray-50 h-28 text-gray-500" defaultValue={`We specialize in premium electronics, fashion, and lifestyle products. Our mission is to provide high-quality products with exceptional customer service.`} />

            <label className="block text-sm text-gray-600">Website</label>
            <input className="w-full border rounded-lg px-3 py-2 bg-gray-50 text-gray-500" defaultValue="www.gizopremium.com" />
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 border rounded-lg p-4">
              <div className="text-sm text-gray-600">Verification Status</div>
              <div className="mt-3 bg-green-50 border border-green-100 text-green-700 rounded-lg px-4 py-3">Business Verified — Your business profile has been verified and approved</div>
            </div>

            <div className="bg-gray-50 border rounded-lg p-4">
              <div className="text-sm text-gray-600">Contact Email</div>
              <div className="mt-2 text-sm text-gray-800">contact@gizopremium.com</div>

              <div className="mt-4 text-sm text-gray-600">Phone</div>
              <div className="mt-2 text-sm text-gray-800">+234 800 000 0000</div>

              <div className="mt-4 text-sm text-gray-600">Address</div>
              <div className="mt-2 text-sm text-gray-800">12 Market Street, Lagos, Nigeria</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
