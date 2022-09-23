package com.example.moviesbackend.controllers;

import com.example.moviesbackend.repositories.GenresRepository;
import com.example.moviesbackend.data.Genre;
import com.example.moviesbackend.misc.FieldHelper;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/genres", produces = "application/json")
public class GenreController {
    private GenresRepository genresRepository;

    @GetMapping("")
    public List<Genre> fetchGenres() {
        return genresRepository.findAll();
    }
    @GetMapping("/{id}")
    public Optional<Genre> fetchGenreById(@PathVariable long id) {
        Optional<Genre> optionalGenre = genresRepository.findById(id);
        if(optionalGenre.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Genre id " + id + " not found");
        }
        return optionalGenre;
    }
    @PostMapping("")
    public void createGenre(@RequestBody Genre newGenre) {
        genresRepository.save(newGenre);
    }
    @DeleteMapping("/{id}")
    public void deleteGenreById(@PathVariable long id) {
        Optional<Genre> optionalGenre = genresRepository.findById(id);
        if(optionalGenre.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Genre id " + id + " not found");
        }
        genresRepository.deleteById(id);
    }
    @PutMapping("/{id}")
    public void updateGenreById(@RequestBody Genre updatedGenre, @PathVariable long id) {
        Optional<Genre> originalGenre = genresRepository.findById(id);
        if(originalGenre.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Genre id " + id + " not found");
        }
        updatedGenre.setGenreID(id);
        BeanUtils.copyProperties(updatedGenre, originalGenre.get(), FieldHelper.getNullPropertyNames(updatedGenre));
        genresRepository.save(originalGenre.get());
    }
}