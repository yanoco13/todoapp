package com.example.todoapp.model;

import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "person")
public class Person {
    @Id
    @Column(name = "person_id")
    private String personId;

    @Column(name = "person_name")
    private String personName;

    @Column(name = "login_password")
    private String loginPassword;

    @Column(name = "question1")
    private String question1;

    @Column(name = "question2")
    private String question2;

    @Column(name = "question3")
    private String question3;

    @Column(name = "question4")
    private String question4;

    @Column(name = "question5")
    private String question5;

    @Column(name = "record_date")
    @CreationTimestamp
    private Date recordDate;

    @Column(name = "record_user")
    private String recordUser;

    @Column(name = "create_date")
    @CreationTimestamp
    private Date createDate;

    @Column(name = "create_user")
    private String createUser;

    public String getPersonId() {
        return this.personId;
    }

    public void setPersonId(String personId) {
        this.personId = personId;
    }

    public String getPersonName() {
        return this.personName;
    }

    public void setPersonName(String personName) {
        this.personName = personName;
    }

    public String getLoginPassword() {
        return this.loginPassword;
    }

    public void setLoginPassword(String loginPassword) {
        this.loginPassword = loginPassword;
    }

    public String getQuestion1() {
        return this.question1;
    }

    public void setQuestion1(String question1) {
        this.question1 = question1;
    }

    public String getQuestion2() {
        return this.question2;
    }

    public void setQuestion2(String question2) {
        this.question2 = question2;
    }

    public String getQuestion3() {
        return this.question3;
    }

    public void setQuestion3(String question3) {
        this.question3 = question3;
    }

    public String getQuestion4() {
        return this.question4;
    }

    public void setQuestion4(String question4) {
        this.question4 = question4;
    }

    public String getQuestion5() {
        return this.question5;
    }

    public void setQuestion5(String question5) {
        this.question5 = question5;
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

    public void setRecordUser(String recordUser) {
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
