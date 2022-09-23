package com.example.moviesbackend.repositories;



import com.example.moviesbackend.data.Director;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DirectorsRepository extends JpaRepository<Director, Long> {
}