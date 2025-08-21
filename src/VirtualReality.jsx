import React from "react";
import { Rocket, Eye, Globe, Users, Play } from "lucide-react";

// Reusable card
const VRCard = ({ title, description, icon, action }) => {
  const iconEl = React.createElement(icon, { size: 22 });
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col justify-between">
      <div>
        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 text-white grid place-items-center mb-4">
          {iconEl}
        </div>
        <h3 className="text-slate-800 font-extrabold text-lg">{title}</h3>
        <p className="text-sm text-slate-600 mt-1 leading-relaxed">{description}</p>
      </div>
      {action && (
        <button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors">
          {action} <Play size={14} />
        </button>
      )}
    </div>
  );
};

// Big hero section with rocket
const VRHero = () => (
  <div className="bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 rounded-2xl shadow-sm p-10 relative overflow-hidden">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 400 220"
      preserveAspectRatio="none"
      className="absolute inset-0 opacity-20"
    >
      <defs>
        <pattern id="waves" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M0 40 Q 20 20 40 40 T 80 40" fill="none" stroke="white" strokeWidth="2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#waves)" />
    </svg>

    <div className="relative z-10 text-white max-w-lg">
      <h1 className="text-3xl font-extrabold">Step into Virtual Reality</h1>
      <p className="mt-2 text-white/90 text-sm leading-relaxed">
        Immerse yourself in next-generation VR dashboards, interactive rooms, and 3D
        data visualizations for real-time experiences.
      </p>
      <button className="mt-5 inline-flex items-center gap-2 bg-white text-slate-900 px-5 py-2 rounded-xl font-semibold shadow-sm hover:bg-slate-100">
        <Play size={16} /> Launch Experience
      </button>
    </div>

    <div className="absolute right-10 bottom-5 opacity-80">
      <Rocket size={120} className="text-white" />
    </div>
  </div>
);

export default function VirtualReality() {
  return (
    <>
      {/* Hero */}
      <VRHero />

      {/* VR Feature Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <VRCard
          title="Immersive Rooms"
          description="Explore fully interactive rooms designed for collaboration and live data monitoring."
          icon={Globe}
          action="Enter Room"
        />
        <VRCard
          title="3D Analytics"
          description="Visualize complex datasets in 3D, making insights clearer and decision-making faster."
          icon={Eye}
          action="View Insights"
        />
        <VRCard
          title="Team Collaboration"
          description="Host VR meetings, connect with team members, and work together in a virtual workspace."
          icon={Users}
          action="Start Meeting"
        />
      </div>
    </>
  );
}
