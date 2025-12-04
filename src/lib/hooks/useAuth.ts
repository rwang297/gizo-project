"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "@/lib/auth";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const authenticated = authService.isAuthenticated();
    const user = authService.getUser();
    
    setIsAuthenticated(authenticated);
    setIsLoading(false);

    // If not authenticated, redirect to login
    if (!authenticated) {
      router.push("/login");
    }
  }, [router]);

  return { isAuthenticated, isLoading };
}

export function useProtectedRoute() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return {
      isReady: false,
      isAuthenticated: false,
    };
  }

  return {
    isReady: true,
    isAuthenticated,
  };
}

export function getAuthUser() {
  return authService.getUser();
}

export function getAuthToken() {
  return authService.getToken();
}

export function logout() {
  authService.logout();
}
