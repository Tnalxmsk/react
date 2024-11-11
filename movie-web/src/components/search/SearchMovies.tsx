import styled from "styled-components";
import { useGetSearchMovies } from "../../hooks/queries/useGetSearchMovies.ts";
import Poster from "../movie/Poster.tsx";
import SkeletonMovies from "../skeleton/SkeletonMovies.tsx";

interface SearchMoviesProps {
  query?: string;
}

const SearchMovies = ({ query }: SearchMoviesProps) => {

  const { data, isError, isLoading } = useGetSearchMovies(query!!);

  if (isLoading) {
    return <SkeletonMovies />;
  }
  if (isError) {
    return <div>에러가 발생했습니다.</div>;
  }

  return (
    <Container>
      {data?.map((movie) => (
        <PosterContainer key={movie.id}>
          <Poster movie={movie} />
        </PosterContainer>
      ))}
    </Container>
  );
};

export default SearchMovies;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 20px;
  justify-items: center;
  padding: 20px;
`;

const PosterContainer = styled.div`
  position: relative;
  width: 150px;
  justify-content: left;
  border-radius: 10px;
  overflow: hidden;
`;
