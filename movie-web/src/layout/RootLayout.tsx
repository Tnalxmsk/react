import { Outlet } from "react-router-dom";
import styled from "styled-components";
import NavbarLayout from "./NavbarLayout.tsx";
import SidebarLayout from "./SidebarLayout.tsx";

const RootLayout = () => {
  return (
    <RootLayoutDiv>
      <NavbarDiv>
        <NavbarLayout />
      </NavbarDiv>
      <MainContent>
        <SideBarDiv>
          <SidebarLayout />
        </SideBarDiv>
        <OutletDiv>
          <Outlet />
        </OutletDiv>
      </MainContent>
    </RootLayoutDiv>
  );
};

export default RootLayout;

const RootLayoutDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const NavbarDiv = styled.div`
  background-color: #111;
  color: white;
  padding: 10px;
  flex-shrink: 0;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const SideBarDiv = styled.div`
  background-color: #111;
  color: white;
  padding: 20px;
  width: 150px;
  height: 100vh;
  flex-shrink: 0;
`;

const OutletDiv = styled.div`
  flex: 1;
  padding: 20px;
  background-color: black;
  color: white;
  overflow: auto;
  height: 100%;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;
