package com.react.spring.application.todo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.react.spring.application.todo.entity.Todo;

@Service
public class TodoJpaServiceImpl implements TodoJpaService {
	
	@Autowired
	private TodoRepository todoRepository;

	@Override
	public List<Todo> getAllTodo(String username) {
		return todoRepository.findByUsername(username);
	}

	@Override
	public Todo geTodoById(int id) {
		Optional<Todo> todos= todoRepository.findById(id);
		if(todos.isPresent()) {
			Todo todo=todos.get();
			return todo;
		}else {
			throw new RuntimeException("Unable to find todo of id :"+ id );
		}
		
	}

	@Override
	public Todo save (Todo todo) {
		todoRepository.save(todo);
		return todo;
	}

	@Override
	public void deletetodoById(int id) {
		todoRepository.deleteById(id);

	}

}
