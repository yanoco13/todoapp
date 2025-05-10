package com.example.todoapp;

import com.example.todoapp.Task;
import com.example.todoapp.TaskRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.ArrayList;

@Service
public class TaskService {
    private final TaskRepository taskRepo;

    public TaskService(TaskRepository taskRepo) {
        this.taskRepo = taskRepo;
    }

    public List<Task> getTasksByTab(Long tabId) {
        return taskRepo.findByTabId(tabId);
    }

    public List<Task> getAllTasks() {
        return new ArrayList<>();
    }

    public Optional<Task> getTaskByRecordTabId(String recordTabId) {
        return Optional.empty();
    }

    public Task saveTask(Task task) {
        return task;
    }
}
