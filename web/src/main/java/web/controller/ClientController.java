package web.controller;


import core.domain.Client;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import web.converter.ClientConverter;
import web.dto.ClientDto;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ClientController {
    private static final Logger log =
            LoggerFactory.getLogger(ClientController.class);

    @Autowired
    private core.service.ClientService ClientService;

    @Autowired
    private ClientConverter ClientConverter;

    @RequestMapping(value = "/Clients", method = RequestMethod.GET)
    public List<ClientDto> getAllClients() {
        log.trace("getAllClients --- method entered");

        List<Client> Clients = ClientService.getAllClients();
      //  Set<ClientDto> dtos = ClientConverter.convertModelsToDtos(Clients);
       // ClientsDto result = new ClientsDto(dtos);

        log.trace("getAllClients: result={}", Clients);

        return new ArrayList<>(ClientConverter.convertModelsToDtos(Clients));
    }

    @RequestMapping(value = "/Clients", method = RequestMethod.POST)
    ClientDto saveClient(@RequestBody ClientDto dto) {
        log.trace("saveClient: dto={}", dto);

        Client saved = this.ClientService.saveClient(
                ClientConverter.convertDtoToModel(dto)
        );
        ClientDto result = ClientConverter.convertModelToDto(saved);

        log.trace("saveClient: result={}", result);

        return result;
    }
/*
    @RequestMapping(value = "/Clients/{id}", method = RequestMethod.PUT)
    ClientDto updateClient(@PathVariable Integer id,
                         @RequestBody ClientDto dto) {
        log.trace("updateClient: id={},dto={}", id, dto);

        Client update = ClientService.updateClient(
                id,
                ClientConverter.convertDtoToModel(dto));
        ClientDto result = ClientConverter.convertModelToDto(update);

        return result;
    }

    @RequestMapping(value = "/Clients/{id}", method = RequestMethod.DELETE)
    ResponseEntity<?> deleteClient(@PathVariable Integer id) {
        log.trace("deleteClient: id={}", id);

        ClientService.deleteClient(id);

        log.trace("deleteClient --- method finished");

        return new ResponseEntity<>(HttpStatus.OK);
    }*/
}
