import styled from "styled-components";

const Header = () => {
    return (
        <div>
            <h3>오늘은 📅</h3>
            <Today>{new Date().toDateString()}</Today>
        </div>
    )
}

const Today = styled.div`
    color: rgb(37, 147, 255);
`

export default Header;
