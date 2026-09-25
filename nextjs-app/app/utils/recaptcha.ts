"use server"

import { CaptchaVerificationResponse, CommonResponse } from "../types/common";

export default async function verifyRecaptcha(token : string) : Promise<CommonResponse> {
  
  const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

  if (!token) {
    console.log('Missing ReCaptcha token');
    return {
        status : false,
        message : 'Missing ReCaptcha token',
        data : null,
    }
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${SECRET_KEY}&response=${token}`,
    });

    const data: CaptchaVerificationResponse = await response.json();
    console.log("verifyRecaptcha ", data);
    if (data.success && data.score > 0.5) {
      return { status: true, message: "Captcha verified successfully" , data : data}
    } else {
      return {
        status : false,
        message : 'ReCaptcha verfication failed',
        data : data,
      }
    }
  } catch (error) {
    console.error("Error verifying captcha:", error);
    return {
        status : false,
        message : '"Error verifying captcha',
        data : error,
      }
  }
}
