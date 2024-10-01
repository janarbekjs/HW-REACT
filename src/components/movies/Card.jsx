import React from "react";
import styled from "styled-components";

export const Card = ({ movies }) => {
  return (
    <MoviesGrid>
      {movies
        .filter((movie) => movie.poster)
        .map((movie, index) => (
          <MovieCard key={index}>
            <MoviePoster src={movie.poster} alt={movie.title} />
            <MovieInfo>
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieYear>{movie.year}</MovieYear>
            </MovieInfo>
          </MovieCard>
        ))}
    </MoviesGrid>
  );
};

const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
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
