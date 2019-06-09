package core.service;

import core.domain.Movie;

import java.util.List;

public interface MovieService {
    List<Movie> findAll();
    Movie updateMovie(Integer id, String title, Integer year, String genre, Integer duration, Float rating);

}
