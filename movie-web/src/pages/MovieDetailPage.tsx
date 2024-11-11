import styled from "styled-components";
import { useParams } from "react-router-dom";
import DetailCard from "../components/detail/DetailCard.tsx";
import Credit from "../components/detail/Credit.tsx";

const MovieDetailPage = () => {
  const { movieId } = useParams();

  return (
    <RootContainer>
      <DetailCard movieId={movieId!!.toString()} />
      <h1>감독/출연</h1>
      <Credit movieId={movieId!!.toString()} />
    </RootContainer>
  );
};

export default MovieDetailPage;

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
