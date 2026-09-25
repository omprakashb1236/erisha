"use server"
const encoder = new TextEncoder();
const decoder = new TextDecoder();

const SECRET_KEY = "ce2161025ca1ce3255ff5aac6aedf6a0";
const SECRET_KEY_BYTES = encoder.encode(SECRET_KEY).slice(0, 16); // 128-bit key

export async function encryptToken(token: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    SECRET_KEY_BYTES,
    { name: "AES-CBC" },
    false,
    ["encrypt"]
  );

  const iv = crypto.getRandomValues(new Uint8Array(16)); // 128-bit initialization vector
  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-CBC", iv },
    key,
    encoder.encode(token)
  );

  return `${Buffer.from(iv).toString("base64")}:${Buffer.from(encrypted).toString("base64")}`;
}

export async function decryptToken(encryptedToken: string): Promise<string> {
  const [ivBase64, encryptedBase64] = encryptedToken.split(":");
  const iv = Uint8Array.from(Buffer.from(ivBase64, "base64"));
  const encrypted = Uint8Array.from(Buffer.from(encryptedBase64, "base64"));

  const key = await crypto.subtle.importKey(
    "raw",
    SECRET_KEY_BYTES,
    { name: "AES-CBC" },
    false,
    ["decrypt"]
  );

  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-CBC", iv },
    key,
    encrypted
  );

  return decoder.decode(decrypted);
}

export async function encryptData(data: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    SECRET_KEY_BYTES,
    { name: "AES-CBC" },
    false,
    ["encrypt"]
  );

  const iv = crypto.getRandomValues(new Uint8Array(16)); // 128-bit initialization vector
  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-CBC", iv },
    key,
    encoder.encode(data)
  );

  return `${Buffer.from(iv).toString("base64")}:${Buffer.from(encrypted).toString("base64")}`;
}

export async function decryptData(encryptedData: string): Promise<string> {
  const [ivBase64, encryptedBase64] = encryptedData.split(":");
  const iv = Uint8Array.from(Buffer.from(ivBase64, "base64"));
  const encrypted = Uint8Array.from(Buffer.from(encryptedBase64, "base64"));

  const key = await crypto.subtle.importKey(
    "raw",
    SECRET_KEY_BYTES,
    { name: "AES-CBC" },
    false,
    ["decrypt"]
  );

  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-CBC", iv },
    key,
    encrypted
  );

  return decoder.decode(decrypted);
}

export async function isDataEncrypted(data: string): Promise<boolean> {
  if (typeof data !== "string") return false;

  const parts = data.split(":");
  if (parts.length !== 2) return false;

  const [ivBase64, encryptedBase64] = parts;

  try {
    const iv = Buffer.from(ivBase64, "base64");
    const encrypted = Buffer.from(encryptedBase64, "base64");

    // IV should be exactly 16 bytes (128 bits for AES-CBC)
    if (iv.length !== 16) return false;

    // Encrypted data should be at least some non-zero length
    if (encrypted.length === 0) return false;

    return true;
  } catch (error) {
    return false;
  }
}

