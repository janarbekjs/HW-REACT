import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "./Header";
import { Card } from "./Card";
import axios from "axios";

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({ title: "", poster: "", year: "" });
  const [query, setQuery] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const searchMovie = async (e) => {
    e.preventDefault();
    const API_KEY = "b57e0c63";
    const apiURI = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`;

    try {
      const response = await axios.get(apiURI);
      const data = response.data.Search || [];
      setMovies(
        data.map((movie) => ({
          title: movie.Title,
          poster: movie.Poster,
          year: movie.Year,
        }))
      );
    } catch (err) {
      console.error(err);
    }
  };

  const addMovie = () => {
    if (newMovie.title && newMovie.poster && newMovie.year) {
      if (editingIndex !== null) {
        const updatedMovies = [...movies];
        updatedMovies[editingIndex] = newMovie;
        setMovies(updatedMovies);
        setEditingIndex(null);
      } else {
        setMovies([...movies, newMovie]);
      }
      setNewMovie({ title: "", poster: "", year: "" });
    } else {
      alert("Пожалуйста, заполните все поля!");
    }
  };

  const deleteMovie = (index) => {
    const updatedMovies = movies.filter((_, i) => i !== index);
    setMovies(updatedMovies);
  };

  const editMovie = (index) => {
    setNewMovie(movies[index]);
    setEditingIndex(index);
  };

  return (
    <Container>
      <Header searchMovie={searchMovie} query={query} setQuery={setQuery} />

      <Form>
        <Input
          type="text"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
          placeholder="Название фильма"
        />
        <Input
          type="text"
          value={newMovie.poster}
          onChange={(e) => setNewMovie({ ...newMovie, poster: e.target.value })}
          placeholder="Ссылка на постер"
        />
        <Input
          type="text"
          value={newMovie.year}
          onChange={(e) => setNewMovie({ ...newMovie, year: e.target.value })}
          placeholder="Год выпуска"
        />
        <Button onClick={addMovie}>
          {editingIndex !== null ? "Сохранить изменения" : "Добавить фильм"}
        </Button>
      </Form>

      <Card movies={movies} />

      <MoviesList>
        {movies.map((movie, index) => (
          <MovieCard key={index}>
            <MoviePoster src={movie.poster} alt={movie.title} />
            <MovieInfo>
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieYear>{movie.year}</MovieYear>
              <DeleteButton onClick={() => deleteMovie(index)}>
                Удалить
              </DeleteButton>
              <EditButton onClick={() => editMovie(index)}>Изменить</EditButton>
            </MovieInfo>
          </MovieCard>
        ))}
      </MoviesList>
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 80%;
  max-width: 500px;
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #28a745;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;

const MoviesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding-top: 20px;
`;

const MovieCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
`;

const MoviePoster = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const MovieInfo = styled.div`
  padding: 15px;
`;

const MovieTitle = styled.h3`
  font-size: 1.2rem;
  margin: 10px 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MovieYear = styled.p`
  font-size: 1rem;
  color: #777;
  margin-bottom: 10px;
`;

const DeleteButton = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  color: white;
  background-color: #dc3545;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

const EditButton = styled.button`
  background-color: #f0c040;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 4px;

  &:hover {
    background-color: #e0a030;
  }
`;
