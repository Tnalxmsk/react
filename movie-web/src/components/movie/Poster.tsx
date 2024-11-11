import styled from "styled-components";
import { Movie } from "../../types/movie.ts";
import { useNavigate } from "react-router-dom";

interface PosterProps {
  movie: Movie;
}

const Poster = ({ movie }: PosterProps) => {
  const navigate = useNavigate()

  const navigateHandler = () => {
    navigate(`/movie-details/${movie.id}`)
  }

  return (
    <Container onClick={navigateHandler} $path={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}>
      <PosterBack>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieReleaseDate>{movie.release_date}</MovieReleaseDate>
      </PosterBack>
    </Container>
  );
};

export default Poster;

interface ContainerProps {
  $path: string;
}

const Container = styled.div<ContainerProps>`
  background-image: linear-gradient(to top, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 40%),
  url(${(props) => props.$path});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 200px;
  max-width: 150px;
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: transform 0.6s ease-in-out;
  margin-top: 10px;
  border-radius: 10px;

  &:hover {
    transform: rotateY(180deg);
  }

  &::after {
    content: "";
    transition: background-color 0.6s ease;
  }
`;

const PosterBack = styled.div`
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: none;
  background-color: #050505;
  transform: rotateY(180deg); /* 뒷면을 기본적으로 180도 회전 */
  text-align: center;
`;

const MovieTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: white; /* 텍스트 색상 추가 */
`;

const MovieReleaseDate = styled.div`
  font-size: 12px;
  color: white; /* 텍스트 색상 추가 */
`;
