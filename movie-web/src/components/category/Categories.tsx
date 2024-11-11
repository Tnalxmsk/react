import styled from "styled-components";
import { categories } from "../../mocks/categories.ts";
import CategoryItem from "./CategoryItem.tsx";

const Categories = () => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
};

export default Categories;

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
