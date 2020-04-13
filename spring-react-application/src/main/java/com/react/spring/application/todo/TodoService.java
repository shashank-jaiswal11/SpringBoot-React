package com.react.spring.application.todo;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.react.spring.application.todo.entity.Todo;

@Service
public class TodoService {
	
	private static List<Todo>todos= new ArrayList();
	private static int counterId=0;
	
	static {
		todos.add(new Todo(++counterId,"Shashank","Learn Spring",new Date(),false));
		todos.add(new Todo(++counterId,"Shashank","Learn React",new Date(),false));
		todos.add(new Todo(++counterId,"Shashank","Learn microservices",new Date(),false));
	}
	
	public List<Todo> findall(){
		return todos;
	}
	public Todo deleteById(long id) {
		Todo todo = findById(id);

		if (todo == null)
			return null;

		if (todos.remove(todo)) {
			return todo;
		}

		return null;
	}

	public Todo findById(long id) {
		for (Todo todo : todos) {
			if (todo.getId() == id) {
				return todo;
			}
		}

		return null;
	}
	
	public Todo save(Todo todo) {
		if(todo.getId()==-1 || todo.getId()==0) {
			todo.setId(++counterId);
			todos.add(todo);
		} else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}

}
