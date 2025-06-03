import axiosInstance from "./axiosInstance";

export const getPricing = async () => {
  try {
    const response = await axiosInstance.get("/api/service");
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch pricing:", error);
    throw error;
  }
};