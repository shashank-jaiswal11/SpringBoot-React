package com.react.spring.application.rest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins ="http://localhost:4200")
public class HelloWorldController {

	@GetMapping("/hello")
	public String sayHello() {
		return "Hello world";
	}
	@GetMapping("/hellobean")
	public HelloWorldBean sayHelloWorldBean() {
		return new HelloWorldBean("Say hello");
	}
	@GetMapping("/hellobean/{name}")
	public HelloWorldBean sayHelloWorldBean(@PathVariable String name) {
		//throw new RuntimeException("Something went wrong");
		return new HelloWorldBean(String.format("Say hello, %s", name));
	}
	
}
