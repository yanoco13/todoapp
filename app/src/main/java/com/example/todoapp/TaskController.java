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
@RequestMapping("/api/tasks")
public class TaskController {
    @Autowired
    private TaskService taskService;

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
    public List<Task> getAllTasks() {
        logger.info("Fetching all Tasks");
        return taskService.getAllTasks();
    }

    @GetMapping("{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable String id) {
        return taskService.getTaskById(id).map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Task> createTask(@RequestBody @Valid Task task) {
        Date nowDate = new Date();
        task.setTaskId(task.getTaskId());
        task.setTaskName(task.getTaskName());
        task.setTaskColor(task.getTaskColor());
        task.setTaskNote(task.getTaskNote());
        task.setRecordDate(nowDate);
        task.setCreateDate(nowDate);
        task.setCreateUser(UUID.randomUUID().toString());
        task.setRecordUser(UUID.randomUUID().toString());

        Task savedTask = taskService.saveTask(task);

        return ResponseEntity.ok(savedTask);
    }

    @PutMapping("{id}")
    public ResponseEntity<Task> updateTask(@PathVariable String id,
            @RequestBody Task taskDetails) {
        return taskService.getTaskById(id).map(task -> {
            task.setTaskName(taskDetails.getTaskName());
            task.setRecordDate(taskDetails.getRecordDate());
            task.setRecordUser(taskDetails.getRecordUser());
            Task updatedTask = taskService.saveTask(task);
            return ResponseEntity.ok(updatedTask);
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable String id) {
        return taskService.getTaskById(id).map(task -> {
            taskService.deleteTask(id);
            return ResponseEntity.ok().<Void>build();
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
