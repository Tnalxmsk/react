import styled from "styled-components";
import Form from "../components/auth/Form.tsx";

const SignupPage = () => {
  return (
    <Container>
      <h1>회원가입</h1>
      <Form title="회원가입" />
    </Container>
  );
};

export default SignupPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
