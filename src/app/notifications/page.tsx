import React from "react";

const notifications = [
  {
    id: "n1",
    title: "Sarah Johnson Viewed Your Product",
    body: "Sarah Johnson View and Liked your Fresh Tomatoes Basket",
    type: "order",
    severity: "High",
    time: "1/15/2024, 11:30:00 AnM",
  },
  {
    id: "n2",
    title: "Likes Fresh Tomatoes Basket",
    body: "You have 30 likes on PRD-001 Fresh Tomatoes Basket",
    type: "Likes",
    severity: "Medium",
    time: "1/15/2024, 10:45:00 AM",
  },
  {
    id: "n3",
    title: "New Customer Review",
    body: "Emma Williams left a 5-star review for Luxury Skincare Set",
    type: "system",
    severity: "Low",
    time: "1/15/2024, 9:20:00 AM",
  },
  {
    id: "n4",
    title: "Newly Added Product",
    body: "You Added Organic Cotton Material to your Products",
    type: "system",
    severity: "High",
    time: "1/14/2024, 5:15:00 PM",
  },
];

export default function NotificationsPage() {
  const categories = ["All", "Unread", "Viewed"];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-700">Notifications</h1>
          <p className="text-sm text-gray-500">Stay updated with your business activities</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border rounded text-sm text-gray-700">Mark All Read</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-gray-500">
        <StatCard title="Unread" value={4} color="red"/>
        <StatCard title="Viewed" value={2} color="blue" />
        <StatCard title="Shared" value={2} color="green" />
      </div>

      <div className="bg-white border rounded-lg p-4 shadow-sm">
        <div className="mb-4 flex items-center gap-3 flex-wrap">
          {categories.map((c) => (
            <button key={c} className="px-3 py-1 border rounded-full text-sm text-gray-600">{c}</button>
          ))}
        </div>

        <div className="space-y-3">
          {notifications.map((n) => (
            <div key={n.id} className="border rounded-lg p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className={`w-3 h-3 rounded-full mt-2 ${n.severity === 'High' ? 'bg-red-500' : n.severity === 'Medium' ? 'bg-yellow-400' : 'bg-green-400'}`} />
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="font-medium text-gray-700">{n.title}</div>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{n.body}</div>
                    <div className="text-xs text-gray-400 mt-2">{n.time}</div>
                  </div>
                </div>

                <div className="text-sm text-gray-400">View Details →</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, color }: { title: string; value: number | string; color?: string }) {
  const colorMap: Record<string, string> = {
    red: "bg-red-50 text-red-600",
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    purple: "bg-purple-50 text-purple-600",
  };

  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm flex items-center justify-between">
      <div>
        <div className="text-sm text-gray-700">{title}</div>
        <div className="text-xl font-semibold">{value}</div>
      </div>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorMap[color || 'blue']}`}>🔔</div>
    </div>
  );
}
