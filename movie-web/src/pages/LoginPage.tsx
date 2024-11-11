import styled from "styled-components";
import Form from "../components/auth/Form.tsx";

const LoginPage = () => {
  return (
    <Container>
      <h1>로그인</h1>
      <Form title="로그인" />
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
