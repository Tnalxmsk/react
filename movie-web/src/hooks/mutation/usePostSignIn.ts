import { useNavigate } from "react-router-dom";
import { signIn } from "../../apis/userApis.ts";
import { useMutation } from "@tanstack/react-query";

export interface SignInReq {
  email: string;
  password: string;
}

export const usePostSignIn = () => {
  const navigation = useNavigate();
  return useMutation({
    mutationFn: (req: SignInReq) => signIn(req.email, req.password),
    onSuccess: () => {
      navigation("/");
    },
  });
};
