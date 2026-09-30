"use server"

import { createClient } from "next-sanity"
import { apiVersion, dataset, projectId } from "@/sanity/lib/api"

export async function submitContactForm(data: any) {
  if (!process.env.SANITY_API_TOKEN) {
    console.error("SANITY_API_TOKEN is not configured.")
    return { success: false, error: "Server configuration error." }
  }

  const writeClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
  })

  try {
    const res = await writeClient.create({
      _type: 'contactSubmission',
      name: data.name,
      company: data.company,
      email: data.email,
      project: data.project?.value || data.project || '',
      quantity: data.quantity?.value || data.quantity || '',
      message: data.message,
      submittedAt: new Date().toISOString(),
    })
    return { success: true, id: res._id }
  } catch (err: any) {
    console.error("Error submitting contact form:", err)
    return { success: false, error: err.message }
  }
}
