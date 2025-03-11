// src/hooks/useEmployeeDetails.js
import { useMemo } from "react";
import useSWR from "swr";
import axios from "axios";
import { useAtom } from "jotai";
import { userState } from "../../../jotai/userState"
const fetcher = async (url, id, token, setUser) => {
  try {
    const response = await axios.get(url, {
      params: { id },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    if (error.response?.status === 401) {
        setUser(null); 
    }
    throw error;
  }
};
const useEmployeeDetails = (id) => {
  const [user, setUser] = useAtom(userState);
  const token = user?.token;
  const { data, error, isLoading, mutate } = useSWR(
    token && id ? ["employeeDetails", id, token] : null,
    ([, id, token]) =>
      fetcher(
        `${import.meta.env.VITE_SERVER}/employee/show`,
        id,
        token,
        setUser
      )
  );

  const details = useMemo(() => {
    if (!data) return null;
    return {
      ...data,
      designation_id: data.designation?.id,
      department_id: data.department?.id,
      employment_type_id: data.employment_type?.id,
    };
  }, [data]);

  return { details, error, isLoading, mutate };
};

export default useEmployeeDetails;
