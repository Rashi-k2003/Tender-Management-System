package com.tender.tender_management.repository;

import com.tender.tender_management.entity.Tender;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TenderRepository extends JpaRepository<Tender, Long> {

}