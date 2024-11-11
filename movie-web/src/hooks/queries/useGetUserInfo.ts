import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../../apis/userApis.ts";

export const useGetUserInfo = (accessToken: string) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["userInfo"],
    queryFn: () => getUserInfo().then((res) => res),
    enabled: !!accessToken,
  });
  return { data, isError, isLoading };
};
