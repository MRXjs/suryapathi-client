import axios from "axios";
import { toastError, toastSuccess } from "../components/toast";
import {
  addLeadingZero,
  canvasRefToImg,
  dataURItoFile,
} from "../components/functions";

export const memberCreate = async (avatarEditorRef, data) => {
  let formData = new FormData();
  formData.append("image", await canvasRefToImg(avatarEditorRef));
  formData.append("full_name", data.name);
  formData.append(
    "birthday",
    `${data.birthYear}-${addLeadingZero(data.birthMonth)}-${addLeadingZero(
      data.birthDay
    )}`
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

export const getAllMembers = async (pageNumber, filterValues) => {
  try {
    const params = new URLSearchParams();
    if (filterValues.filterGender)
      params.append("gender", filterValues.filterGender);
    if (filterValues.filterNation)
      params.append("nation", filterValues.filterNation);
    if (filterValues.filterAge) params.append("age", filterValues.filterAge);
    if (filterValues.filterJob) params.append("job", filterValues.filterJob);

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
