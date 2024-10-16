import styled from "styled-components";
import {useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {create} from "../store/todoSlice.js";

const Editor = ({id, increaseId}) => {
    const dispatch = useDispatch();

    const [content, setContent] = useState("")
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            onSubmit()
        }
    }

    const onSubmit = () => {
        if (content === "") {
            contentRef.current.focus();
            return
        }
        dispatch(create({id: id, content: content}))
        increaseId()
        setContent("")
    }

    return (
        <Container>
            <Input
                ref={contentRef}
                placeholder="새로운 Todo..."
                value={content}
                onKeyDown={onKeyDown}
                onChange={onChangeContent}/>
            <InputButton onClick={onSubmit}>추가</InputButton>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    gap: 10px;
`;

const Input = styled.input`
    flex: 1;
    padding: 15px;
    border: 1px solid rgb(220, 220, 220);
    border-radius: 5px;
`

const InputButton = styled.button`
    cursor: pointer;
    width: 80px;
    border: none;
    background-color: rgb(37, 147, 255);
    color: white;
    border-radius: 5px;
`

export default Editor;
