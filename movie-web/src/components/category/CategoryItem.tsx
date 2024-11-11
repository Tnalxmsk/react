import { Category } from "../../mocks/categories.ts";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface CategoryItemProps {
  category: Category
}

const CategoryItem = ({category}: CategoryItemProps) => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(`/movies${category.url}`);
  }

  return (
    <ItemContainer onClick={navigateHandler}>
      {category.name}
    </ItemContainer>
  )
}

export default CategoryItem;

const ItemContainer = styled.div`
    border: none;
    border-radius: 12px;
    width: 250px;
    height: 100px;
    background-color: gray;
    margin-top: 20px;
    margin-left: 16px;
    align-items: center;
    padding: 20px;
`
