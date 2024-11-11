import { useGetMovies } from "../../hooks/queries/useGetMovies.ts";
import styled from "styled-components";
import Poster from "./Poster.tsx";
import { useGetCategoryMovies } from "../../hooks/queries/useGetCategoryMovies.ts";
import SkeletonMovies from "../skeleton/SkeletonMovies.tsx";
import React, { useCallback, useRef } from "react";
import LoadingSpinner from "../skeleton/LoadingSpinner.tsx";
import SkeletonRow from "../skeleton/SkeletonRow.tsx";

interface MoviesProps {
  url?: string;
  query?: string;
}

const Movies = ({ url }: MoviesProps) => {
  // const { data, isError, isPending } = url ? useGetCategoryMovies(url) : useGetMovies();

  const {
    data,
    isError,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    isLoading,
  } = url ? useGetCategoryMovies(url) : useGetMovies();

  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (isFetchingNextPage) return;
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
      if (node) observerRef.current.observe(node);
    },
    [isFetchingNextPage, hasNextPage, fetchNextPage],
  );

  if (isLoading) {
    return <SkeletonMovies />;
  }
  if (isError) {
    return <div>에러가 발생했습니다.</div>;
  }

  return (
    <Container>
      {data?.pages.map((group, i) => (
        <React.Fragment key={i}>
          {group?.results.map((movie, index) => {
            const isLastElement = i === data.pages.length - 1 && index === group.results.length - 1;
            return (
              <PosterContainer
                ref={isLastElement ? lastElementRef : null}
                key={movie.id}
              >
                <Poster movie={movie} />
              </PosterContainer>
            );
          })}
        </React.Fragment>
      ))}
      {isFetchingNextPage && (
        <LoadingContainer>
          <SkeletonRow count={1} />
          <LoadingSpinner />
        </LoadingContainer>
      )}
    </Container>
  );
};

export default Movies;

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

// 로딩 컨테이너 스타일
const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px 0;
`;

