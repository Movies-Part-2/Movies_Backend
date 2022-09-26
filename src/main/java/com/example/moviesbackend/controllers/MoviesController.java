package com.example.moviesbackend.controllers;

//import com.example.moviesbackend.data.MovieService;
import com.example.moviesbackend.repositories.DirectorsRepository;
import com.example.moviesbackend.repositories.GenresRepository;
import com.example.moviesbackend.repositories.MoviesRepository;
import com.example.moviesbackend.misc.FieldHelper;
import com.example.moviesbackend.data.Movie;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;
import java.util.Optional;



@AllArgsConstructor
@RestController
@RequestMapping(path = "/api/movies", produces = "application/json")
public class MoviesController {
//    private EmailService emailService;
//    MovieService service = new MovieService();
    private MoviesRepository moviesRepository;
    private DirectorsRepository directorsRepository;
    private GenresRepository genresRepository;

    @GetMapping("")
    public List<Movie> fetchMovies() {
        return moviesRepository.findAll();
    }
    @GetMapping("/{id}")
    public Optional<Movie> fetchMovieById(@PathVariable long id) {
        Optional<Movie> optionalMovie = moviesRepository.findById(id);
        if(optionalMovie.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Movie id " + id + " not found");
        }
        return optionalMovie;
    }
    @PostMapping("")
    public void createMovie(@RequestBody Movie newMovie) {
//        User author = usersRepository.findById(1L).get();
//        newPost.setAuthor(author);
//        newPost.setCategories(new ArrayList<>());
//        Category cat1 = categoriesRepository.findById(1L).get();
//        newPost.getCategories().add(cat1);
        moviesRepository.save(newMovie);
    }
//    @PostMapping("")
//    public ResponseEntity<Movie> createOrUpdateEmployee(Movie movie) {
//        Movie updated = service.createOrUpdateMovie(movie);
//        return new ResponseEntity<>(updated, new HttpHeaders(), HttpStatus.OK);
//    }

    @DeleteMapping("/{id}")
    public void deleteMovieById(@PathVariable long id) {
        Optional<Movie> optionalMovie = moviesRepository.findById(id);
        if(optionalMovie.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Movie id " + id + " not found");
        }
        moviesRepository.deleteById(id);
    }

//    @PutMapping("/{id}")
//    public void updateMovieById(@RequestBody Movie updatedMovie, @PathVariable long id) {
//            Optional<Movie> optionalMovie = moviesRepository.findById(id);
//            if(optionalMovie.isEmpty()) {
//                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Movie id " + id + " not found");
//            }
//            Movie originalMovie = optionalMovie.get();
//
//            updatedMovie.setId(id);
//            BeanUtils.copyProperties(updatedMovie, originalMovie, FieldHelper.getNullPropertyNames(updatedMovie));
//            moviesRepository.save(originalMovie);
//        }
    @PutMapping("/{id}")
    public void updateMovieById(@RequestBody Movie updatedMovie, @PathVariable long id) {
        Optional<Movie> originalMovie = moviesRepository.findById(id);
        if(originalMovie.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Movie id " + id + " not found");
        }
        updatedMovie.setId(id);
        BeanUtils.copyProperties(updatedMovie, originalMovie.get(), FieldHelper.getNullPropertyNames(updatedMovie));
        moviesRepository.save(originalMovie.get());
    }
}



