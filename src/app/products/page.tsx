"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiDollarSign } from "react-icons/fi";
import { useProtectedRoute } from "@/lib/hooks/useAuth";

const products = [
  {
    id: "p1",
    title: "Fresh Tomatoes Basket",
    category: "Electronics",
    price: "₦299.99",
    stock: 45,
    sold: 127,
    status: "Added",
    image: "images/tomatoes.png",
  },
  {
    id: "p2",
    title: "Organic Cotton Material",
    category: "Clothing",
    price: "₦2,000",
    stock: 0,
    sold: 89,
    status: "Added",
    image: "images/material.png",
  },
  {
    id: "p3",
    title: "Apples Basket",
    category: "Electronics",
    price: "₦199.99",
    stock: 23,
    sold: 156,
    status: "Added",
    image: "images/apple.png",
  },
  {
    id: "p4",
    title: "Fresh Spinages",
    category: "Food & Beverage",
    price: "₦200",
    stock: 78,
    sold: 203,
    status: "Added",
    image: "images/vegetables.png",
  },
  {
    id: "p5",
    title: "Toyota, Camry",
    category: "Beauty",
    price: "₦149,000",
    stock: 12,
    sold: 67,
    status: "Added",
    image: "images/cars.png",
  },
  {
    id: "p6",
    title: "T-Shirts",
    category: "Accessories",
    price: "₦8,000",
    stock: 34,
    sold: 0,
    status: "Added",
    image: "images/tshirt.png",
  },
];

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-700">Products & Inventory</h1>
          <p className="text-sm text-gray-500">Manage your product catalog and inventory levels</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/products/new" className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">
            + Add Product
          </Link>
        </div>
      </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Card
              title="Total Products"
              value={<span className="text-gray-700">{products.length}</span>}
              icon={kpiIcon()}
            >
              <div className="text-xs text-gray-700">6</div>
            </Card>
            <Card
              title="Active Products"
              value={<span className="text-gray-700">{products.filter((p) => p.status === "Active").length}</span>}
              icon={kpiIcon()}
            >
              <div className="text-xs text-gray-700">Active</div>
            </Card>
            <Card
              title="Low Stock"
              value={<span className="text-gray-700">{products.filter((p) => p.stock > 0 && p.stock < 10).length}</span>}
              icon={kpiIcon()}
            >
              <div className="text-xs text-gray-700">1</div>
            </Card>
          </div>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <input placeholder="Search products..." className="flex-1 border rounded-lg px-4 py-2 text-sm text-gray-700" />
        <select className="border rounded-lg px-6 py-2 text-sm text-gray-800">
          <option>Select</option>
          <option>Newly Added</option>
          <option>Lastly Added</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <article key={p.id} className="bg-white border rounded-lg p-4 shadow-sm">
            <div className="h-40 rounded-md bg-gray-100 overflow-hidden mb-3">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-700">{p.title}</div>
                <div className="text-xs text-gray-500">{p.category}</div>
              </div>
              <div>
                <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                  p.status === "Active" ? "bg-green-50 text-green-600" : p.status === "Out of Stock" ? "bg-red-50 text-red-600" : "bg-green-300 text-gray-600"
                }`}>
                  {p.status}
                </span>
              </div>
            </div>

            <div className="mt-3">
              <div className="text-lg font-semibold text-gray-500">{p.price}</div>
              <div className="text-xs text-gray-500 mt-1">Stock: {p.stock}</div>
              <div className="text-xs text-gray-400">{p.sold} sold</div>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
              <div>⋯</div>
              <div className="flex items-center gap-3">
                <button className="text-xs text-gray-500">✎</button>
                <button className="text-xs text-gray-500">🗑</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function Card({ title, value, children, icon }: { title: string; value: React.ReactNode; children?: React.ReactNode; icon?: React.ReactNode; }) {
  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm flex items-center justify-between gap-3">
      <div>
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-xl font-semibold">{value}</div>
        <div className="text-xs text-gray-400 mt-1">{children}</div>
      </div>
      <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">📦</div>
    </div>
  );
}

function kpiIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="8" height="8" rx="2" stroke="#cbd5e1" strokeWidth="1.5" />
    </svg>
  );
}
