import axios from "axios";
import { toastError } from "../components/toast";

export const getAllVideo = async (pageNumber) => {
  try {
    const resp = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/videogallery/all/${pageNumber}`
    );
    return resp.data;
  } catch (error) {
    toastError(error.message && error.message);
    return null;
  }
};
