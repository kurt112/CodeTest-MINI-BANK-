package com.miniBank.miniBank.repository;

import com.miniBank.miniBank.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface UserRepository extends JpaRepository<User,Integer> {
    List<User> findAll();
}
