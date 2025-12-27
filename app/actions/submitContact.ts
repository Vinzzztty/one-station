"use server";

import { createContact, CreateContactData } from "@/services/contact.service";

export async function submitContactAction(data: CreateContactData) {
  try {
    await createContact(data);
    return { success: true };
  } catch (error) {
    console.error("Failed to submit contact form:", error);
    return { error: "Something went wrong. Please try again later." };
  }
}
