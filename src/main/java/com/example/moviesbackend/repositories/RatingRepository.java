package com.example.moviesbackend.repositories;

import com.example.moviesbackend.data.Rating;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RatingRepository extends JpaRepository<Rating, Long> {

}