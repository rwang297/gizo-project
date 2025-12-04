"use client";

import { useEffect, useState } from "react";
import BusinessProfilePage from "@/components/BusinessProfilePage";
import { useProtectedRoute } from "@/lib/hooks/useAuth";

export default function CampaignPage() {
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

  return <BusinessProfilePage />;
}
