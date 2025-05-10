package com.example.todoapp;

import java.util.logging.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.example.todoapp.controller.PersonController;

@SpringBootApplication
public class TodoappApplication {
	private static final Logger logger = Logger.getLogger(PersonController.class.getName());

	public static void main(String[] args) {
		logger.info("Spring起動!!!!!");
		SpringApplication.run(TodoappApplication.class, args);
	}
}
