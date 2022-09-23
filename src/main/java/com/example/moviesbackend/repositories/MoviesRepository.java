package com.example.moviesbackend.repositories;

import com.example.moviesbackend.data.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

    public interface MoviesRepository extends JpaRepository<Movie, Long> {

    }

