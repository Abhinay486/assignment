import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Home,
  Table2,
  CreditCard,
  Settings,
  LogIn,
  User,
  UserPlus,
  HelpCircle,
  ChevronRight,
  Search,
  Rocket,
} from "lucide-react";

const routes = [
  { to: "/", label: "Dashboard", icon: Home, exact: true },
  { to: "/tables", label: "Tables", icon: Table2 },
  { to: "/billing", label: "Billing", icon: CreditCard },
  { to: "/virtual-reality", label: "Virtual Reality", icon: Rocket },
  { to: "/rtl", label: "RTL", icon: Settings },
];

const accountRoutes = [
  { to: "/profile", label: "Profile", icon: User },
  { to: "/signin", label: "Sign In", icon: LogIn },
  { to: "/signup", label: "Sign Up", icon: UserPlus },
];

const NavItem = ({ to, label, icon, isActive }) => {
  const iconEl = React.createElement(icon, { size: 18, className: "shrink-0" });
  return (
    <Link
      to={to}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
        isActive
          ? "bg-white text-slate-800 shadow-sm"
          : "text-slate-600 hover:bg-white/60 hover:text-slate-900"
      }`}
    >
      {iconEl}
      <span>{label}</span>
    </Link>
  );
};

function usePageLabel() {
  const { pathname } = useLocation();
  if (pathname === "/") return "Dashboard";
  const map = {
    "/tables": "Tables",
    "/billing": "Billing",
    "/virtual-reality": "Virtual Reality",
    "/rtl": "RTL",
    "/profile": "Profile",
    "/signin": "Sign In",
    "/signup": "Sign Up",
  };
  return map[pathname] || "Pages";
}

export default function Layout() {
  const location = useLocation();
  const label = usePageLabel();
  const isDashboard = label === "Dashboard";

  // Don't show layout for signin/signup pages
  if (location.pathname === "/signin" || location.pathname === "/signup") {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <div className="mx-auto max-w-[1400px] px-4">
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
              {routes.map((r) => (
                <NavItem 
                  key={r.to} 
                  to={r.to} 
                  label={r.label} 
                  icon={r.icon} 
                  isActive={location.pathname === r.to || (r.to === "/" && location.pathname === "/")}
                />
              ))}

              <p className="text-[11px] font-semibold text-slate-400 uppercase pt-4 px-2">Account Pages</p>
              {accountRoutes.map((r) => (
                <NavItem 
                  key={r.to} 
                  to={r.to} 
                  label={r.label} 
                  icon={r.icon} 
                  isActive={location.pathname === r.to}
                />
              ))}
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
          <main className="animate-in fade-in slide-in-from-right-4 duration-300">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                {isDashboard ? (
                  <>
                    <span className="text-slate-400">Dashboard</span>
                    <ChevronRight size={16} className="text-slate-300" />
                    <span className="font-extrabold text-slate-800">Dashboard</span>
                  </>
                ) : (
                  <>
                    <span className="text-slate-400">Pages</span>
                    <ChevronRight size={16} className="text-slate-300" />
                    <span className="font-extrabold text-slate-800">{label}</span>
                  </>
                )}
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center gap-2 bg-white rounded-xl shadow-sm px-3 py-2 text-sm">
                  <Search size={16} className="text-slate-400" />
                  <input className="outline-none w-64 placeholder:text-slate-400" placeholder="Type here..." />
                </div>
                <Link to="/signin" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Sign in</Link>
                <button className="h-9 w-9 rounded-xl bg-white shadow-sm grid place-items-center hover:bg-slate-50 transition-colors"><Settings size={18} /></button>
              </div>
            </div>

            {/* Routed content */}
            <div className="mt-6">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
