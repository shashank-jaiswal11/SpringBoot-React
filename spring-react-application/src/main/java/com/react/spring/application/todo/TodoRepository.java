package com.react.spring.application.todo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.react.spring.application.todo.entity.Todo;

public interface TodoRepository extends JpaRepository<Todo, Integer> {
	
	List <Todo> findByUsername(String username);

}
