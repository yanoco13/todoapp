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
@Table(name = "tab")
public class Tab{
	@Id
	@Column(name = "tab_id")
	private String tabId;

	@Column(name = "tab_name")
	private String tabName;

	@Column(name = "tab_color")
	private String tabColor;

	@Column(name = "tab_note")
	private String tabNote;

	@Column(name = "record_date")
	private Date recordDate;

	@Column(name = "record_user")
	private String recordUser;

	@Column(name = "create_date")
	private Date createDate;

	@Column(name = "create_user")
	private String createUser;

	public String getTabId() {
		return this.tabId;
	}

	public void setTabId(String personId) {
		this.tabId = tabId;
	}

	public String getTabName() {
		return this.tabName;
	}

	public void setTabName(String personId) {
		this.tabName = tabName;
	}

	public String getTabColor() {
		return this.tabColor;
	}

	public void setTabColor(String personId) {
		this.tabColor = tabColor;
	}

	public String getTabNote() {
		return this.tabNote;
	}

	public void setTabNote(String personId) {
		this.tabNote = tabNote;
	}

	public Date getRecordDate() {
		return this.recordDate;
	}

	public void setRecordDate(Date createDate) {
		this.recordDate = recordDate;
	}

	public String getRecordUser() {
		return this.recordUser;
	}

	public void getRecordUser(String createUser) {
		this.recordUser = recordUser;
	}

	// public Date getCreateDate() {
	// 	return this.createDate;
	// }

	// public void setCreateDate(Date createDate) {
	// 	this.createDate = createDate;
	// }

	public String getCreateUser() {
		return this.createUser;
	}

	public void setCreateUser(String createUser) {
		this.createUser = createUser;
	}
}


