package com.example.todoapp;

import com.example.todo.model.Tab;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TabRepository extends JpaRepository<Tab, Long> {
    List<Tab> findByUserId(String userId);
}
