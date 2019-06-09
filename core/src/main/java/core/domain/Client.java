package core.domain;

import lombok.*;

import javax.persistence.Entity;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(callSuper = true)
public class Client extends BaseEntity<Integer> {
    private String name;

    /*
    @Override
    public String toString() {
        return "Client{" +
                "name='" + name + '\'' +
                '}';
    }
    */
}