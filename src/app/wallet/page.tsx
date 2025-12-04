"use client";

import React, { useEffect, useState } from "react";
import { useProtectedRoute } from "@/lib/hooks/useAuth";

const transactions = [
  { id: "TX-001", title: "Sale - Premium Wireless Headphones", status: "Completed", amount: "+$299.99", date: "1/15/2024", type: "credit" },
  { id: "TX-002", title: "Withdrawal to Bank Account", status: "Completed", amount: "-$500.00", date: "1/14/2024", type: "debit" },
  { id: "TX-003", title: "Sale - Organic Cotton T-Shirt (3x)", status: "Completed", amount: "+$89.97", date: "1/14/2024", type: "credit" },
];

export default function WalletPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Wallet & Finance</h1>
          <p className="text-sm text-gray-500">Manage your earnings and financial transactions</p>
        </div>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg shadow whitespace-nowrap">Withdraw Funds</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border rounded-lg p-4 shadow-sm">
          <div className="text-sm text-gray-500">Available Balance</div>
          <div className="text-2xl font-semibold">$1247.83</div>
          <div className="text-xs text-gray-400">Ready for withdrawal</div>
        </div>

        <div className="bg-white border rounded-lg p-4 shadow-sm">
          <div className="text-sm text-gray-500">Pending Balance</div>
          <div className="text-2xl font-semibold">$199.97</div>
          <div className="text-xs text-gray-400">Processing payments</div>
        </div>

        <div className="bg-white border rounded-lg p-4 shadow-sm">
          <div className="text-sm text-gray-500">Total Earnings</div>
          <div className="text-2xl font-semibold">$389.96</div>
          <div className="text-xs text-gray-400">All time revenue</div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <ActionCard title="Withdraw" subtitle="Transfer to bank" />
        <ActionCard title="Statements" subtitle="Download reports" />
        <ActionCard title="Settings" subtitle="Payment methods" />
        <ActionCard title="Support" subtitle="Get help" />
      </div>
      <div className="bg-white border rounded-lg p-4 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
          <div className="font-semibold">Transaction History</div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
            <select className="border rounded-lg px-3 py-2 text-sm">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
            <button className="px-3 py-2 border rounded text-sm whitespace-nowrap">Export</button>
          </div>
        </div>

        <div className="space-y-3">
          {transactions.map((t) => (
            <div key={t.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 border rounded-lg">
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{t.title} <span className="ml-2 text-xs text-gray-500">{t.id}</span></div>
                <div className="text-xs text-gray-400">{t.status}</div>
              </div>

              <div className="text-right flex-shrink-0">
                <div className={`font-semibold ${t.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>{t.amount}</div>
                <div className="text-xs text-gray-400">{t.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ActionCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm flex items-start gap-3">
      <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-500">💸</div>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-xs text-gray-500">{subtitle}</div>
      </div>
    </div>
  );
}
