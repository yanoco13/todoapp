package com.example.todoapp;

import java.util.Date;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.annotation.PostConstruct;
import jakarta.validation.Valid;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/tasks")
public class TaskController {
    @Autowired
    private TaskService taskService;

    @Autowired
    EntityManager entityManager;

    private static final Logger logger = Logger.getLogger(TaskController.class.getName());

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
    public Object getAllTasks() {
        logger.info("Fetching all tasks");
        return taskService.getAllTasks();
    }

    @PostMapping
    public ResponseEntity<Task> createTask(@RequestBody @Valid Task task) {
        logger.info("ログ出力テストTaskPost");
        task.setTaskId(task.getTaskId() != null ? task.getTaskId() : UUID.randomUUID().toString());
        task.setTaskName(null);
        task.setTaskNote("備考");
        task.setTaskStartTime(new Date());
        task.setTaskEndTime(new Date());
        task.setTaskColor("red");
        task.setRecordUser("admin2");
        task.setRecordDate(new Date());
        task.setCreateUser("admin2");
        task.setCreateDate(new Date());
        Task savedTask = taskService.saveTask(task);

        return ResponseEntity.ok(savedTask);
    }
}
