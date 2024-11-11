import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../apis/userApis.ts";
import { useNavigate } from "react-router-dom";

export interface SignUpReq {
  email: string;
  password: string;
  passwordCheck: string;
}

export const usePostSignUp = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (req: SignUpReq) => signUp(req.email, req.password, req.passwordCheck),
    onSuccess: () => {
      navigate("/sign-in");
    },
  });
};
