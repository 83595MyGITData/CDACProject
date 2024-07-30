package com.sunbeam.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.CustomerDto;
import com.sunbeam.service.CustomerServiceImpl;


@RestController
@RequestMapping("/customers")
public class CustomerController {
	@Autowired	
	CustomerServiceImpl customerservice;
	
	
	@PostMapping("/register")
	public ResponseEntity<?> RegisterCustomer(@RequestBody CustomerDto dto)
	{
		System.out.println(dto);
		return ResponseEntity.ok(customerservice.registerCustomer(dto));
		
	
	}
	


}
