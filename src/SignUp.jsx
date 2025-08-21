import React from "react";
import { Link } from "react-router-dom";
import { UserPlus } from "lucide-react";

export default function Signup() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-md">
        <div className="flex items-center gap-2 mb-6">
          <UserPlus className="text-sky-500" size={22} />
          <h2 className="text-xl font-extrabold text-slate-800">Create Account</h2>
        </div>

        <form className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-slate-600">Full Name</label>
            <input
              type="text"
              className="mt-1 w-full px-3 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-600">Email</label>
            <input
              type="email"
              className="mt-1 w-full px-3 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-600">Password</label>
            <input
              type="password"
              className="mt-1 w-full px-3 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Enter your password"
            />
          </div>
          <button className="w-full bg-sky-600 text-white py-2 rounded-xl font-semibold hover:bg-sky-700">
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link to="/signin" className="text-sky-600 hover:text-sky-700 font-semibold transition-colors">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
