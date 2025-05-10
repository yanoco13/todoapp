package com.example.todoapp;

import com.example.todoapp.Tab;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TabService {
    public List<Tab> getTabsByUser(String userId) {
        // ここに実際のロジックを実装
        return new ArrayList<>();
    }

    public List<Tab> getAllTabs() {
        return new ArrayList<>();
    }

    public Optional<Tab> getTabById(String id) {
        return Optional.empty();
    }

    public Tab saveTab(Tab tab) {
        return tab;
    }

    public void deleteTab(String id) {
        // 削除ロジックを実装
    }
}
