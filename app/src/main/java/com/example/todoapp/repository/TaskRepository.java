package com.example.todoapp.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.todoapp.model.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, String> {
    List<Task> getTasksByTabId(String tabId);
}
