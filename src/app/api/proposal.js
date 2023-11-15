import axios from "axios";
import { toastError, toastSuccess } from "../components/toast";

export const proposalCreate = async (data) => {
  try {
    const resp = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/proposal/create`,
      data
    );
    toastSuccess(resp.data.message);
  } catch (error) {
    toastError(error.response ? error.response.data.error : error.message);
  }
};
