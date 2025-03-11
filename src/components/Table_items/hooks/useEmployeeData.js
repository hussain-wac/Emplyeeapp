import { useAtom } from "jotai";
import { userState } from "../../../jotai/userState"; 
import axios from "axios";
import useSWR from "swr";

export const useEmployeeData = ({
  page = 1,
  length = 10,

} = {}) => {
  const [user, setUser] = useAtom(userState); 
  const token = user?.token;
  const queryString = `?length=${length}&page=${page}`;
  const url = `${import.meta.env.VITE_SERVER}/employee${queryString}`;

  const fetcher = async (url) => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response?.status === 401) {
        setUser(null);
      }
      throw error;
    }
  };

  const { data, error, isLoading } = useSWR(
    token ? url : null, 
    fetcher, 
    {
      keepPreviousData: true,
      revalidateOnFocus:false, 
    }
  );

  const employees = data?.data?.rows?.data || [];
  const pagination = data?.data?.rows || {};
  return { data: employees, pagination, error, isLoading };
};
