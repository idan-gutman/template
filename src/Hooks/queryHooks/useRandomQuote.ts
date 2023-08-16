import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const baseUrl = "https://api.quotable.io/random";

const fetchRandomQuote = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const useRandomQuote = () => {
  const {
    data: quote,
    isSuccess,
    isFetching,
    error,
    isError,
    refetch
  } = useQuery(["RandomQuote"], fetchRandomQuote, {
    enabled: true,
    onError: () => {},
    refetchOnWindowFocus: false,
  });

  return { quote, isSuccess, isFetching, error, isError,refetch };
};
export default useRandomQuote;
