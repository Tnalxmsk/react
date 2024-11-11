import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../../apis/movieApis.ts";

export const useGetMovieDetail = (id: string) => {
  const { data, isError, isPending } = useQuery({
    queryKey: ["detail", id],
    queryFn: () => getMovieDetails(id).then((res) => res?.data),
  });
  return { data, isError, isPending };
  };
