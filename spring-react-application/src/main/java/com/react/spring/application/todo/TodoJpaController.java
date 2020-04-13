package com.react.spring.application.todo;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.react.spring.application.todo.entity.Todo;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoJpaController {

	@Autowired
	private TodoJpaService todoJpaService;

	@GetMapping("jpa/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username) {
		return todoJpaService.getAllTodo(username);
	}

	// DELETE /users/{username}/todos/{id}
	@DeleteMapping("jpa/users/{username}/todos/{id}")
	public  ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable int id) {
		todoJpaService.deletetodoById(id);
		return ResponseEntity.noContent().build();
	}

	@GetMapping("jpa/users/{username}/todos/{id}")
	public Todo getTodo(@PathVariable String username, @PathVariable int id) {

		return todoJpaService.geTodoById(id);
	}

	// Edit/Update a Todo
	// PUT /users/{user_name}/todos/{todo_id}
	@PutMapping("jpa/users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable int id, @RequestBody Todo todo) {
		todo.setUsername(username);
		todoJpaService.save(todo);
		System.out.println("Todo updated is :"+ todo.toString());
		return new ResponseEntity<Todo>(todo, HttpStatus.OK);
	}

	@PostMapping("jpa/users/{username}/todos")
	public ResponseEntity<Void> createTodo(@PathVariable String username, @RequestBody Todo todo) {
		todo.setUsername(username);
		Todo createdTodo= todoJpaService.save(todo);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
		return ResponseEntity.created(uri).build();

	}

}
