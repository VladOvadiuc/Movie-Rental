package web.dto;

import lombok.*;

@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString(callSuper = true)
@Builder
public class ClientDto extends BaseDto{
    private String name;

  @Override
  public String toString() {
    return "ClientDto{" +
      "name='" + name + '\'' +
      '}';
  }
}
