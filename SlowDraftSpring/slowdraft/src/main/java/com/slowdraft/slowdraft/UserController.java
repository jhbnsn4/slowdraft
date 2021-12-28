package com.slowdraft.slowdraft;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.slowdraft.slowdraft.model.MyCustomMessage;
import com.slowdraft.slowdraft.model.User;
import com.slowdraft.slowdraft.service.UserService;

@RestController
@RequestMapping("users")
@CrossOrigin(value="http://localhost:4200", allowCredentials = "true")

public class UserController {
	final UserService userService;

	public UserController(UserService userService) {
		
		this.userService = userService;
	}
	
	
	@GetMapping("all")
	public ResponseEntity<List<User>> getAllUsers () {
		
	List<User> users = userService.returnAllUsers();
	return new ResponseEntity<>(users, HttpStatus.OK);
	}
	
	
	@GetMapping("/find/{id}")
	public ResponseEntity<User> getUserById(@PathVariable("id") Long id) {
		
	User currentUser = userService.findUserById(id);
	return new ResponseEntity<>(currentUser, HttpStatus.OK);
	}
	
	@PostMapping("add")
	public void addUser(@RequestBody User user){
		 userService.addUser(user);
		
	}
	
	@PutMapping("/update")
	public  ResponseEntity<User> updateUser(@RequestBody User user){
		
		User updatedUser = userService.updateUser(user);
		return new ResponseEntity<>(updatedUser, HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{id}")
	public  ResponseEntity<?> deleteUser(@PathVariable("id") Long id){
		
		userService.deleteUser(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PostMapping(value="/login")
	public MyCustomMessage login(HttpSession mySession, @RequestBody User incomingUser) {
		
		System.out.println("INSIDE LOGIN");
		System.out.print(incomingUser.toString());
		User currentUser = userService.findUserByUsername(incomingUser.getUsername());

		if(currentUser==null) 
		{
			System.out.println("__________________USER IS NULL_______________");
			mySession.invalidate();
			return new MyCustomMessage("Unsuccessfull login", "User Not Found");
		} else if(!incomingUser.getPassword().equals(currentUser.getPassword())) 
		{
			System.out.println("______________PASSWORDS DONT MATCH______________");
			mySession.invalidate();
			return new MyCustomMessage("Unsuccessfull login", "Password Incorrect");
		} else 
		{
			System.out.println("____________________________LOGIN SUCCESSFUL__________________");
			mySession.setAttribute("currentUser", currentUser);
			return new MyCustomMessage("You have successfully logged IN", String.valueOf(currentUser.getId()));
		}
		
	}
	
	@PostMapping(value="/logout")
	public MyCustomMessage logout(HttpSession mySession) {

		mySession.invalidate();

		return new MyCustomMessage("You have successfully logged OUT", "");
	}
	
	
	}
