package com.sunbeam.entity;

import java.time.LocalDate;

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

@Table(name="schedules")


public class Schedule extends BaseEntity{
	@Column(name="departure_time")
	private LocalDate departureTime; 
	@Column(name="arrival_time")
	private LocalDate arrivalTime;
	@Column(name="availabe_seats")
	private int availabeSeats;

}
