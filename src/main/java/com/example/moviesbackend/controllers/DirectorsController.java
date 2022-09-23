package com.example.moviesbackend.controllers;

import com.example.moviesbackend.repositories.DirectorsRepository;
import com.example.moviesbackend.data.Director;
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
@RequestMapping(value = "/api/director", produces = "application/json")
public class DirectorsController {
    private DirectorsRepository directorsRepository;

    @GetMapping("")
    public List<Director> fetchDirectors() {
        return directorsRepository.findAll();
    }
    @GetMapping("/{id}")
    public Optional<Director> fetchDirectorById(@PathVariable long id) {
        Optional<Director> optionalDirector = directorsRepository.findById(id);
        if(optionalDirector.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "director id " + id + " not found");
        }
        return optionalDirector;
    }
    @PostMapping("")
    public void createDirector(@RequestBody Director newDirector) {
        directorsRepository.save(newDirector);
    }
    @DeleteMapping("/{id}")
    public void deleteDirectorById(@PathVariable long id) {
        Optional<Director> optionalDirector = directorsRepository.findById(id);
        if(optionalDirector.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "director id " + id + " not found");
        }
        directorsRepository.deleteById(id);
    }
    @PutMapping("/{id}")
    public void updateDirectorById(@RequestBody Director updatedDirector, @PathVariable long id) {
        Optional<Director> originalDirector = directorsRepository.findById(id);
        if(originalDirector.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "director id " + id + " not found");
        }
        updatedDirector.setId(id);
        BeanUtils.copyProperties(updatedDirector, originalDirector.get(), FieldHelper.getNullPropertyNames(updatedDirector));
        directorsRepository.save(originalDirector.get());
    }
}