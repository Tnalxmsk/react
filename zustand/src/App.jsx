import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";
import styled from "styled-components";
import {useState} from "react";

function App() {
    const [count, setCount] = useState(3)

    const increaseId = () => {
        setCount(count + 1);
    }
    return (
            <Root>
                <Header/>
                <Editor id={count} increaseId={increaseId} />
                <List />
            </Root>
    )
}

const Root = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 500px;
    margin: 0 auto;
`

export default App
