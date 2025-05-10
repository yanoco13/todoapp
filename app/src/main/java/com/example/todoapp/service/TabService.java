package com.example.todoapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.todoapp.model.Tab;
import com.example.todoapp.repository.TabRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TabService {
    private final TabRepository tabRepository;

    @Autowired
    public TabService(TabRepository tabRepository) {
        this.tabRepository = tabRepository;
    }


    public List<Tab> getTabsByUser(String userId) {
        return tabRepository.findByUserId(userId); // メソッド名クエリ
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
