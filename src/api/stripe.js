import axiosInstance from "./axiosInstance";

export const createCheckoutSession = async (data) => {
  try {
    const response = await axiosInstance.post("/create-checkout-session", data);
    return response.data;
  } catch (error) {
    console.error("Stripe checkout session error:", error);
    throw error;
  }
};
