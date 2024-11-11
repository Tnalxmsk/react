import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const debouncedSearch = debounce((query: string) => {
    navigate(`/search?query=${encodeURIComponent(query)}`);
  }, 500); // 500ms 대기 후 실행

  useEffect(() => {
    if (query) {
      debouncedSearch(query);
    }

    // cleanup 함수로 debounce 취소
    return () => {
      debouncedSearch.cancel();
    };
  }, [query]);

  return (
    <SearchContainer>
      <SearchForm onSubmit={(e) => e.preventDefault()}>
        <SearchInput
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="영화 제목을 입력해주세요."
        />
        <SearchButton><FiSearch/></SearchButton>
      </SearchForm>
    </SearchContainer>
  );
};

export default SearchBar;

const SearchContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  width: 100%;
`;

const SearchForm = styled.form`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex: 1;
  height: 50px;
`;

const SearchInput = styled.input`
  border-radius: 5px;
  border: none;
  width: 90%;
  padding: 10px;
  font-size: 1rem;
  max-width: 700px;
  background-color: #e1e1e1;

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  border-radius: 5px;
  border: none;
  padding: 10px;
  width: 15%;
  max-width: 75px;
  background-color: #fd2727;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    background-color: #fc5656;
  }
`;
