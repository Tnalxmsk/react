import { CastMember } from "../../types/credit.ts";
import styled from "styled-components";

interface CreditItemProps {
  cast: CastMember;
}

const CreditItem = ({cast}: CreditItemProps) => {

  return (
    <Container>
      <ProfileImage src={`${import.meta.env.VITE_MOVIE_IMAGE_URL}/${cast.profile_path}`} alt={cast.name} />
      <Name>{cast.name}</Name>
      <Character>{cast.character}</Character>
    </Container>
  )
};

export default CreditItem;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 120px;
`

const ProfileImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid white;
`

const Name = styled.div`
    margin-top: 10px;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
`

const Character = styled.div`
    font-size: 0.8rem;
    color: gray;
    text-align: center;
`
