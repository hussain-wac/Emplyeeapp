import { useState } from "react";
import useSWRMutation from "swr/mutation";
import axios from "axios";
import useToken from "../../../../hooks/useToken";
const allowedKeys = [
  "id",
  "name",
  "email",
  "phone",
  "designation_id",
  "department_id",
  "gender",
  "date_of_birth",
  "address",
  "city",
  "state",
  "zip_code",
  "country",
  "employment_type_id",
  "joining_date",
  "salary",
  "bank_account_number",
  "ifsc_code",
  "emergency_contact",
  "employee_code",
];

const numericKeys = [
  "designation_id",
  "department_id",
  "gender",
  "employment_type_id",
  "salary",
  "id",
];

const SERVER_URL = import.meta.env.VITE_SERVER;

const useEmployeeUpdate = () => {
  const {token}  = useToken();
  const [fieldErrors, setFieldErrors] = useState({});

  // Define the mutation function inline
  const mutationFetcher = async (url, { arg: data }) => {
    const formData = new FormData();
    allowedKeys.forEach((key) => {
      if (data[key] !== undefined && data[key] !== null) {
        const value = numericKeys.includes(key)
          ? String(Number(data[key]))
          : data[key];
        formData.append(key, value);
      }
    });
    if (data.profile_picture instanceof File) {
      formData.append("profile_picture", data.profile_picture);
    }
    const response = await axios.post(`${url}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };
  const { trigger, isMutating } = useSWRMutation(
    `${SERVER_URL}/employee/update`,
    mutationFetcher
  );

  const updateEmployee = async (data) => {
    setFieldErrors({});
    try {
      const result = await trigger(data, { throwOnError: true });
      return { success: true, data: result };
    } catch (err) {
      const backendErrors = err.response?.data?.errors || {};
      setFieldErrors(backendErrors);
      const backendMessage =
        err.response?.data?.message || "Error updating employee details.";
      console.error("Update employee error:", err.response?.data || err.message);
      return { success: false, error: backendMessage, fieldErrors: backendErrors };
    }
  };

  return { updateEmployee, isSaving: isMutating, fieldErrors };
};

export default useEmployeeUpdate;
