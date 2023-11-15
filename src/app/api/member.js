import axios from "axios";
import { toastError, toastSuccess } from "../components/toast";
import { dataURItoFile } from "../components/functions";

export const memberCreate = async (data) => {
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
    const resp = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/member/create`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    toastSuccess(resp.data.message);
  } catch (error) {
    toastError(error.response ? error.response.data.error : error.message);
  }
};

export const memberSlid = async () => {
  try {
    const resp = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/member/slid`
    );
    return resp.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAllMembers = async (
  pageNumber,
  filterAge,
  filterGender,
  filterNation
) => {
  try {
    const params = new URLSearchParams();

    if (filterGender) params.append("gender", filterGender);
    if (filterNation) params.append("nation", filterNation);

    const resp = await axios.get(
      `${
        process.env.NEXT_PUBLIC_API_URL
      }/member/all/${pageNumber}?${params.toString()}`
    );
    return resp.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
