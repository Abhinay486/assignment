import React from "react";
import { CreditCard, Users, Trophy, ShoppingCart } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, Legend } from "recharts";
import { Home, Table2, Settings, LogIn, User, UserPlus, HelpCircle, Rocket, TrendingUp, ChevronRight, Search } from "lucide-react";

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
// Placeholder rocket illustration card
const RocketCard = () => (
  <div className="bg-white rounded-2xl shadow-sm p-0 overflow-hidden">
    <div className="h-full min-h-[220px] bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 relative">
      <svg width="100%" height="100%" viewBox="0 0 400 220" preserveAspectRatio="none" className="absolute inset-0 opacity-20">
        <defs>
          <pattern id="waves" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M0 40 Q 20 20 40 40 T 80 40" fill="none" stroke="white" strokeWidth="2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#waves)" />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative">
          <div className="h-28 w-28 rounded-full bg-white/10 blur-xl absolute -top-6 -left-6" />
          <Rocket className="text-white" size={90} />
        </div>
      </div>
    </div>
  </div>
);

// Featured content card
const FeatureCard = () => (
  <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
    <div className="relative">
      <div className="h-[220px] w-full bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-slate-900/60" />
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-white text-xl font-extrabold">Work with the rockets</h3>
          <p className="text-white/85 text-sm max-w-xl mt-2">Wealth creation is an evolutionary recent positive-sum game. It is all about who take the opportunity first.</p>
        </div>
        <button className="self-start inline-flex items-center gap-2 text-white text-sm font-semibold">
          Read More <ChevronRight size={16} />
        </button>
      </div>
    </div>
  </div>
);

// Info card
const InfoCard = () => (
  <div className="bg-white rounded-2xl shadow-sm p-6">
    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Build by developers</p>
    <h2 className="text-slate-800 text-xl font-extrabold mt-1">Soft UI Dashboard</h2>
    <p className="text-slate-600 text-sm mt-2 leading-relaxed">From colors, cards, typography to complex elements, you will find the full documentation.</p>
    <button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-700">
      Read More <ChevronRight size={16} />
    </button>
  </div>
);

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

       {/* Middle row */}
            <div className="grid lg:grid-cols-3 gap-6 mt-6">
              <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                <InfoCard />
                <RocketCard />
              </div>
              <FeatureCard />
            </div>

      {/* Charts row */}
      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        <BarsCard />
        <SalesOverview />
      </div>
    </>
  );
}
