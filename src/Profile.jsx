import React from "react";
import { User, Mail, Phone, Settings } from "lucide-react";

export default function Profile() {
  return (
    <div className="mx-auto max-w-[800px]">
      {/* Profile Card */}
      <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-center">
        <div className="h-24 w-24 rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 text-white grid place-items-center text-3xl font-bold">
          AB
        </div>
        <h2 className="mt-4 text-2xl font-extrabold">Abhinay Silaparasetti</h2>
        <p className="text-slate-500 text-sm">Full-Stack Developer</p>

        <div className="grid sm:grid-cols-2 gap-4 mt-6 w-full">
          <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-4">
            <Mail size={18} className="text-sky-500" />
            <span>abhinay5421e@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-4">
            <Phone size={18} className="text-sky-500" />
            <span>+91 98765 43210</span>
          </div>
        </div>

        <button className="mt-6 flex items-center gap-2 bg-slate-800 text-white px-5 py-2 rounded-xl font-semibold hover:bg-slate-900 transition-colors">
          <Settings size={16} /> Edit Profile
        </button>
      </div>
    </div>
  );
}
