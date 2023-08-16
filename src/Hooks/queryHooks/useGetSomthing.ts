import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const fetchSomthing = async() => {
  return await axios.get("");
};
const useGetSomthing = () => {
  const { data, isSuccess, isLoading } = useQuery(
    ["Somthing"],
    () => fetchSomthing(),
    {
      onError: () => {},
      refetchOnWindowFocus: false,
    }
  );
  return {
    data,
    isSuccess,
    isLoading,
  };
};

export default useGetSomthing;
