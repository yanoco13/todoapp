package com.example.todoapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.todoapp.model.Tab;
import com.example.todoapp.model.Task;
import com.example.todoapp.repository.TabRepository;
import com.example.todoapp.repository.TaskRepository;
import java.util.ArrayList;
import java.util.List;

@Service
public class TaskService {
    private final TaskRepository taskRepository;

    @Autowired
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> getTasksByTabId(String tabId) {
        return taskRepository.getTasksByTabId(tabId);
    }
}
