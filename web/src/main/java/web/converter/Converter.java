package web.converter;

import core.domain.BaseEntity;
import web.dto.BaseDto;

public interface Converter<Model extends BaseEntity<Integer>, Dto extends BaseDto> {

    Model convertDtoToModel(Dto dto);

    Dto convertModelToDto(Model model);

}
