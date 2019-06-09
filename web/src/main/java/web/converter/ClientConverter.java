package web.converter;

import core.domain.Client;
import org.springframework.stereotype.Component;
import web.dto.ClientDto;

@Component
public class ClientConverter extends BaseConverter<Client, ClientDto> {
  @Override
  public Client convertDtoToModel(ClientDto dto) {
    throw new RuntimeException("Not yet implemented!");
  }

  @Override
  public ClientDto convertModelToDto(Client client) {
    ClientDto clientDto = new ClientDto(
      client.getName());
    clientDto.setId(client.getId());
    return clientDto;
  }
}
