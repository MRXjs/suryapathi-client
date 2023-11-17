import axios from "axios";
import { toastError, toastSuccess } from "../components/toast";

export const proposalCreate = async (selectedMembers, data, router) => {
  let package_type = 1;
  if (selectedMembers.length == 5) {
    package_type = 2;
  } else if (selectedMembers.length == 10) {
    package_type = 3;
  }
  const proposalData = {
    phone: data.phone,
    first_name: data.first_name,
    last_name: data.last_name,
    phone: data.phone,
    description: data.description,
    payment_method: JSON.parse(data.payment_method),
    package_type,
    payment_switch: "",
    selected_members: JSON.stringify(
      selectedMembers.map((member) => member.id)
    ),
    email: "",
  };

  if (data.payment_method == 0) {
    proposalData.payment_switch = "bank transfer";
    try {
      const resp = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/proposal/create`,
        proposalData
      );
      router.push("/payment");
      toastSuccess(resp.data.message);
    } catch (error) {
      toastError(error.response ? error.response.data.error : error.message);
    }
  } else {
    proposalData.payment_switch = "online";
    proposalData.email = data.email;
    try {
      const resp = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/proposal/create`,
        proposalData
      );
      router.push(resp.data.url);
    } catch (error) {
      toastError(error.response ? error.response.data.error : error.message);
    }
  }
};
