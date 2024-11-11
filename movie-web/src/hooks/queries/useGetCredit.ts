import { useQuery } from "@tanstack/react-query";
import { getCredit } from "../../apis/movieApis.ts";

export const useGetCredit = (movieId: string) => {
  const { data, isError, isPending } = useQuery({
    queryKey: ["credit", movieId],
    queryFn: () => getCredit(movieId).then((res) => res?.data),
  });
  return { data, isError, isPending };
};
