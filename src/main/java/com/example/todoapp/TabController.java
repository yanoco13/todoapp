package com.example.todoapp;

import java.util.Date;
import java.util.List;
import java.util.UUID;
import java.util.logging.FileHandler;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.logging.SimpleFormatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.annotation.PostConstruct;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/users")
@CrossOrigin( // ★ CORS 設定（開発用）
        origins = "http://localhost:3000", allowCredentials = "true")
public class TabController {
    @Autowired
    private TabService tabService;

    private static final Logger logger = Logger.getLogger(TabController.class.getName());

    @PostConstruct
    public void init() {
        try {
            FileHandler fHandler = new FileHandler("Sample.log", true);
            fHandler.setFormatter(new SimpleFormatter());
            logger.addHandler(fHandler);
            logger.setLevel(Level.INFO);
        } catch (Exception e) {
            logger.severe("Failed to initialize logger: " + e.getMessage());
        }
    }

    @GetMapping
    public List<Tab> getAllTabs(@PathVariable String userId) {
        logger.info("Fetching all tabs");
        return tabService.getAllTabs();
    }

    @PostMapping
    public ResponseEntity<Tab> createTab(@RequestBody @Valid Tab tab) {
        Date nowDate = new Date();
        tab.setTabId(tab.getTabId());
        tab.setTabName(tab.getTabName());
        tab.setTabColor(tab.getTabColor());
        tab.setTabNote(tab.getTabNote());
        tab.setRecordDate(nowDate);
        tab.setCreateDate(nowDate);
        tab.setCreateUser(UUID.randomUUID().toString());
        tab.setRecordUser(UUID.randomUUID().toString());

        Tab savedTab = tabService.saveTab(tab);

        return ResponseEntity.ok(savedTab);
    }

    @PutMapping("{id}")
    public ResponseEntity<Tab> updateTab(@PathVariable String id, @RequestBody Tab tabDetails) {
        return tabService.getTabById(id).map(tab -> {
            tab.setTabName(tabDetails.getTabName());
            tab.setRecordDate(tabDetails.getRecordDate());
            tab.setRecordUser(tabDetails.getRecordUser());
            Tab updatedTab = tabService.saveTab(tab);
            return ResponseEntity.ok(updatedTab);
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTab(@PathVariable String id) {
        return tabService.getTabById(id).map(tab -> {
            tabService.deleteTab(id);
            return ResponseEntity.ok().<Void>build();
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
