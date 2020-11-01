package com.miniBank.miniBank.entity;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "transaction")
@NoArgsConstructor
@AllArgsConstructor
public @Data class Transaction {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;


	@ManyToOne()
	@JoinColumn(name = "user_id")
	@JsonIgnore
	private User user;

	@Column(name = "date")
	private String Date;

	@Column(name ="amount")
	private double amount;

	@Column(name = "type")
	private String type;





}
