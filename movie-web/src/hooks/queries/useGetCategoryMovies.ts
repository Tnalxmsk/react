import { useInfiniteQuery } from "@tanstack/react-query";
import { getCategoryMovies} from "../../apis/movieApis.ts";

export const useGetCategoryMovies = (url: string) => {
  const { data, isFetchingNextPage, isError, status, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["moviesDefault", url],
    queryFn: ({ pageParam = 1 }) => getCategoryMovies(pageParam, url).then((res) => res?.data),
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
    queryKey: ["movies", url],
    queryFn: () => getCategoryMovies(url).then((res) => res?.data.results),
  });

  return { data, isPending, isError };*/
};
