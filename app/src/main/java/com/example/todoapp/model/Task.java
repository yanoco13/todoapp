package com.example.todoapp.model;

public class Task {
    private Long id;
    private String title;
    private boolean completed;
    private Long tabId;

    public Task() {}

    public Task(Long id, String title, boolean completed, Long tabId) {
        this.id = id;
        this.title = title;
        this.completed = completed;
        this.tabId = tabId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public Long getTabId() {
        return tabId;
    }

    public void setTabId(Long tabId) {
        this.tabId = tabId;
    }
}
