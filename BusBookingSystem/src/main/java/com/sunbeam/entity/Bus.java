package com.sunbeam.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor

@Table(name="buses")


public class Bus extends BaseEntity{
	
	@Column(name = "bus_number")
	private String busNumber;
	private int capacity;
	@Column(name = "bus_type")
	private String busType;

}
