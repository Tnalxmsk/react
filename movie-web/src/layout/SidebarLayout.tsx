import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { PiFilmSlateFill } from "react-icons/pi";

const SidebarLayout = () => {
  return (
    <SidebarContainer>
      <StyledLink>
        <SidebarRink to={'search'}>
          <FiSearch style={{ marginRight: '8px' }} />찾기
        </SidebarRink>
      </StyledLink>
      <StyledLink>
        <SidebarRink to={'movies'}>
          <PiFilmSlateFill style={{ marginRight: '8px' }} />영화
        </SidebarRink>
      </StyledLink>
    </SidebarContainer>
  );
};

export default SidebarLayout;

const SidebarContainer = styled.nav`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled.div`
  margin: 10px 0; /* 링크 사이의 여백 */
  transition: transform 0.2s;
  font-weight: bold;

  &:hover {
    transform: scale(1.1);
  }
`;

const SidebarRink = styled(Link)`
  display: flex;
  color: white; /* 링크의 기본 색상을 흰색으로 설정 */
  text-decoration: none; /* 밑줄 제거 */
  width: fit-content;
`;
