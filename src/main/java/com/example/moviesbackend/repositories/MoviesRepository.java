package com.example.moviesbackend.repositories;

import com.example.moviesbackend.data.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface MoviesRepository extends JpaRepository<Movie, Long>, PagingAndSortingRepository<Movie, Long> {

    }

