package com.example.todoapp;

import com.example.todoapp.Task;
import com.example.todoapp.Tab;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByTabId(Long tabId);
}
