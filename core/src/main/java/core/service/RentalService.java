package core.service;

import core.domain.Rental;

import java.util.List;

public interface RentalService {
    List<Rental> findAll();

    Rental updateRental(Long filmId, Long customerId);

    void saveRental(Rental rental);

    void deleteRental(Long id);

}
