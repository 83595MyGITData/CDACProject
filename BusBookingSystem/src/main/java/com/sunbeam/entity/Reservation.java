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

@Table(name="reservations")


public class Reservation extends BaseEntity{
	
	@Column(name = "seat_number")
	private int seatNumber;
	@Column(name = "reservation_status")
	private String reservationStatus;
	@Column(name = "reservation_date")	
	private LocalDate reservationDate;

}
