import { logout } from "@/services/login.service";
import Link from "next/link";
import { auth } from "@/auth"; // 1. Import auth helper

import { AdminSidebarNav } from "@/components/admin/AdminSidebarNav";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 2. Ambil session user saat ini (Server-side)
  const session = await auth();

  // 3. Ambil data user (dengan fallback jika null)
  const user = session?.user;
  const userName = user?.name || "Admin";
  const userEmail = user?.email || "admin@onestation.com";
  const userInitial = userName.charAt(0).toUpperCase();

  return (
    <div className="flex min-h-screen bg-background font-sans text-foreground">
      {/* SIDEBAR */}
      <aside className="w-64 bg-surface border-r border-border flex-shrink-0 fixed h-full z-10 flex flex-col justify-between">
        {/* Bagian Atas: Logo & Menu */}
        <div>
          <div className="p-6 border-b border-border">
            <h1 className="text-2xl font-bold text-primary tracking-tight">
              AdminPanel
            </h1>
          </div>

          <AdminSidebarNav />
        </div>

        {/* Bagian Bawah: User Profile & Logout */}
        <div className="p-4 border-t border-border bg-surface">
          <div className="flex items-center gap-3 px-4 py-2 mb-4 text-muted text-sm">
            {/* Avatar Inisial Dinamis */}
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
              {userInitial}
            </div>

            {/* Nama & Email Dinamis */}
            <div className="flex flex-col overflow-hidden">
              <span
                className="font-medium text-foreground truncate"
                title={userName}
              >
                {userName}
              </span>
              <span
                className="text-xs text-muted truncate"
                title={userEmail}
              >
                {userEmail}
              </span>
            </div>
          </div>

          {/* TOMBOL LOGOUT */}
          <form action={logout}>
            <button className="w-full flex items-center gap-3 px-4 py-2 text-sm font-medium text-muted rounded-lg hover:bg-red-500/10 hover:text-red-400 transition-colors group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:text-red-600"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
              Sign Out
            </button>
          </form>
        </div>
      </aside>

      {/* MAIN CONTENT WRAPPER */}
      <main className="flex-1 ml-64 p-8 overflow-auto">{children}</main>
    </div>
  );
}
