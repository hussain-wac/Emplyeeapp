import useSWR from "swr";
import axios from "axios";
import { useAtomValue } from "jotai";
import { userState } from "../jotai/userState" 

const fetcher = (url, token) =>
  axios
    .get(url, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => res.data.data);

const useMasterData = (key, endpoint) => {
  const user = useAtomValue(userState); 
  const token = user?.token;
  const { data, error, isLoading } = useSWR(
    token ? [key, token] : null,
    ([, token]) => fetcher(endpoint, token)
  );
  return { data, error, isLoading };
};

export const useDepartments = () => {
  const { data, error, isLoading } = useMasterData(
    "departments",
    `${import.meta.env.VITE_SERVER}/settings/departments`
  );
  return { departments: data, error, isLoading };
};

export const useDesignations = () => {
  const { data, error, isLoading } = useMasterData(
    "designations",
    `${import.meta.env.VITE_SERVER}/settings/designations`
  );
  return { designations: data, error, isLoading };
};

export const useEmploymentTypes = () => {
  const { data, error, isLoading } = useMasterData(
    "employmentTypes",
    `${import.meta.env.VITE_SERVER}/settings/employment-types`
  );
  return { employmentTypes: data, error, isLoading };
};
