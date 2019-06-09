package core.service;

import core.domain.Movie;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import core.repository.MovieRepository;

import java.util.List;
import java.util.Optional;

@Service
public class MovieServiceImpl implements MovieService {
    private static final Logger log =
            LoggerFactory.getLogger(MovieServiceImpl.class);

    @Autowired
    private MovieRepository movieRepository;

    @Override
    public List<Movie> findAll() {
        log.trace("findAll --- method entered");

        List<Movie> movies = movieRepository.findAll();

        log.trace("findAll: movies={}", movies);

        return movies;
    }
    @Override
    @Transactional
    public Movie updateMovie(Integer id, String title, Integer year, String genre, Integer duration, Float rating){
        log.trace("updateMovie: id={} , title={},year={},genre={},duration={},rating={}", id,title,year,genre,duration,rating);

        Optional<Movie> student = movieRepository.findById(id);

        student.ifPresent(result->{
            result.setTitle(title);
            result.setYear(year);
            result.setGenre(genre);
            result.setDuration(duration);
            result.setRating(rating);
        });

        log.trace("updateMovie: movie={}", student.get());

        return student.orElse(null);
    }
/*
    @Override
    public List<Movie> getAllMovies() {
        log.trace("getAllMovies --- method entered");

        List<Movie> result = movieRepository.findAll();

        log.trace("getAllMovies: result={}", result);

        return result;
    }

    @Override
    public Movie saveMovie(Movie movie) {
        log.trace("-----saveMovie------ book={}", movie);

        Movie savedBook = this.movieRepository.save(movie);

        log.trace("saveMovie: result={}", savedBook);

        return savedBook;
    }

    @Override
    @Transactional
    public Movie updateMovie(Integer id, Movie movie) {
        log.trace("updateBook: id={},book={}", id, movie);

        Optional<Movie> optionalBook = movieRepository.findById(id);
        Movie result = optionalBook.orElse(movie);
        result.setTitle(movie.getTitle());
        result.setYear(movie.getYear());
        result.setGenre(movie.getGenre());
        result.setDuration(movie.getDuration());
        result.setRating(movie.getRating());

        log.trace("updateBook: result={}", result);

        return result;
    }

    @Override
    public void deleteMovie(Integer id) {
        log.trace("deleteBook: id={}", id);

        movieRepository.deleteById(id);

        log.trace("deleteBook --- method finished");
    }*/
}
