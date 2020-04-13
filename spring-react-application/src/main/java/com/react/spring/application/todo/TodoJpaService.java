package com.react.spring.application.todo;

import java.util.List;

import com.react.spring.application.todo.entity.Todo;

public interface TodoJpaService {
	
public List<Todo> getAllTodo(String username);
	
	public Todo geTodoById(int id);
	
	public Todo save(Todo todo);
	
	public void deletetodoById(int id);

}
