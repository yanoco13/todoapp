package com.example.todoapp.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "task")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "task_id") // DB上のカラム名
    private String id;
    @Column(name = "task_name") // DB上のカラム名
    private String title;
    @Column(name = "record_tab_id") // DB上のカラム名
    private String tabId;

    public Task() {}

    public Task(String id, String title, boolean completed, String tabId) {
        this.id = id;
        this.title = title;
        this.tabId = tabId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTabId() {
        return tabId;
    }

    public void setTabId(String tabId) {
        this.tabId = tabId;
    }
}
