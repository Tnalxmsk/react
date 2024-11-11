import styled from "styled-components";
import { Link } from "react-router-dom";
import CustomButton from "../components/auth/CustomButton.tsx";
import { useGetUserInfo } from "../hooks/queries/useGetUserInfo.ts";
import { getEmailPrefix } from "../utils/stringUtils.ts";
import useAuthStore from "../store/useAuthStore.ts";

const NavbarLayout = () => {
  const accessToken = useAuthStore(state => state.accessToken)
  const { data, isLoading } = useGetUserInfo(accessToken!!)

  if (isLoading) return <div>로딩중...</div>
  console.log(accessToken)
  return (
    <NavContainer>
      <LeftLinks>
        <Link to={'/'}>YONGCHA</Link>
      </LeftLinks>
      <RightLinks>
        {
          accessToken ?
            <RightContainer>
              <div>{getEmailPrefix(data?.data.email)}님 반갑습니다.</div>
              <Link to={'/'}>
                <CustomButton label="로그아웃" color="#111"/>
              </Link>
            </RightContainer> :
            <>
              <Link to={'/sign-in'}>
                <CustomButton label="로그인" color="#111"/>
              </Link>
              <Link to={'/sign-up'}>
                <CustomButton label="회원가입" color="#fd2727"/>
              </Link>
            </>}
      </RightLinks>
    </NavContainer>
  );
};

export default NavbarLayout;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;
const LeftLinks = styled.div`
  display: flex;
  align-items: center;
  transition: 0.3s;

  a {
    color: #fd2727;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const RightLinks = styled.div`
  display: flex;
  gap: 15px;

  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
  }
`;

const RightContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

