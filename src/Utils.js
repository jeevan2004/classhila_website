import axios from "axios";

export const getTemporaryUrl = async (fileUrl, AuthToken) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}/api/v1/student/getPresignedFile`,
      { file: fileUrl } // Send original URL to the API
    );

    if (response.status === 200 && response?.url) {
      console.log(response?.urlx);

      return response?.url; // Return the new temporary URL
    } else {
      throw new Error("Failed to generate temporary URL");
    }
  } catch (error) {
    console.error("Error generating temporary URL:", error);
    return fileUrl; // Fallback to original URL if the API fails
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
