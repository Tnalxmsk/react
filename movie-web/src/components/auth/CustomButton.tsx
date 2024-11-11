import styled from "styled-components";
import useAuthStore from "../../store/useAuthStore.ts";

interface CustomButtonProps {
  label: string;
  color: string;
}

const CustomButton = ({label, color}: CustomButtonProps) => {

  const {removeTokens} = useAuthStore();

  return (
    <NavbarButton color={color} onClick={() => label === "로그아웃" ? removeTokens() : null}>{label}</NavbarButton>
)
}

export default CustomButton;

const NavbarButton = styled.button`
    color: white;
    text-decoration: none;
    font-size: 1rem;
    border-radius: 8px;
    border: none;
    box-shadow: none;
    padding: 8px 16px;
    cursor: pointer;
    background-color: ${props => props.color};
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.1);
    }
`
