package web.controller;

import core.domain.Movie;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import web.converter.MovieConverter;
import web.dto.MovieDto;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MovieController {
    private static final Logger log =
            LoggerFactory.getLogger(MovieController.class);

    @Autowired
    private core.service.MovieService MovieService;

    @Autowired
    private MovieConverter MovieConverter;

  @RequestMapping(value = "/movies", method = RequestMethod.GET)
  public List<MovieDto> getMovies() {
    log.trace("getMovies");

    List<Movie> movies = MovieService.findAll();

    log.trace("getMovies: movies={}", movies);

    return new ArrayList<>(MovieConverter.convertModelsToDtos(movies));
  }

  @RequestMapping(value = "/movies/{movieId}", method = RequestMethod.PUT)
  public MovieDto updateMovie(
    @PathVariable final Integer movieId,
    @RequestBody final MovieDto movieDto) {
    log.trace("updateMovie: movieId={}, movieDtoMap={}", movieId, movieDto);

    Movie movie = MovieService.updateMovie(movieId,
      movieDto.getTitle(),movieDto.getYear(),movieDto.getGenre(),movieDto.getDuration(),movieDto.getRating());

    MovieDto result = MovieConverter.convertModelToDto(movie);

    log.trace("updateMovie: result={}", result);

    return result;
  }
    
    /*
    @RequestMapping(value = "/Movies", method = RequestMethod.GET)
    MoviesDto getAllMovies() {
        log.trace("getAllMovies --- method entered");

        List<Movie> Movies = MovieService.getAllMovies();
        Set<MovieDto> dtos = MovieConverter.convertModelsToDtos(Movies);
        MoviesDto result = new MoviesDto(dtos);

        log.trace("getAllMovies: result={}", result);

        return result;
    }

    @RequestMapping(value = "/Movies", method = RequestMethod.POST)
    MovieDto saveMovie(@RequestBody MovieDto dto) {
        log.trace("saveMovie: dto={}", dto);

        Movie saved = this.MovieService.saveMovie(
                MovieConverter.convertDtoToModel(dto)
        );
        MovieDto result = MovieConverter.convertModelToDto(saved);

        log.trace("saveMovie: result={}", result);

        return result;
    }

    @RequestMapping(value = "/Movies/{id}", method = RequestMethod.PUT)
    MovieDto updateMovie(@PathVariable Integer id,
                       @RequestBody MovieDto dto) {
        log.trace("updateMovie: id={},dto={}", id, dto);

        Movie update = MovieService.updateMovie(
                id,
                MovieConverter.convertDtoToModel(dto));
        MovieDto result = MovieConverter.convertModelToDto(update);

        return result;
    }

    @RequestMapping(value = "/Movies/{id}", method = RequestMethod.DELETE)
    ResponseEntity<?> deleteMovie(@PathVariable Integer id) {
        log.trace("deleteMovie: id={}", id);

        MovieService.deleteMovie(id);

        log.trace("deleteMovie --- method finished");

        return new ResponseEntity<>(HttpStatus.OK);
    }*/
}
