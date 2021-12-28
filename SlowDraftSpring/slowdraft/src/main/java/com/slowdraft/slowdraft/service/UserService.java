package com.slowdraft.slowdraft.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.slowdraft.slowdraft.exception.UserNotFoundException;
import com.slowdraft.slowdraft.model.User;
import com.slowdraft.slowdraft.repo.UserRepo;

@Service
public class UserService {
	private final UserRepo userRepo;

	@Autowired
	public UserService(UserRepo userRepo) {
		super();
		this.userRepo = userRepo;
	}

	public User addUser(User user) {

		return userRepo.save(user);
	}
	
	public List<User> returnAllUsers(){
		return userRepo.findAll();
	}
	
	public User updateUser(User user) {
		return userRepo.save(user);
	}
	
	public User findUserById(Long id){
		return userRepo.findUserById(id)
				.orElseThrow(() -> new UserNotFoundException("User by id" + id + " was not found"));
	}
	public User findUserByUsername(String id){
		return userRepo.findUserByUsername(id)
				.orElseThrow(() -> new UserNotFoundException("User by id" + id + " was not found"));
	}
	
	public void deleteUser(Long id) {
		userRepo.deleteUserById(id);
	}
}
