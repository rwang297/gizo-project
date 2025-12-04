"use client";

import React, { useEffect, useState } from "react";
import { useProtectedRoute } from "@/lib/hooks/useAuth";

const orders = [
  { id: "PRD-001", customer: "Products", email: "Added", items: 1, total: "₦499.98", date: "1/15/2024",  avatar: "images/apple.png" },
  { id: "PRD-002", customer: "Services", email: "Added", items: 2, total: "₦89.97", date: "1/14/2024",  avatar: "images/material.png" },
  { id: "PRD-003", customer: "Products", email: "Added", items: 3, total: "₦199.97", date: "1/13/2024",  avatar: "images/vegetables.png" },
  { id: "PRD-004", customer: "Services", email: "Added", items: 4, total: "₦89.99", date: "1/15/2024",  avatar: "images/tshirt.png" },
];

export default function OrdersPage() {
  const kpis = [
    { title: "Total Products", value: "5", color: "blue" },
    { title: "Pending", value: "1", color: "yellow" },
    { title: "Completed", value: "1", color: "green" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Products Management</h1>
          <p className="text-sm text-gray-500">Track and manage your Products</p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
          <input placeholder="Search orders or customers..." className="border rounded-lg px-3 py-2 text-sm flex-1 sm:flex-none sm:w-[200px] lg:w-[280px] text-gray-600" />
          <select className="border rounded-lg px-4 py-2 text-sm text-gray-600 whitespace-nowrap">
            <option>All Status</option>
            <option>Pending</option>
            <option>Completed</option>
          </select>
          <button className="px-3 py-2 bg-blue-600 text-white rounded text-sm whitespace-nowrap">Filter</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <div key={k.title} className="bg-white border rounded-lg p-4 shadow-sm flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-500">{k.title}</div>
              <div className="text-xl font-semibold text-gray-600">{k.value}</div>
            </div>
            <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">{k.title === 'Total Orders' ? '📦' : '🔔'}</div>
          </div>
        ))}
      </div>

      <div className="bg-white border rounded-lg p-4 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="font-semibold text-gray-700">Recent Products</div>
          <button className="text-sm px-3 py-1 border rounded text-gray-500">View All</button>
        </div>

        <div className="space-y-3">
          {orders.map((o) => (
            <div key={o.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 border rounded-lg">
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <img src={o.avatar} alt="avatar" className="w-10 h-10 rounded-full flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-gray-500 truncate">{o.id} <span className="ml-2 text-xs text-gray-500"></span></div>
                  <div className="text-xs text-gray-500">{o.customer}</div>
                  <div className="text-xs text-gray-400">{o.email}</div>
                </div>
              </div>

              <div className="text-sm text-gray-500 grid grid-cols-3 sm:flex sm:flex-col gap-3 sm:gap-0 sm:text-right w-full sm:w-auto">
                <div>Items <span className="font-medium block sm:inline sm:ml-2">{o.items}</span></div>
                <div>Total <span className="font-medium block sm:inline sm:ml-2">{o.total}</span></div>
                <div className="text-xs text-gray-400">{o.date}</div>
              </div>

              <div className="text-gray-400 text-right">⋯</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
