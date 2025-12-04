"use client";

import React, { useState, useEffect } from "react";
import { useProtectedRoute } from "@/lib/hooks/useAuth";

type SettingCard = {
  id: string;
  icon: string;
  title: string;
  description: string;
  status?: string;
  badge?: string;
};

export default function SettingsPage() {
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

  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "+234 802 123 4567",
  });

  const [business, setBusiness] = useState({
    businessName: "John's Fashion Store",
    category: "Fashion & Accessories",
    address: "Lagos, Nigeria",
    website: "https://example.com",
    description: "Premium fashion and accessories for everyone",
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsAlerts: true,
    marketingEmails: false,
    twoFactorAuth: false,
    publicProfile: true,
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const iconComponents: { [key: string]: React.ReactNode } = {
    profile: (
      <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c2.667-1.333 4-3 4-6s-1.333-4.667-4-6c-2.667 1.333-4 3-4 6s1.333 4.667 4 6z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 20h8c2.667-2 4-4 4-8s-1.333-6-4-8H8c-2.667 2-4 4-4 8s1.333 6 4 8z" />
      </svg>
    ),
    password: (
      <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2zm3-10V7a3 3 0 0 1 6 0v2" />
      </svg>
    ),
    avatar: (
      <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 0 1 2.828 0l8.586 8.586V4H4v12zm0 0v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4m-2.586-5.414a2 2 0 1 1 2.828-2.828 2 2 0 0 1-2.828 2.828z" />
      </svg>
    ),
    "business-info": (
      <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m10-3.5v3.5m0-3.5v-8m0 8h5m0 0h2m-7-3h7" />
      </svg>
    ),
    location: (
      <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      </svg>
    ),
    media: (
      <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12a4 4 0 0 1-4 4zm0 0h12a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.5a1 1 0 0 1-1-1V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1z" />
      </svg>
    ),
    notifications: (
      <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6.002 6.002 0 0 0-4-5.659V5a2 2 0 1 0-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 1 1-6 0v-1m6 0H9" />
      </svg>
    ),
    email: (
      <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
      </svg>
    ),
    sms: (
      <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
      </svg>
    ),
    privacy: (
      <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2zm3-10V7a3 3 0 0 1 6 0v2" />
      </svg>
    ),
    data: (
      <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 19a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4l2 3h6a2 2 0 0 1 2 2v1M5 19h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2z" />
      </svg>
    ),
    sessions: (
      <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20m0 0l-.75 3M9 20a3 3 0 1 1-6 0m6 0l-1.5-6m12.75-5.25A6.002 6.002 0 0 0 6 10.5m0 0a6 6 0 1 1 12 0" />
      </svg>
    ),
  };

  const settingGroups = [
    {
      name: "Account & Profile",
      color: "from-blue-500 to-cyan-500",
      cards: [
        {
          id: "profile",
          icon: "profile",
          title: "Personal Information",
          description: "Update your name, email, and phone number",
          status: "Active",
        },
        {
          id: "password",
          icon: "password",
          title: "Password & Security",
          description: "Change password, setup two-factor authentication",
          badge: "Last changed 3 months ago",
        },
        {
          id: "avatar",
          icon: "avatar",
          title: "Profile Picture",
          description: "Upload or change your profile photo",
          status: "Set",
        },
      ] as SettingCard[],
    },
    {
      name: "Business Settings",
      color: "from-indigo-500 to-purple-500",
      cards: [
        {
          id: "business-info",
          icon: "business-info",
          title: "Business Information",
          description: "Manage business name, category, and details",
          status: "Configured",
        },
        {
          id: "location",
          icon: "location",
          title: "Location & Website",
          description: "Set your business address and website URL",
          status: "Set",
        },
        {
          id: "media",
          icon: "media",
          title: "Branding Assets",
          description: "Upload logo, cover image, and brand photos",
          badge: "Logo pending",
        },
      ] as SettingCard[],
    },
    {
      name: "Notifications & Communication",
      color: "from-orange-500 to-red-500",
      cards: [
        {
          id: "notifications",
          icon: "notifications",
          title: "Notification Preferences",
          description: "Choose how you want to receive updates",
          status: "Customized",
        },
        {
          id: "email",
          icon: "email",
          title: "Email Settings",
          description: "Manage email frequency and content preferences",
          status: "Active",
        },
        {
          id: "sms",
          icon: "sms",
          title: "SMS & Mobile Alerts",
          description: "Configure urgent notifications via SMS",
          status: preferences.smsAlerts ? "Enabled" : "Disabled",
        },
      ] as SettingCard[],
    },
    {
      name: "Privacy & Data",
      color: "from-green-500 to-emerald-500",
      cards: [
        {
          id: "privacy",
          icon: "privacy",
          title: "Privacy Controls",
          description: "Manage what information is public",
          status: "Custom",
        },
        {
          id: "data",
          icon: "data",
          title: "Data & Export",
          description: "Download your data or delete account",
          badge: "Last exported 2 weeks ago",
        },
        {
          id: "sessions",
          icon: "sessions",
          title: "Active Sessions",
          description: "View and manage your active sessions",
          status: "1 active",
        },
      ] as SettingCard[],
    },
  ];

  return (
    <div className="settings-page bg-gray-50 min-h-screen p-3 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="settings-header mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Settings & Preferences</h1>
          <p className="text-sm md:text-base text-gray-600 mt-2 max-w-3xl leading-relaxed">
            Customize your account, business profile, and how you interact with the platform. All changes are saved automatically.
          </p>
        </div>

        {saved && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm flex items-center gap-2">
            <span className="flex-shrink-0">✓</span> <span>All changes saved successfully</span>
          </div>
        )}

        <div className="space-y-8 md:space-y-10 lg:space-y-12">
          {settingGroups.map((group) => (
            <section key={group.name} className="settings-group">
              <div className="mb-5 md:mb-6 flex items-center gap-3">
                <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${group.color}`}></div>
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900">{group.name}</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
                {group.cards.map((card) => (
                  <button
                    key={card.id}
                    onClick={() => setActiveSection(activeSection === card.id ? null : card.id)}
                    className="setting-card group relative bg-white rounded-lg border border-gray-200 p-5 md:p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-200 cursor-pointer text-left h-full flex flex-col"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>{iconComponents[card.icon as string]}</div>
                      {card.status && (
                        <span className="text-xs font-medium px-2 py-1 bg-green-50 text-green-700 rounded-full whitespace-nowrap ml-2">
                          {card.status}
                        </span>
                      )}
                    </div>

                    <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition text-base md:text-lg">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2 flex-grow">{card.description}</p>

                    {card.badge && (
                      <p className="text-xs text-gray-400 mt-3 italic">{card.badge}</p>
                    )}

                    <div className="absolute top-5 right-5 md:top-6 md:right-6 text-gray-300 group-hover:text-gray-600 transition">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>

              {activeSection && (
                <div className="mt-6 md:mt-8 p-5 md:p-6 lg:p-8 bg-white rounded-lg border border-gray-200 shadow-sm">
                  {activeSection === "profile" && (
                    <div className="space-y-4 md:space-y-6">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                        <input
                          type="text"
                          placeholder="First Name"
                          value={profile.firstName}
                          onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                          className="px-4 py-2 md:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 outline-none"
                        />
                        <input
                          type="text"
                          placeholder="Last Name"
                          value={profile.lastName}
                          onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                          className="px-4 py-2 md:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 outline-none"
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          value={profile.email}
                          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                          className="px-4 py-2 md:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 outline-none"
                        />
                        <input
                          type="tel"
                          placeholder="Phone"
                          value={profile.phone}
                          onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                          className="px-4 py-2 md:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 outline-none"
                        />
                      </div>
                      <div className="flex flex-col-reverse sm:flex-row gap-3 justify-end pt-4">
                        <button
                          onClick={() => setActiveSection(null)}
                          className="px-4 md:px-6 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSave}
                          className="px-4 md:px-6 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  )}

                  {activeSection === "password" && (
                    <div className="space-y-4 md:space-y-6">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900">Password & Security</h3>
                      <div className="space-y-4 md:space-y-5">
                        <input
                          type="password"
                          placeholder="Current Password"
                          className="w-full px-4 py-2 md:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 outline-none"
                        />
                        <input
                          type="password"
                          placeholder="New Password"
                          className="w-full px-4 py-2 md:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 outline-none"
                        />
                        <input
                          type="password"
                          placeholder="Confirm Password"
                          className="w-full px-4 py-2 md:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 outline-none"
                        />
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="text-sm text-gray-700">Two-Factor Authentication</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only"
                              checked={preferences.twoFactorAuth}
                              onChange={(e) =>
                                setPreferences({ ...preferences, twoFactorAuth: e.target.checked })
                              }
                            />
                            <div
                              className={`w-11 h-6 rounded-full transition-colors ${
                                preferences.twoFactorAuth ? "bg-indigo-600" : "bg-gray-300"
                              }`}
                            ></div>
                          </label>
                        </div>
                      </div>
                      <div className="flex flex-col-reverse sm:flex-row gap-3 justify-end pt-4">
                        <button
                          onClick={() => setActiveSection(null)}
                          className="px-4 md:px-6 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSave}
                          className="px-4 md:px-6 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium"
                        >
                          Update Password
                        </button>
                      </div>
                    </div>
                  )}

                  {activeSection === "business-info" && (
                    <div className="space-y-4 md:space-y-6">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900">Business Information</h3>
                      <div className="space-y-4 md:space-y-5">
                        <input
                          type="text"
                          placeholder="Business Name"
                          value={business.businessName}
                          onChange={(e) => setBusiness({ ...business, businessName: e.target.value })}
                          className="w-full px-4 py-2 md:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 outline-none"
                        />
                        <select
                          value={business.category}
                          onChange={(e) => setBusiness({ ...business, category: e.target.value })}
                          className="w-full px-4 py-2 md:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 outline-none"
                        >
                          <option>Fashion & Accessories</option>
                          <option>Food & Beverages</option>
                          <option>Electronics</option>
                          <option>Services</option>
                        </select>
                        <textarea
                          placeholder="Business Description"
                          value={business.description}
                          onChange={(e) => setBusiness({ ...business, description: e.target.value })}
                          rows={4}
                          className="w-full px-4 py-2 md:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 outline-none resize-none"
                        />
                      </div>
                      <div className="flex flex-col-reverse sm:flex-row gap-3 justify-end pt-4">
                        <button
                          onClick={() => setActiveSection(null)}
                          className="px-4 md:px-6 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSave}
                          className="px-4 md:px-6 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium"
                        >
                          Save Business Info
                        </button>
                      </div>
                    </div>
                  )}

                  {activeSection === "notifications" && (
                    <div className="space-y-4 md:space-y-6">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900">Notification Preferences</h3>
                      <div className="space-y-3 md:space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="text-sm text-gray-700">Email Notifications</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only"
                              checked={preferences.emailNotifications}
                              onChange={(e) =>
                                setPreferences({ ...preferences, emailNotifications: e.target.checked })
                              }
                            />
                            <div
                              className={`w-11 h-6 rounded-full transition-colors ${
                                preferences.emailNotifications ? "bg-indigo-600" : "bg-gray-300"
                              }`}
                            ></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="text-sm text-gray-700">SMS Alerts</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only"
                              checked={preferences.smsAlerts}
                              onChange={(e) =>
                                setPreferences({ ...preferences, smsAlerts: e.target.checked })
                              }
                            />
                            <div
                              className={`w-11 h-6 rounded-full transition-colors ${
                                preferences.smsAlerts ? "bg-indigo-600" : "bg-gray-300"
                              }`}
                            ></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="text-sm text-gray-700">Marketing Emails</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only"
                              checked={preferences.marketingEmails}
                              onChange={(e) =>
                                setPreferences({ ...preferences, marketingEmails: e.target.checked })
                              }
                            />
                            <div
                              className={`w-11 h-6 rounded-full transition-colors ${
                                preferences.marketingEmails ? "bg-indigo-600" : "bg-gray-300"
                              }`}
                            ></div>
                          </label>
                        </div>
                      </div>
                      <div className="flex flex-col-reverse sm:flex-row gap-3 justify-end pt-4">
                        <button
                          onClick={() => setActiveSection(null)}
                          className="px-4 md:px-6 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSave}
                          className="px-4 md:px-6 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium"
                        >
                          Save Preferences
                        </button>
                      </div>
                    </div>
                  )}

                  {!["profile", "password", "business-info", "notifications"].includes(activeSection) && (
                    <div className="text-center text-gray-500 py-8 md:py-12">
                      <p>Expand this section to manage these settings.</p>
                    </div>
                  )}
                </div>
              )}
            </section>
          ))}
        </div>

        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-gray-200 flex flex-col-reverse sm:flex-row gap-3 justify-end">
          <button className="px-4 md:px-6 py-2 text-sm bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition">
            Export Settings
          </button>
          <button className="px-4 md:px-6 py-2 text-sm bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-lg hover:opacity-90 font-medium transition">
            Save All Changes
          </button>
        </div>
      </div>
    </div>
  );
}
