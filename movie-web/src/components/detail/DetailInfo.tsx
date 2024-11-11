import styled from "styled-components";
import { Detail } from "../../types/detail.ts";

interface DetailInfoProps {
  detail: Detail;
}

const DetailInfo = ({ detail }: DetailInfoProps) => {
  return (
    <Container>
      <Title>{detail.title}</Title>
      <SubContainer>
        <SubInfoItem>{new Date(detail.release_date).getFullYear()}</SubInfoItem>
        <SubInfoItem>평점: {detail.vote_average}</SubInfoItem>
        <SubInfoItem>{detail.runtime}분</SubInfoItem>
      </SubContainer>
      <TagLine>{detail.tagline}</TagLine>
      <Overview>{detail.overview}</Overview>
    </Container>
  );
};

export default DetailInfo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-weight: bold;
`;

const SubInfoItem = styled.div`
  font-size: 1rem;
  margin: 0 5px;
  font-weight: bold;
`;

const TagLine = styled.h3`
  font-weight: bold;
  font-style: italic;
`;

const Overview = styled.p`
  width: 500px;
  line-height: 1.5;
`;
