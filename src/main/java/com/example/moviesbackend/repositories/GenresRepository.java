package com.example.moviesbackend.repositories;


import com.example.moviesbackend.data.Genre;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GenresRepository extends JpaRepository<Genre, Long > {
}
