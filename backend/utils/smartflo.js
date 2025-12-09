import axios from "axios";

let cachedToken = null;
let tokenExpiry = null;

export const getSmartfloToken = async () => {
  // Reuse valid token
  if (cachedToken && tokenExpiry && Date.now() < tokenExpiry) {
    return cachedToken;
  }

  try {
    const res = await axios.post(
      "https://api-smartflo.tatateleservices.com/v1/auth/login",
      {
        email: process.env.SMARTFLO_EMAIL,
        password: process.env.SMARTFLO_PASSWORD,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    const token = res.data?.access_token;

    if (!token) throw new Error("Token missing from Smartflo response");

    // Token validity usually 24 hours → store expiry
    cachedToken = token;
    tokenExpiry = Date.now() + 24 * 60 * 60 * 1000;

    return token;

  } catch (err) {
    console.error("❌ Smartflo Login Error:", err.response?.data || err.message);
    throw new Error("Unable to fetch Smartflo access token");
  }
};
