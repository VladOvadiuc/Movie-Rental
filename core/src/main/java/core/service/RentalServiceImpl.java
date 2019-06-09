package core.service;

import core.domain.Rental;
import core.repository.ClientRepository;
import core.repository.MovieRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RentalServiceImpl implements RentalService {
    private static final Logger log = LoggerFactory.getLogger(
            RentalServiceImpl.class);



    @Autowired
    private MovieRepository filmRepository;

    @Autowired
    private ClientRepository customerRepository;


    @Override
    public List<Rental> findAll() {
        log.trace("findAll --- method entered");

        ArrayList<Rental> rentals = new ArrayList<>();
        //= rentalRepository.findAll();

//        log.trace("findAll: rentals={}", rentals);

        return rentals;
    }

    @Override
    @Transactional
    public Rental updateRental(Long rentalId) {
        log.trace("updateRental");

//        return new Rental();
        Optional<Rental> rental = rentalRepository.findById(rentalId);

//        rental.ifPresent(f -> {
//            f.setFilmId(filmId);
//            f.setCustomerId(customerId);
//        });
//
//        log.trace("updateRental: rental={}", rental.get());

        return rental.orElse(null);
    }

    @Override
    public void saveRental(Rental rental) {
        return rentalRepository.save(rental);
    }

    @Override
    public void deleteRental(Long id) {
        log.trace("delete: id={}", id);

        rentalRepository.deleteById(id);

        log.trace("delete --- method finished");
    }
}
