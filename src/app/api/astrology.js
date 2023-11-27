import axios from "axios";
import { toastError, toastSuccess } from "../components/toast";
import { addLeadingZero } from "../components/functions";

export const astrologyCreate = async (service, data, router) => {
  const astrologyData = {
    birthday: `${data.birthYear}-${addLeadingZero(
      data.birthMonth
    )}-${addLeadingZero(data.birthDay)}`,
    birthtime: data.birthTime,
    birthplace: JSON.parse(data.birthPlace),
    package_type: service.id,
    first_name: data.first_name,
    last_name: data.last_name,
    phone: data.phone,
    description: data.description,
    payment_method: JSON.parse(data.payment_method),
    payment_switch: "",
    email: "",
  };

  const url = `${process.env.NEXT_PUBLIC_API_URL}/astrology/create`;

  if (astrologyData.payment_method == 0) {
    astrologyData.payment_switch = "bank transfer";
    try {
      const resp = await axios.post(url, astrologyData);
      router.push("/payment");
      toastSuccess(resp.data.message);
    } catch (error) {
      toastError(error.response ? error.response.data.error : error.message);
    }
  } else {
    astrologyData.payment_switch = "online";
    astrologyData.email = data.email;
    try {
      const resp = await axios.post(url, astrologyData);
      router.push(resp.data.url);
    } catch (error) {
      toastError(error.response ? error.response.data.error : error.message);
    }
  }
};
