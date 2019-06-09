package core.domain;
import lombok.*;

import javax.persistence.Entity;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(callSuper = true)
public class Movie extends BaseEntity<Integer>{
    private String title;
    private Integer year;
    private String genre;
    private Integer duration;
    private Float rating;

    @Override
    public String toString() {
        return "Movie{" +
                "title='" + title + '\'' +
                ", year=" + year +
                ", genre='" + genre + '\'' +
                ", duration=" + duration +
                ", rating=" + rating +
                '}';
    }
}
