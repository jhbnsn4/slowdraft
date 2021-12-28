package com.slowdraft.slowdraft.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.slowdraft.slowdraft.model.User;

public interface UserRepo extends JpaRepository<User, Long> {

	void deleteUserById(Long id);

	Optional<User> findUserById(Long id);
	
	Optional<User> findUserByUsername(String username);
}
