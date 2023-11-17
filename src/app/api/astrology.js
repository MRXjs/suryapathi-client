import axios from "axios";
import { toastError, toastSuccess } from "../components/toast";

export const astrologyCreate = async (service, data, router) => {
  const astrologyData = {
    service: service.id,
    first_name: data.first_name,
    last_name: data.last_name,
    phone: data.phone,
    description: data.description,
    payment_method: JSON.parse(data.payment_method),
    payment_switch: "",
    email: "",
  };

  if (astrologyData.payment_method == 0) {
    astrologyData.payment_switch = "bank transfer";
    try {
      const resp = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/astrology/create`,
        astrologyData
      );
      router.push("/payment");
      toastSuccess(resp.data.message);
    } catch (error) {
      toastError(error.response ? error.response.data.error : error.message);
    }
  } else {
    astrologyData.payment_switch = "online";
    astrologyData.email = data.email;
    try {
      const resp = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/astrology/create`,
        astrologyData
      );
      router.push(resp.data.url);
    } catch (error) {
      toastError(error.response ? error.response.data.error : error.message);
    }
  }
};
