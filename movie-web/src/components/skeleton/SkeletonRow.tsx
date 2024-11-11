import styled, { keyframes } from "styled-components";

interface SkeletonRowProps {
  count?: number; // 가로로 표시할 Skeleton의 개수
}

const SkeletonRow = ({ count = 5 }: SkeletonRowProps) => {
  return (
    <Row>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </Row>
  );
};

export default SkeletonRow;

// Skeleton 애니메이션
const shimmer = keyframes`
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #f0f0f0;
  }
  100% {
    background-color: #e0e0e0;
  }
`;

// 가로 정렬된 Row 스타일
const Row = styled.div`
  display: flex;
  gap: 20px; /* 카드 사이의 간격 */
  justify-content: center;
  margin-bottom: 20px; /* 줄 간격 */
`;

// Skeleton Card 스타일
const SkeletonCard = styled.div`
  width: 150px;
  height: 225px;
  border-radius: 10px;
  background-color: #e0e0e0;
  animation: ${shimmer} 1.5s infinite;
`;
