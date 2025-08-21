import React from "react";
import { CreditCard, Users, Trophy, ShoppingCart } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, Legend } from "recharts";

const StatCard = ({ title, value, delta, deltaPositive=true, icon }) => {
  const iconEl = React.createElement(icon, { size: 22 });
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between">
      <div>
        <p className="text-xs font-semibold text-slate-500">{title}</p>
        <div className="mt-1 flex items-end gap-2">
          <p className="text-2xl font-extrabold text-slate-800">{value}</p>
          <span className={`text-xs font-bold ${deltaPositive ? "text-emerald-600" : "text-rose-600"}`}>{delta}</span>
        </div>
      </div>
      <div className="h-12 w-12 rounded-xl grid place-items-center text-white bg-gradient-to-br from-sky-500 to-indigo-500">
        {iconEl}
      </div>
    </div>
  );
};

const BarsCard = () => {
  const data = [
    { name: "M", uv: 400 },
    { name: "T", uv: 300 },
    { name: "W", uv: 600 },
    { name: "T", uv: 350 },
    { name: "F", uv: 420 },
    { name: "S", uv: 300 },
    { name: "S", uv: 480 },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-slate-800 font-extrabold">Active Users</h3>
      </div>
      <div className="mt-4 h-56 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip />
            <Bar dataKey="uv" radius={[10, 10, 10, 10]} fill="#111827" opacity={0.9} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const SalesOverview = () => {
  const data = [
    { name: "Jan", s1: 0, s2: 0 },
    { name: "Feb", s1: 200, s2: 150 },
    { name: "Mar", s1: 350, s2: 300 },
    { name: "Apr", s1: 300, s2: 260 },
    { name: "May", s1: 450, s2: 400 },
    { name: "Jun", s1: 380, s2: 420 },
    { name: "Jul", s1: 520, s2: 480 },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-slate-800 font-extrabold">Sales Overview</h3>
        <span className="text-xs font-semibold text-emerald-600">↑ 4% more in 2021</span>
      </div>
      <div className="mt-4 h-56 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="s1" stroke="#0ea5e9" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="s2" stroke="#6366f1" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default function Dashboard() {
  return (
    <>
      {/* Stat row */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Today's Money" value="$53,000" delta="+55%" icon={CreditCard} />
        <StatCard title="Today's Users" value="2,300" delta="+3%" icon={Users} />
        <StatCard title="New Clients" value="+3,462" delta="-2%" deltaPositive={false} icon={Trophy} />
        <StatCard title="Sales" value="$103,430" delta="+5%" icon={ShoppingCart} />
      </div>

      {/* Charts row */}
      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        <BarsCard />
        <SalesOverview />
      </div>
    </>
  );
}
