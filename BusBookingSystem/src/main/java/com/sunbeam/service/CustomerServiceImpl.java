package com.sunbeam.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.dao.CustomerDao;
import com.sunbeam.dto.CustomerDto;
import com.sunbeam.entity.Customer;

@Transactional
@Service
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	CustomerDao customerdao;
	@Autowired
	ModelMapper mapper;
	
	public String registerCustomer(CustomerDto dto)
	{
		System.out.println("Service:: "+dto);
		Customer customer=mapper.map(dto, Customer.class);
		
		Customer persistantCust=customerdao.save(customer);
		
	
		
		return "Regisered Successfully";
	}

}
