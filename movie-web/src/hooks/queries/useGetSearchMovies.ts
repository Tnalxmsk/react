import { useQuery } from "@tanstack/react-query";
import { getSearchMovies } from "../../apis/movieApis.ts";

export const useGetSearchMovies = (query: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["searchMovies", query],
    queryFn: () => getSearchMovies(query).then((res) => res?.results),
    enabled: !!query,
  });
  return { data, isLoading, isError };
};
