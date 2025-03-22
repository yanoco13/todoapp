package com.example.todoapp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public Optional<Task> getTaskByRecordTabId(String recordTabId) {
        return taskRepository.findByRecordTabId(recordTabId);
    }

    public Task saveTask(Task task) {
        return taskRepository.save(task);
    }
}
