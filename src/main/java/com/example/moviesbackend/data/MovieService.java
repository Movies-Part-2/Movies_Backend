//package com.example.moviesbackend.data;
//import com.example.moviesbackend.exceptions.RecordNotFoundException;
//
//import com.example.moviesbackend.repositories.MoviesRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.domain.Example;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.PageRequest;
//import org.springframework.data.domain.Sort;
//import org.springframework.data.repository.query.FluentQuery;
//import org.springframework.stereotype.Service;
//
//import java.awt.print.Pageable;
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
//import java.util.function.Function;
//
//@Service
//public class MovieService {
//    @Autowired
//    MoviesRepository repository;
//    public Movie createOrUpdateMovie(Movie entity) {
//        Optional<Movie> movie = repository.findById(entity.getId());
//
//        if(movie.isPresent())
//        {
//            Movie newMovie = movie.get();
//            newMovie.setTitle(entity.getTitle());
//            newMovie.setScore(entity.getScore());
//            newMovie.setPlot(entity.getPlot());
//
//            newMovie = repository.save(newMovie);
//
//            return newMovie;
//        } else {
//
//            return repository.save(entity);
//        }
//    }
//
//    public List<Movie> getAllMovies() {
//
//        List<Movie> pagedResult = repository.findAll();
//
//            return new ArrayList<>();
//
//    }
//
//    public Movie getMovieById(Long id) throws RecordNotFoundException{
//        Optional<Movie> employee = repository.findById(id);
//
//        if(employee.isPresent()) {
//            return employee.get();
//        } else {
//            throw new RecordNotFoundException("No movie record exist for given id");
//        }
//    }
//
//    public void deleteMovieById(Long id) throws RecordNotFoundException {
//        Optional<Movie> employee = repository.findById(id);
//
//        if (employee.isPresent()) {
//            repository.deleteById(id);
//        } else {
//            throw new RecordNotFoundException("No movie record exist for given id");
//        }
//    }
//}



