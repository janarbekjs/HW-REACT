import React from "react";
import styled from "styled-components";

export const Header = ({ searchMovie, query, setQuery }) => {
  return (
    <HeaderContainer>
      <Title>Movie Search</Title>
      <SearchForm onSubmit={searchMovie}>
        <SearchInput
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Поиск фильма..."
        />
        <SearchButton type="submit">Поиск</SearchButton>
      </SearchForm>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #333;
  color: white;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 250px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;