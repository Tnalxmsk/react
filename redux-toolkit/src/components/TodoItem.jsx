import styled from "styled-components";
import {useDispatch} from "react-redux";
import {deleteTodo, update} from "../store/todoSlice.js";

const TodoItem = ({id, isDone, content, date}) => {
    const dispatch = useDispatch()

    const onChangeCheckbox = () => {
        dispatch(update(id))
    }

    const onClickDelete = () => {
        dispatch(deleteTodo(id))
    }

    return (
        <Container>
            <Input
                checked={isDone}
                onChange={onChangeCheckbox}
                readOnly
                type="checkbox"/>
            <Content>{content}</Content>
            <DateContent>{new Date(date).toLocaleDateString()}</DateContent>
            <Button onClick={onClickDelete}>삭제</Button>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgb(240, 240, 240);
`

const Input = styled.input`
    width: 20px;
`

const Content = styled.div`
    flex: 1;
`

const DateContent = styled.div`
    font-size: 14px;
    color: gray;
`

const Button = styled.button`
    cursor: pointer;
    color: gray;
    border: none;
    border-radius: 5px;
    padding: 5px;
`

export default TodoItem;
