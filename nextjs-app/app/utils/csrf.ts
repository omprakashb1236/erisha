"use server"

import csrf from "csrf";

const tokens = new csrf();
const CSRF_SECRET = process.env.CSRF_SECRET || tokens.secretSync();

/**
 * Generate a CSRF token for a given session ID.
 */
export async function generateCsrfToken() {
    return tokens.create(`${CSRF_SECRET}`);
}

/**
 * Validate the CSRF token against a session ID.
 */
export async function validateCsrfToken(csrfToken: string) {
    return tokens.verify(`${CSRF_SECRET}`, csrfToken);
}