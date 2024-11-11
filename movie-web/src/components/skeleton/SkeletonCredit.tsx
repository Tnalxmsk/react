import styled, { keyframes } from "styled-components";

const SkeletonCredit = () => {
  return (
    <SkeletonContainer>
      {Array.from({ length: 8 }).map((_, index) => (
        <SkeletonItem key={index}>
          <SkeletonCircle />
          <SkeletonLine />
          <SkeletonCharacter />
        </SkeletonItem>
      ))}
    </SkeletonContainer>
  );
};

export default SkeletonCredit;

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const SkeletonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  margin-top: 30px;
`;

const SkeletonItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
`;

const SkeletonCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(
    to right,
    #f0f0f0 0%,
    #e0e0e0 50%,
    #f0f0f0 100%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
`;

const SkeletonLine = styled.div`
  width: 80%;
  height: 10px;
  margin-top: 10px;
  background: linear-gradient(
    to right,
    #f0f0f0 0%,
    #e0e0e0 50%,
    #f0f0f0 100%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
`;

const SkeletonCharacter = styled(SkeletonLine)`
  width: 70%;
  height: 8px;
`;
