package com.wiryaimd.mngtldemo1.services;

import com.wiryaimd.mngtldemo1.repositories.MainRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class MainService {

    @Autowired
    private MainRepository mainRepository;

    public MainRepository getMainRepository() {
        return mainRepository;
    }
}
