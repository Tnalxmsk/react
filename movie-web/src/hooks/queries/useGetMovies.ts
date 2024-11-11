import { useInfiniteQuery } from "@tanstack/react-query";
import { getMovies } from "../../apis/movieApis.ts";

export const useGetMovies = () => {

  const { data, isFetchingNextPage, isError, status, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["moviesDefault"],
    queryFn: ({ pageParam = 1 }) => getMovies(pageParam).then((res) => res?.data),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {

      if (lastPage!!.page < lastPage!!.total_pages) {
        return lastPage!!.page + 1;
      }
      return undefined;
    },
  });
  return { data, isFetchingNextPage, isError, status, fetchNextPage, hasNextPage, isLoading };


  /*const { data, isPending, isError } = useQuery({
    queryKey: ["moviesDefault"],
    queryFn: () => getMovies().then((res) => res?.data.results),
  });

  return { data, isPending, isError };*/
};
