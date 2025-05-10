package com.example.todoapp.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.todoapp.model.Tab;

@Repository
public interface TabRepository extends JpaRepository<Tab, String> {
    List<Tab> findByUserId(String userId);
}
