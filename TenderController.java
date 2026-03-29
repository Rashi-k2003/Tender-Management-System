package com.tender.tender_management.controller;

import com.tender.tender_management.entity.Tender;
import com.tender.tender_management.service.TenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tenders")
@CrossOrigin(origins="*")
public class TenderController {

    @Autowired
    private TenderService tenderService;

    @PostMapping("/add")
    public Tender addTender(@RequestBody Tender tender){
        return tenderService.saveTender(tender);
    }

    @GetMapping("/all")
    public List<Tender> getAllTenders(){
        return tenderService.getAllTenders();
    }

    @DeleteMapping("/{id}")
    public void deleteTender(@PathVariable Long id){
        tenderService.deleteTender(id);
    }

    @PutMapping("/update/{id}")
    public Tender updateTender(@PathVariable Long id, @RequestBody Tender tender){
        tender.setId(id);
        return tenderService.saveTender(tender);
    }
}