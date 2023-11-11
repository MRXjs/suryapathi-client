import axios from "axios";
import { toastError, toastSuccess } from "../components/toast";
import { dataURItoFile } from "../components/functions";

const apiURL = "https://server.suryapathi.lk";

export const proposalCreate = async (data) => {
  let formData = new FormData();

  formData.append(
    "image",
    await dataURItoFile(localStorage.getItem("avatar"), `${data.name}.jpg`)
  );

  formData.append("full_name", data.name);
  formData.append(
    "birthday",
    `${data.birthYear}-${data.birthMonth}-${data.birthDay}`
  );
  formData.append("phone", data.phoneNo);
  formData.append("nic", data.nicNo);
  formData.append("feet", data.heightFeet);
  formData.append("inches", data.heightInch);
  formData.append("nation", data.nation);
  formData.append("religion", data.religion);
  formData.append("caste", data.caste);
  formData.append("married_status", data.maritalState);
  formData.append("address", data.address);
  formData.append("district", data.district);
  formData.append("job", data.profession);
  formData.append("salary", data.monthlyIncome);
  formData.append("gender", data.gender);

  try {
    const resp = await axios.post(`${apiURL}/member/create`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    toastSuccess(resp.data.message);
  } catch (error) {
    toastError(error.response ? error.response.data.error : error.message);
  }
};
