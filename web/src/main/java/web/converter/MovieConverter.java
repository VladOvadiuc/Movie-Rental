package web.converter;

import core.domain.Movie;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import web.dto.MovieDto;

@Component
public class MovieConverter extends BaseConverter<Movie, MovieDto> {


  private static final Logger log = LoggerFactory.getLogger(MovieConverter.class);

  @Override
  public Movie convertDtoToModel(MovieDto dto) {
    throw new RuntimeException("Not yet implemented!");
  }

  @Override
  public MovieDto convertModelToDto(Movie movie) {
    MovieDto movieDto = new MovieDto(
      movie.getTitle(),movie.getYear(),movie.getGenre(),movie.getDuration(),movie.getRating());
    movieDto.setId(movie.getId());
    return movieDto;
  }
  
  /*
  @Override
    public Movie convertDtoToModel(MovieDto dto) {
        Movie dto1 = Movie.builder()
                .title(dto.getTitle())
                .year(dto.getYear())
                .genre(dto.getGenre())
                .duration(dto.getDuration())
                .rating(dto.getRating())
                .build();
        dto1.setId(dto.getId());
        return dto1;
    }

    @Override
    public MovieDto convertModelToDto(Movie dto) {
        MovieDto movie = MovieDto.builder()
                .title(dto.getTitle())
                .year(dto.getYear())
                .genre(dto.getGenre())
                .duration(dto.getDuration())
                .rating(dto.getRating())
                .build();
        movie.setId(dto.getId());
        return movie;
    }*/
}
