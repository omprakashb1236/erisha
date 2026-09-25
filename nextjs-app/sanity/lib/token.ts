import "server-only";

export const token = process.env.SANITY_API_READ_TOKEN;

export const API_TOKEN = process.env.SANITY_API_TOKEN;

if (!token) {
  throw new Error("Missing SANITY_API_READ_TOKEN");
}

if(!API_TOKEN){
  throw new Error("Missing SANITY API TOKEN");
}

