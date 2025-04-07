import axios from "axios";
import { api } from "./api/api";

export const getTemporaryUrl = async (fileUrl, AuthToken) => {
  const payload = {
    file: fileUrl,
  };
  let res = await api(
    `api/v1/student/getPresignedFile`,
    payload,
    "post",
    "",
    ""
  );

  if (res?.success) {
    console.log(res, res.url, "new vido");

    return res?.url;
  } else {
    return;
  }
};

export const loadRazorpay = () => {
  return new Promise((resolve, reject) => {
    if (window.Razorpay) {
      resolve(window.Razorpay); // Ensure it returns the constructor
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(window.Razorpay);
    script.onerror = () => reject(new Error("Failed to load Razorpay SDK"));
    document.body.appendChild(script);
  });
};
