package core.service;

import core.domain.Client;

import java.util.List;

public interface ClientService {
    List<Client> getAllClients();
    Client saveClient(Client client);

    Client updateClient(Integer id, Client convertDtoToModel);

    void deleteClient(Integer id);
}
