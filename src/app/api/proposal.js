import axios from "axios";
import { toastError } from "../components/toast";

export const proposalCreate = async (data, router) => {
  try {
    const resp = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/proposal/create`,
      data
    );
    router.push("/payment");
  } catch (error) {
    toastError(error.response ? error.response.data.error : error.message);
  }
};
