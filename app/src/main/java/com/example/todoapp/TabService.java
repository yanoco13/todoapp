package com.example.todoapp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class TabService {

    @Autowired
    private TabRepository tabRepository;

    public List<Tab> getAllTabs() {
        return tabRepository.findAll();
    }

    public Optional<Tab> getTabById(String id) {
        return tabRepository.findById(id);
    }

    public Tab saveTab(Tab tab) {
        return tabRepository.save(tab);
    }

    public void deleteTab(String id) {
        tabRepository.deleteById(id);
    }
}