import styled, { keyframes } from "styled-components";

const LoadingSpinner = () => {
  return <Spinner />;
};

export default LoadingSpinner;

// 스피너 애니메이션
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// 스피너 스타일
const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid transparent;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
  margin: 20px auto;
`;
