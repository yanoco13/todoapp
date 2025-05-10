package com.example.todoapp;

import java.util.Date;
import java.util.UUID;
import java.util.logging.FileHandler;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.logging.SimpleFormatter;
import java.util.List;

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

    @GetMapping("{record_tab_id}")
    public ResponseEntity<Task> getTaskByRecordTabId(@PathVariable String recordTabId) {
        return taskService.getTaskByRecordTabId(recordTabId).map(ResponseEntity::ok)
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
        task.setTaskId(task.getTaskId() != null ? task.getTaskId() : UUID.randomUUID().toString());
        task.setTaskName(task.getTaskName());
        task.setTaskNote(task.getTaskNote());
        task.setTaskStartTime(task.getTaskStartTime());
        task.setTaskEndTime(task.getTaskEndTime());
        task.setTaskColor(task.getTaskColor());
        task.setRecordUser("admin2");
        task.setRecordDate(new Date());
        task.setCreateUser("admin2");
        task.setCreateDate(new Date());
        Task savedTask = taskService.saveTask(task);

        return ResponseEntity.ok(savedTask);
    }
}
