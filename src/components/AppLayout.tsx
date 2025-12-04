"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const noSidebarRoutes = new Set(["/", "/login", "/signup", "/marketplace", "/campaign"]);
  const showSidebar = !noSidebarRoutes.has(pathname);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    let mounted = true;
    async function checkFetch() {
      const runSuccess = () => {
        if (!mounted) return;
        (window as any).__RSC_OK = true;
        try {
          localStorage.removeItem("forceFullNav");
        } catch (e) {
        }
      };

      const runFailure = (err?: any) => {
        if (!mounted) return;
        (window as any).__RSC_OK = false;
        try {
          localStorage.setItem("forceFullNav", "1");
        } catch (e) {
        }
        console.warn("Client fetch check failed - falling back to full page navigation.", err);
      };
      try {
        const nativeFetch = (globalThis as any).fetch;
        if (typeof nativeFetch === "function") {
          await Promise.resolve().then(() => nativeFetch("/favicon.ico", { method: "HEAD", cache: "no-store", credentials: "same-origin" }));
          runSuccess();
          return;
        }
      } catch (err) {
      }
      await new Promise<void>((resolve) => {
        const img = new Image();
        let settled = false;
        const cleanup = () => {
          img.onload = null;
          img.onerror = null;
        };
        img.onload = () => {
          if (settled) return;
          settled = true;
          cleanup();
          runSuccess();
          resolve();
        };
        img.onerror = (e) => {
          if (settled) return;
          settled = true;
          cleanup();
          runFailure(e);
          resolve();
        };
        img.src = "/favicon.ico?__rsc_check=" + Date.now();
        setTimeout(() => {
          if (settled) return;
          settled = true;
          cleanup();
          runFailure(new Error("timeout"));
          resolve();
        }, 3000);
      });
    }

    checkFetch();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    setMobileSidebarOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {showSidebar && <Sidebar isOpen={mobileSidebarOpen} onClose={() => setMobileSidebarOpen(false)} />}
      <div className={`flex-1 min-h-screen flex flex-col ${showSidebar ? 'md:ml-64' : ''}`}>
        {!showSidebar ? (
          <Header />
        ) : (
          <div className="md:hidden sticky top-0 z-30 bg-white border-b border-gray-100">
            <div className="px-4 py-4 flex items-center justify-between">
              <button
                onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white">
                  <img
                    src="/images/logos.png"
                    alt="Logo"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <span className="text-base font-semibold text-gray-900">Kasuwan Gizo</span>
              </div>
              <div className="w-6" />
            </div>
          </div>
        )}
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
