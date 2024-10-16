import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";
import styled from "styled-components";
import {useReducer, useRef, useState} from "react";
import {Provider} from "react-redux";
import {store} from "./store/store.js";

const mockData = [
    {
        id: 0,
        isDone: false,
        content: "React Study",
        date: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: "Kotlin Study",
        date: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: "Android Study",
        date: new Date().getTime(),
    },
]

function App() {
    const [count, setCount] = useState(3)

    const increaseId = () => {
        setCount(count + 1);
    }
    return (
        <Provider store={store}>
            <Root>
                <Header/>
                <Editor id={count} increaseId={increaseId} />
                <List />
            </Root>
        </Provider>
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
