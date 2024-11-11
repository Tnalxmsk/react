import styled, { keyframes } from "styled-components";
import { useGetMovieDetail } from "../../hooks/queries/useGetMovieDetail.ts";
import DetailInfo from "./DetailInfo.tsx";

interface DetailCardProps {
  movieId: string;
}

const DetailCard = ({movieId}: DetailCardProps) => {

  const { data, isError, isPending } = useGetMovieDetail(movieId);

  if (isPending) {
    return <SkeletonCard />
  }

  if (isError) {
    return <div>에러 발생</div>;
  }

  return (
    <CardContainer $path={`${import.meta.env.VITE_MOVIE_IMAGE_URL}/${data?.poster_path}`}>
      <DetailInfo detail={data!!} />
    </CardContainer>
  );
};

export default DetailCard;

interface ContainerProps {
  $path: string;
}

const CardContainer = styled.div<ContainerProps>`
    display: flex;
    height: 400px;
    align-items: end;
    position: relative;
    width: 100%;
    background-image: linear-gradient(to right, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 70%),
    url(${(props) => props.$path});
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    padding: 10px;
    margin: 0 auto;

    @media (max-width: 768px) {
        min-width: 100%; /* 작은 화면에서 너비를 100%로 */
        height: 500px; /* 작은 화면에서 적절한 높이 설정 */
        background-size: cover; /* 화면 크기에 맞게 조정, 비율 유지 */
    }

    /* 텍스트 오버플로우 방지 */
    & * {
        word-break: break-word; /* 긴 단어가 있을 때 자동 줄바꿈 */
        overflow-wrap: anywhere; /* 줄바꿈이 가능한 곳에서 줄바꿈 */
        max-width: 100%; /* 텍스트가 컨테이너 밖으로 나가지 않도록 */
    }
`;

const shimmer = keyframes`
    0% {
        background-position: -200px 0;
    }
    100% {
        background-position: calc(200px + 100%) 0;
    }
`;

const SkeletonCard = styled.div`
    display: flex;
    height: 400px;
    width: 100%;
    position: relative;
    background: linear-gradient(
        to right,
        #f0f0f0 0%,
        #e0e0e0 50%,
        #f0f0f0 100%
    );
    background-size: 200% 100%;
    animation: ${shimmer} 1.5s infinite;
    border-radius: 20px;
    padding: 10px;
    margin: 0 auto;

    @media (max-width: 768px) {
        min-width: 100%;
        height: 500px;
    }
`;
