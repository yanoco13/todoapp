package com.example.todoapp.controller;

import com.example.todoapp.model.Tab;
import com.example.todoapp.model.Task;
import com.example.todoapp.service.TabService;
import com.example.todoapp.service.TaskService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/users/{userId}")
public class TodoController {
    private final TabService tabService;
    private final TaskService taskService;

    public TodoController(TabService tabService, TaskService taskService) {
        this.tabService = tabService;
        this.taskService = taskService;
    }

    @GetMapping("/tabs")
    public List<Tab> getTabs(@PathVariable String userId) {
        return tabService.getTabsByUser(userId);
    }

    @GetMapping("/tabs/{tabId}/tasks")
    public List<Task> getTasks(@PathVariable String userId, @PathVariable Long tabId) {
        // userId をチェックしたい場合は追加ロジックを実装
        return taskService.getTasksByTab(tabId);
    }
}
