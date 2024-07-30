package com.sunbeam.dto;

import java.time.LocalDate;

import javax.persistence.Column;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor



public class CustomerDto {
	

	private String customerFname;

	private String customerLname;

	private String customerEmail;
	
	private String gender;
	
	private int age;
	

	private String customerPhone;
	
	private String password;
	
	
	
	

}
