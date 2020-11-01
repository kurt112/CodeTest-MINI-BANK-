package com.miniBank.miniBank.controller;

import com.miniBank.miniBank.entity.Transaction;
import com.miniBank.miniBank.entity.User;
import com.miniBank.miniBank.service.Services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;


@RestController
@RequestMapping("/")
public class Api {


	final private Services<User> userServices;
	final private Services<Transaction> transactionServices;

	@Autowired
	public Api(Services<User> userServices, Services<Transaction> transactionServices) {
		this.userServices = userServices;
		this.transactionServices = transactionServices;
	}

	@CrossOrigin
	@GetMapping("/users")
	public List<User> login() {

		return userServices.findAll();
	}

	@CrossOrigin
	@GetMapping("/transactions")
	public List<Transaction> transactions() {
		return transactionServices.findAll();
	}

	@CrossOrigin
	@PostMapping("/login")
	public User user(@RequestParam("username") String username, @RequestParam("password") String password){
		System.out.println("Somone has a request ");
		for(User user: userServices.findAll()){
			if(user.getPassword().equals(password) && user.getUsername().equals(username)){
				return user;
			}
		}
		throw new ResponseStatusException(
				HttpStatus.NOT_FOUND, "Actor Not Found", new Exception("User Not Found"));
	}

	@CrossOrigin
	@PostMapping("/transaction")
	public User Deposit(@RequestParam("id") int id, @RequestParam("value") double value, @RequestParam("transaction")String transaction){
		System.out.println("The value " + id + " The value " + value + " the transaction " + transaction);
		User user  = userServices.findById(id);
		if(transaction.equals("Deposit")){
			user.setAmount((double)Math.round((user.getAmount() + value) * 100)/ 100);
		}else {
			user.setAmount((double)Math.round((user.getAmount() - value) * 100)/ 100);
		}
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
		LocalDateTime now = LocalDateTime.now();
		transactionServices.save(new Transaction(0,user,dtf.format(now),value,transaction));
		userServices.save(user);
		return user;
	}

}
