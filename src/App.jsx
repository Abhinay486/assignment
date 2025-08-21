import React from "react";
import { Home, Table2, CreditCard, Settings, LogIn, User, UserPlus, HelpCircle, Rocket, TrendingUp, Users, Trophy, ShoppingCart, ChevronRight, Search } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, Legend, Area, AreaChart } from "recharts";

// Helper: nav item
const NavItem = ({ icon: Icon, label, active }) => (
  <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${
    active
      ? "bg-white text-slate-800 shadow-sm"
      : "text-slate-600 hover:bg-white/60 hover:text-slate-900"
  }`}>
    <Icon size={18} className="shrink-0" />
    <span>{label}</span>
  </button>
);

// Helper: stat card
const StatCard = ({ title, value, delta, deltaPositive=true, icon: Icon }) => (
  <div className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between">
    <div>
      <p className="text-xs font-semibold text-slate-500">{title}</p>
      <div className="mt-1 flex items-end gap-2">
        <p className="text-2xl font-extrabold text-slate-800">{value}</p>
        <span className={`text-xs font-bold ${deltaPositive ? "text-emerald-600" : "text-rose-600"}`}>{delta}</span>
      </div>
    </div>
    <div className="h-12 w-12 rounded-xl grid place-items-center text-white bg-gradient-to-br from-sky-500 to-indigo-500">
      <Icon size={22} />
    </div>
  </div>
);

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

// Bar chart card
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

// Sales overview line chart card
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

export default function SoftUIDashboard() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      {/* Top-level layout */}
      <div className="mx-auto max-w-[1400px] px-4 ">
        <div className="grid grid-cols-[260px_1fr] gap-6 py-6">
          {/* Sidebar */}
          <aside className="sticky top-6 h-[92vh] rounded-3xl bg-slate-50/70 backdrop-blur border border-white/60 shadow-sm flex flex-col">
            <div className="flex items-center gap-3 px-4 py-5 border-b border-slate-200/70">
              <div className="h-9 w-9 rounded-xl bg-slate-900 text-white grid place-items-center text-sm font-black">SU</div>
              <div>
                <p className="text-xs text-slate-500 leading-none">Soft UI Dashboard</p>
                <p className="text-[10px] text-slate-400 leading-none mt-1">by Creative Team</p>
              </div>
            </div>
            <div className="p-3 space-y-1 overflow-y-auto">
              <NavItem icon={Home} label="Dashboard" active />
              <NavItem icon={Table2} label="Tables" />
              <NavItem icon={CreditCard} label="Billing" />
              <NavItem icon={Rocket} label="Virtual Reality" />
              <NavItem icon={Settings} label="RTL" />

              <p className="text-[11px] font-semibold text-slate-400 uppercase pt-4 px-2">Account Pages</p>
              <NavItem icon={User} label="Profile" />
              <NavItem icon={LogIn} label="Sign In" />
              <NavItem icon={UserPlus} label="Sign Up" />
            </div>

            {/* Help card */}
            <div className="mt-auto p-3">
              <div className="rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-500 text-white p-4">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-white/20 grid place-items-center"><HelpCircle size={18} /></div>
                  <div className="text-sm font-semibold">Need help?</div>
                </div>
                <p className="text-xs mt-1 text-white/90">Please check our docs</p>
              </div>
            </div>
          </aside>

          {/* Main area */}
          <main className="">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="text-slate-400">Dashboard</span>
                <ChevronRight size={16} className="text-slate-300" />
                <span className="font-extrabold text-slate-800">Dashboard</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center gap-2 bg-white rounded-xl shadow-sm px-3 py-2 text-sm">
                  <Search size={16} className="text-slate-400" />
                  <input className="outline-none w-64 placeholder:text-slate-400" placeholder="Type here..." />
                </div>
                <button className="text-sm font-semibold text-slate-600 hover:text-slate-900">Sign in</button>
                <button className="h-9 w-9 rounded-xl bg-white shadow-sm grid place-items-center"><Settings size={18} /></button>
              </div>
            </div>

            {/* Stat row */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
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
          </main>
        </div>
      </div>
      <h1>sdfhiufhdsiufhbhu</h1>
    </div>
  );
}
