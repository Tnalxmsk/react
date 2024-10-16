import styled from "styled-components";
import TodoItem from "./TodoItem.jsx";
import {useState} from "react";
import useStore from "../store/useStore.js";

const List = () => {
    const todos = useStore((state) => state.todos)
    const [search, setSearch] = useState("")

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const getFilteredData = () => {
        if (search === "") {
            return todos
        }
        return todos.filter((todo) =>
            todo.content.toLowerCase().includes(search.toLowerCase())
        )
    }

    const filteredTodos = getFilteredData()

    return (
        <Container>
            <h4>Todo List 🌱</h4>
            <Input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요"/>
            <TodosContainer>
                {filteredTodos.map((todo) => <TodoItem key={todo.id} {...todo}/>)}
            </TodosContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Input = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid rgb(220, 220, 220);
    padding: 15px 0;
    
    &:focus {
        outline: none;
        border-bottom: 1px solid rgb(37, 147, 255);
    }
`

const TodosContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export default List;
