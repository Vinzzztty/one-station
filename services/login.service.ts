// services/login.service.ts
"use server";

import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Email atau Password salah.";
        default:
          return "Terjadi kesalahan pada server.";
      }
    }
    throw error;
  }
}

export async function logout() {
  // Fungsi ini akan menghapus sesi dan redirect ke halaman login
  await signOut({ redirectTo: "/login" });
}
