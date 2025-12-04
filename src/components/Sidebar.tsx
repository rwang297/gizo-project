"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen = false, onClose }: SidebarProps) {
  const pathname = usePathname() || "/";

  const [forceFullNav, setForceFullNav] = useState(false);

  useEffect(() => {
    try {
      const flag = (window as any).__RSC_OK === false || localStorage.getItem("forceFullNav") === "1";
      setForceFullNav(Boolean(flag));
    } catch (e) {
      setForceFullNav(false);
    }
  }, []);

  const avatar = "https://cdn.builder.io/api/v1/image/assets%2Fb16a3dc5d258478fa272121e4fcb7921%2F3e42aadbf059434dbb67f377dc626879?format=webp&width=800";

  const menu = [
    { label: "Dashboard", href: "/dashboard", icon: "dashboard" },
    { label: "Products & Inventory", href: "/products", icon: "box" },
    { label: "Products Management", href: "/orders", icon: "orders" },
    { label: "Customers", href: "/customers", icon: "users" },
    { label: "Notifications", href: "/notifications", icon: "bell" },
    { label: "Business Profile", href: "/profile", icon: "profile" },
    { label: "Settings", href: "/settings", icon: "settings" },
  ];

  const SidebarContent = () => (
    <>
      <div className="px-4 py-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white">
            <img
              src="/images/logos.png"
              alt="Logo"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
          <span className="text-lg font-semibold text-gray-900">Kasuwan Gizo</span>
        </div>
      </div>

      <nav className="flex-1 px-2 py-4 overflow-y-auto">
        <ul className="space-y-1">
          {menu.map((item) => {
            const isActive =
              pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href + "/"));

            const classes =
              `group flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ` +
              (isActive
                ? "bg-gradient-to-r from-green-600 to-yellow-500 hover:from-purple-700 hover:to-pink-700 text-white shadow-sm"
                : "text-gray-700 hover:bg-gray-50");

            return (
              <li key={item.label}>
                {forceFullNav ? (
                  <a href={item.href} className={classes} onClick={onClose}>
                    <span className="w-5 h-5 text-gray-500 group-hover:text-gray-700 flex items-center justify-center">
                      {getIcon(item.icon)}
                    </span>
                    <span className="flex-1">{item.label}</span>
                  </a>
                ) : (
                  <Link href={item.href} className={classes} onClick={onClose}>
                    <span className="w-6 h-6 text-gray-500 group-hover:text-gray-700 flex items-center justify-center">
                      {getIcon(item.icon)}
                    </span>
                    <span className="flex-1">{item.label}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="px-4 py-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full object-cover" />
          <div>
            <div className="text-sm font-semibold text-gray-700">John Doe</div>
            <div className="text-xs text-gray-500">Business Owner</div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-100 flex-col overflow-y-auto z-40">
        <SidebarContent />
      </aside>

      {/* Mobile Drawer Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-100 flex-col overflow-y-auto z-40 md:hidden transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarContent />
      </aside>
    </>
  );
}

function getIcon(name: string) {
  switch (name) {
    case "dashboard":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <rect x="13" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <rect x="3" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <rect x="13" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "box":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      );
    case "orders":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 7h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M3 17h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "wallet":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="18" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "users":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM8 11c1.657 0 3-1.343 3-3S9.657 5 8 5 5 6.343 5 8s1.343 3 3 3z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M2 19c0-2.761 3.582-5 8-5s8 2.239 8 5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "bell":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 17H9v-5a3 3 0 0 1 6 0v5z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "profile":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M4 20c1.333-2 4.667-4 8-4s6.667 2 8 4" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "settings":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06A2 2 0 1 1 4.27 18.7l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09c.68 0 1.3-.26 1.77-.73A1.65 1.65 0 0 0 5.19 8.7l-.06-.06A2 2 0 1 1 8 4.27l.06.06c.36.36.88.59 1.42.63.53-.04 1.05-.27 1.42-.63L11.94 4a2 2 0 1 1 2.83 0l.06.06c.36.36.88.59 1.42.63.53-.04 1.05-.27 1.42-.63l.06-.06A2 2 0 1 1 19.4 8.7l-.06.06c-.36.36-.59.88-.63 1.42.04.53.27 1.05.63 1.42l.06.06A2 2 0 0 1 19.4 15z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    default:
      return null;
  }
}
