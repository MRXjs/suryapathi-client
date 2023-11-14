import axios from "axios";
import { toastError, toastSuccess } from "../components/toast";

export const babyNameCreate = async (formData, router) => {
  try {
    const resp = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/babyname/create`,
      formData
    );
    toastSuccess(resp.data.message);
    router.push("/payment");
  } catch (error) {
    toastError(error.response ? error.response.data.error : error.message);
  }
};