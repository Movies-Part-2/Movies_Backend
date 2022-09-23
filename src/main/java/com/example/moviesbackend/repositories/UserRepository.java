package com.example.moviesbackend.repositories;

import com.example.moviesbackend.data.User;
import com.example.moviesbackend.dto.UserFetchDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUserName(String userName);
    User findByEmail(String email);

//    @Query(nativeQuery = true)
//    List<UserFetchDTO> fetchUserDTOs();
}