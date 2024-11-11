import { useGetCredit } from "../../hooks/queries/useGetCredit.ts";
import styled from "styled-components";
import CreditItem from "./CreditItem.tsx";
import SkeletonCredit from "../skeleton/SkeletonCredit.tsx";

interface CreditProps {
  movieId: string;
}

const Credit = ({ movieId }: CreditProps) => {
  const { data, isError, isPending } = useGetCredit(movieId);

  if (isPending) {
    return (
      <SkeletonCredit />
    );
  }

  if (isError) {
    return <div>에러가 발생했습니다.</div>;
  }

  return (
    <div>
      <CreditContainer>
        {data?.cast.map((cast) => <CreditItem key={cast.id} cast={cast} />)}
      </CreditContainer>
    </div>
  );
};

export default Credit;

const CreditContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  margin-top: 30px;
`;
