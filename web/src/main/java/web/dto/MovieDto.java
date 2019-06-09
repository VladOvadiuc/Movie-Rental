package web.dto;


import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class MovieDto extends BaseDto {
    private String title;
    private Integer year;
    private String genre;
    private Integer duration;
    private Float rating;

  @Override
  public String toString() {
    return "MovieDto{" +
      "title='" + title + '\'' +
      ", year=" + year +
      ", genre='" + genre + '\'' +
      ", duration=" + duration +
      ", rating=" + rating +
      '}';
  }
}
