"use client";

import Button from "@/components/ui/Button";
import { authenticate } from "@/services/login.service";
import { Lock, Mail } from "lucide-react";
import { useActionState } from "react";

export default function LoginPage() {
  // Integrasi logic auth ke sini
  const [errorMessage, dispatch, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 h-72 w-72 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 left-20 h-72 w-72 rounded-full bg-purple-600 blur-3xl" />
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl backdrop-blur">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            Admin Panel
          </div>
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          <p className="mt-2 text-sm text-gray-400">
            Login to manage articles and content
          </p>
        </div>

        {/* Form - Action dihubungkan ke dispatch */}
        <form action={dispatch} className="space-y-5">
          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-300">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-3.5 h-4 w-4 text-gray-500" />
              <input
                type="email"
                name="email" // WAJIB ADA: untuk dibaca FormData
                required
                placeholder="admin@onestation.com"
                className="w-full rounded-xl border border-white/10 bg-slate-800 px-11 py-3 text-sm text-white placeholder:text-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-300">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-3.5 h-4 w-4 text-gray-500" />
              <input
                type="password"
                name="password" // WAJIB ADA: untuk dibaca FormData
                required
                placeholder="••••••••"
                className="w-full rounded-xl border border-white/10 bg-slate-800 px-11 py-3 text-sm text-white placeholder:text-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {errorMessage}
            </div>
          )}

          {/* Action Button */}
          <Button
            type="submit"
            className="w-full"
          >
            {isPending ? "Signing In..." : "Login to Dashboard"}
          </Button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} One Station — Admin Access Only
        </div>
      </div>
    </div>
  );
}
