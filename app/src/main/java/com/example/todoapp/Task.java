package com.example.todoapp;

import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "Task")
public class Task{
	@Id
	@Column(name = "task_id")
	private String taskId;

	@Column(name = "task_name")
	private String taskName;

	@Column(name = "task_color")
	private String taskColor;

	@Column(name = "task_start_time")
	private Date taskStartTime;

	@Column(name = "task_end_time")
	private Date taskEndTime;

	@Column(name = "task_note")
	private String taskNote;

	@Column(name = "record_person_id")
	private String recordPersonId;

	@Column(name = "record_tab_id")
	private String recordTabId;

	@Column(name = "record_date")
	private Date recordDate;

	@Column(name = "record_user")
	private String recordUser;

	@Column(name = "create_date")
	private Date createDate;

	@Column(name = "create_user")
	private String createUser;

	public String getTaskId() {
		return this.taskId;
	}

	public void setTaskId(String taskId) {
		this.taskId = taskId;
	}

	public String getTaskName() {
		return this.taskName;
	}

	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}

	public String getTaskColor() {
		return this.taskColor;
	}

	public void setTaskColor(String taskColor) {
		this.taskColor = taskColor;
	}

	public Date getTaskStartTime() {
		return this.taskStartTime;
	}

	public void setTaskStartTime(Date taskStartTime) {
		this.taskStartTime = taskStartTime;
	}

	public Date getTaskEndTime() {
		return this.taskEndTime;
	}

	public void setTaskEndTime(Date taskEndTime) {
		this.taskEndTime = taskEndTime;
	}

	public String getTaskNote() {
		return this.taskNote;
	}

	public void setTaskNote(String taskNote) {
		this.taskNote = taskNote;
	}

	public String getRecordPersonId() {
		return this.recordPersonId;
	}

	public void setRecordPersonId(String recordPersonId) {
		this.recordPersonId = recordPersonId;
	}

	public String getRecordTabId() {
		return this.recordTabId;
	}

	public void setRecordTabId(String recordTabId) {
		this.recordTabId = recordTabId;
	}

	public Date getRecordDate() {
		return this.recordDate;
	}

	public void setRecordDate(Date recordDate) {
		this.recordDate = recordDate;
	}

	public String getRecordUser() {
		return this.recordUser;
	}

	public void getRecordUser(String createUser) {
		this.recordUser = recordUser;
	}

	public Date getCreateDate() {
		return this.createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public String getCreateUser() {
		return this.createUser;
	}

	public void setCreateUser(String createUser) {
		this.createUser = createUser;
	}
}


