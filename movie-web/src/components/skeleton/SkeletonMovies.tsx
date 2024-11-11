import styled, { keyframes } from "styled-components";

const SkeletonMovies = () => {

  return (
    <Container>
      {Array.from({ length: 20 }).map((_, index) => (
        <SkeletonPoster key={index} />
      ))}
    </Container>
  );
};

export default SkeletonMovies;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 20px;
  justify-items: center;
  padding: 20px;
`;

// 스켈레톤 애니메이션 효과
const skeletonAnimation = keyframes`
  0% {
    background-color: #c2c2c2;
  }
  25% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #c2c2c2;
  }
  100% {
    background-color: #e0e0e0;
  }
`;

// 스켈레톤 포스터 스타일
const SkeletonPoster = styled.div`
  width: 150px;
  height: 225px;
  border-radius: 10px;
  animation: ${skeletonAnimation} 1.5s infinite ease-in-out;
`;
