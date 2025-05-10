package com.example.todoapp.service;

import org.springframework.stereotype.Service;
import com.example.todoapp.model.Task;
import java.util.ArrayList;
import java.util.List;

@Service
public class TaskService {
    public List<Task> getTasksByTab(Long tabId) {
        // ここに実際のロジックを実装
        return new ArrayList<>();
    }
}
