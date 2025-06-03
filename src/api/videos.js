import axiosInstance from "./axiosInstance";

export const getPortfolioVideos = async () => {
  try {
    const response = await axiosInstance.get("/videos");
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch pricing:", error);
    throw error;
  }
};