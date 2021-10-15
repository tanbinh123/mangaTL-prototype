package com.wiryaimd.mngtldemo1.repositories;

import com.wiryaimd.mngtldemo1.model.TranslatedModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MainRepository extends JpaRepository<TranslatedModel, Integer> {
}
