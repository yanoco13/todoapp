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
@CrossOrigin
@RequestMapping("/api/persons")
public class PersonController {
    @Autowired
    private PersonService personService;

    private static final Logger logger = Logger.getLogger(PersonController.class.getName());

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
    public List<Person> getAllPersons() {
        logger.info("Fetching all persons");
        return personService.getAllPersons();
    }

    @GetMapping("{id}")
    public ResponseEntity<Person> getPersonById(@PathVariable String id) {
        return personService.getPersonById(id).map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Person> createPerson(@RequestBody @Valid Person person) {
        Date nowDate = new Date();
        person.setPersonId(
                person.getPersonId() != null ? person.getPersonId() : UUID.randomUUID().toString());
        person.setPersonName(person.getPersonName() != null ? person.getPersonName()
                : UUID.randomUUID().toString());
        person.setLoginPassword(person.getLoginPassword());
        person.setQuestion1(person.getQuestion1());
        person.setQuestion2(person.getQuestion2());
        person.setQuestion3(person.getQuestion3());
        person.setQuestion4(person.getQuestion4());
        person.setQuestion5(person.getQuestion5());
        person.setRecordDate(nowDate);
        person.setCreateDate(nowDate);
        person.setCreateUser(UUID.randomUUID().toString());
        person.setRecordUser(UUID.randomUUID().toString());

        Person savedPerson = personService.savePerson(person);

        return ResponseEntity.ok(savedPerson);
    }

    @PutMapping("{id}")
    public ResponseEntity<Person> updatePerson(@PathVariable String id,
            @RequestBody Person personDetails) {
        return personService.getPersonById(id).map(person -> {
            person.setPersonName(personDetails.getPersonName());
            person.setRecordDate(personDetails.getRecordDate());
            person.setRecordUser(personDetails.getRecordUser());
            Person updatedPerson = personService.savePerson(person);
            return ResponseEntity.ok(updatedPerson);
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePerson(@PathVariable String id) {
        return personService.getPersonById(id).map(person -> {
            personService.deletePerson(id);
            return ResponseEntity.ok().<Void>build();
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
