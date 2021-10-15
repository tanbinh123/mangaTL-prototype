package com.wiryaimd.mngtldemo1.controller;

import com.wiryaimd.mngtldemo1.model.TranslatedModel;
import com.wiryaimd.mngtldemo1.services.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class MainController {

    @Autowired
    private MainService mainService;

    @GetMapping("/api/v1/translated")
    public List<TranslatedModel> translatedList(){
        return mainService.getMainRepository().findAll();
    }

}
