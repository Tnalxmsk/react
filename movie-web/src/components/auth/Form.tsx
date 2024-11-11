import { loginSchema, signupSchema } from "../../utils/schema.ts";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import CustomInput from "./CustomInput.tsx";
import { InferType } from "yup";
import { usePostSignUp } from "../../hooks/mutation/usePostSignUp.ts";
import { usePostSignIn } from "../../hooks/mutation/usePostSignIn.ts";

interface FormProps {
  title: string;
}

const Form = ({ title }: FormProps) => {
  const schema = title === "회원가입" ? signupSchema : loginSchema;
  type FormValues = InferType<typeof schema>;
  const signUpMutation = usePostSignUp();
  const signInMutation = usePostSignIn();

  const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data: FormValues) => {
    if (title === "회원가입") {
      signUpMutation.mutate({
        email: data.email,
        password: data.password,
        passwordCheck: data.confirmPassword,
      });
    } else {
      signInMutation.mutate({
        email: data.email,
        password: data.password,
      });
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)} noValidate>
      <CustomInput
        type="email" name="email" holder="이메일을 입력해주세요!" register={register} error={errors.email?.message} />
      <CustomInput
        type="password" name="password" holder="비밀번호를 입력해주세요!" register={register} error={errors.password?.message} />
      {(title === "회원가입" && (
        <>
          <CustomInput
            type="password"
            name="confirmPassword"
            holder="비밀번호를 다시 입력해 주세요!"
            register={register}
            error={errors.confirmPassword?.message} />
          <CustomInput type="date" name="date" register={register} error={errors.date?.message}
          />
          <GenderWrapper>
            <label>
              <input
                type="radio"
                value="male"
                {...register("gender")}
              />
              남성
            </label>
            <label>
              <input
                type="radio"
                value="female"
                {...register("gender")}
              />
              여성
            </label>
          </GenderWrapper>
        </>
      ))}
      <FormButton disabled={!isValid}>{title}</FormButton>
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled.form`
  display: flex;
  max-width: 350px;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
`;

const FormButton = styled.button`
  border-radius: 5px;
  border: none;
  padding: 12px;
  background-color: ${(props) => (props.disabled ? "gray" : "red")};
  color: ${(props) => (props.disabled ? "#c0c0c0" : "white")};
  cursor: pointer;
`;

const GenderWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
