package com.example.moviesbackend.repositories;


import com.example.moviesbackend.data.Genre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
public interface GenresRepository extends JpaRepository<Genre, Long >, PagingAndSortingRepository<Genre, Long> {
}
