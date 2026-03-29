package com.tender.tender_management.service;

import com.tender.tender_management.entity.Tender;
import com.tender.tender_management.repository.TenderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TenderService {

    @Autowired
    private TenderRepository tenderRepository;

    public Tender saveTender(Tender tender){
        return tenderRepository.save(tender);
    }

    public List<Tender> getAllTenders(){
        return tenderRepository.findAll();
    }

    public void deleteTender(Long id){
        tenderRepository.deleteById(id);
    }
}