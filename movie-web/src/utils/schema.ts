import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("유효한 이메일 형식이 아닙니다.")
    .required("이메일을 반드시 입력해 주세요.")
    .matches(/@/, "유효한 이메일 형식이 아닙니다.")
    .test(
      "is-valid-email",
      "유효한 이메일 형식이 아닙니다.", // 기본 메시지 대신 커스텀 메시지
      (value) =>
        !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) // 이메일 정규식 검증
    ),
  password: yup
    .string()
    .required("비빌번호를 반드시 입력해 주세요")
    .min(8, "비밀번호는 8 ~ 16자 이상이어야 합니다.")
    .max(16, "비밀번호는 8 ~ 16자 이상이어야 합니다.")
});

const signupSchema = yup.object().shape({
  email: yup
    .string()
    .email("유효한 이메일 형식이 아닙니다.")
    .required("이메일을 반드시 입력해 주세요."),
  password: yup
    .string()
    .required("비밀번호를 반드시 입력해 주세요.")
    .min(8, "비밀번호는 8 ~ 16자 이상이어야 합니다.")
    .max(16, "비밀번호는 8 ~ 16자 이하여야 합니다."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.')
    .required('비밀번호가 일치하지 않습니다.'),
  date: yup
    .date()
    .required("날짜를 선택해 주세요.")
    .max(new Date(), "미래 날짜는 선택할 수 없습니다."),
  gender: yup
    .string()
    .required("성별을 선택해 주세요."), // 필수 입력
});


export {loginSchema, signupSchema};
