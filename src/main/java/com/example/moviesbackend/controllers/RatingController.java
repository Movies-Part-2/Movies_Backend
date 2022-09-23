//package com.example.moviesbackend.controllers;
//
//
//import com.example.moviesbackend.data.Rating;
//import com.example.moviesbackend.repositories.RatingRepository;
//import com.example.moviesbackend.data.Director;
//import com.example.moviesbackend.misc.FieldHelper;
//import lombok.AllArgsConstructor;
//import org.springframework.beans.BeanUtils;
//import org.springframework.http.HttpStatus;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.server.ResponseStatusException;
//
//import java.util.List;
//import java.util.Optional;
//
//@AllArgsConstructor
//@RestController
//@RequestMapping(value = "/api/rating", produces = "application/json")
//public class RatingController {
//    private RatingRepository ratingRepository;
//
//    @GetMapping("")
//    public List<Rating> fetchDirectors() {
//        return ratingRepository.findAll();
//    }
//    @GetMapping("/{id}")
//    public Optional<Director> fetchRatingById(@PathVariable long id) {
//        Optional<Rating> optionalRating = ratingRepository.findById(id);
//        if(optionalRating.isEmpty()) {
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "director id " + id + " not found");
//        }
//        return optionalRating;
//    }
//    @PostMapping("")
//    public void createRating(@RequestBody Rating newRating) {
//        ratingRepository.save(newRating);
//    }
//    @DeleteMapping("/{id}")
//    public void deleteRatingById(@PathVariable long id) {
//        Optional<Rating> optionalRating = ratingRepository.findById(id);
//        if(optionalRating.isEmpty()) {
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "director id " + id + " not found");
//        }
//        ratingRepository.deleteById(id);
//    }
//    @PutMapping("/{id}")
//    public void updateRatingById(@RequestBody Director updatedDirector, @PathVariable long id) {
//        Optional<Rating> originalDirector = ratingRepository.findById(id);
//        if(originalDirector.isEmpty()) {
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "director id " + id + " not found");
//        }
//        updatedRating.setId(id);
//        BeanUtils.copyProperties(updatedRating, originalRating.get(), FieldHelper.getNullPropertyNames(updatedRating));
//        ratingRepository.save(originalDirector.get());
//    }
//}