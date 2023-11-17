import axios from "axios";
import { toastError, toastSuccess } from "../components/toast";

export const babyNameCreate = async (data, router) => {
  const babyNameData = {
    birthday: `${data.birthYear}-${data.birthMonth}-${data.birthDay}`,
    birthtime: data.birthTime,
    gender: JSON.parse(data.gender),
    city: JSON.parse(data.district),
    expected_name: JSON.parse(data.nameCategory),
    description: data.description,
    phone: data.phoneNo,
    first_name: data.first_name,
    last_name: data.last_name,
    payment_method: JSON.parse(data.payment_method),
    payment_switch: "",
    email: "",
  };

  if (data.payment_method == 0) {
    babyNameData.payment_switch = "bank transfer";
    try {
      const resp = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/babyname/create`,
        babyNameData
      );
      router.push("/payment");
      toastSuccess(resp.data.message);
    } catch (error) {
      toastError(error.response ? error.response.data.error : error.message);
    }
  } else {
    babyNameData.email = data.email;
    babyNameData.payment_switch = "online";
    try {
      const resp = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/babyname/create`,
        babyNameData
      );
      router.push(resp.data.url);
    } catch (error) {
      toastError(error.response ? error.response.data.error : error.message);
    }
  }
};
