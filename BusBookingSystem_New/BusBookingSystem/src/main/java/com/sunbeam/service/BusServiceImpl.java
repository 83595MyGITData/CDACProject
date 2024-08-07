package com.sunbeam.service;

import java.time.LocalDate;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.dao.BusDao;
import com.sunbeam.dao.RouteDao;
import com.sunbeam.dto.BusDto;
import com.sunbeam.dto.CustomerDto;
import com.sunbeam.dto.SearchDto;
import com.sunbeam.entity.Bus;
import com.sunbeam.entity.Customer;
import com.sunbeam.entity.Route;

@Service
@Transactional
public class BusServiceImpl implements BusService {
	@Autowired
	private BusDao busdao;
	
	@Autowired
	private RouteDao routeDao;
	@Autowired
	private ModelMapper mapper;

	@Override
	public String addBus(BusDto dto) {
		// TODO Auto-generated method stub
		Route route= routeDao.findById(dto.getRouteId()).orElseThrow(()-> new RuntimeException( "Route not found"));
		Bus bus=mapper.map(dto, Bus.class);	
		bus.setSelectedRoute(route);
		busdao.save(bus);
		return "Bus Added Successfully";
	}

	@Override
	public List<Bus> getAllBuses() {
		
		return busdao.findAll();
	}

	@Override
	public List<Bus> getAllBusesBySourceAndDest(String source,String dest,String date) {
//		String source =dto.getSource();
//		String destination =dto.getDestination();
		LocalDate date1=LocalDate.parse(date);
		List<Bus> list = busdao.getAllBusesFromSourceAndDest(date1, dest,source);
		System.err.println(list);
		return  list;
		
	}
	
		
}
