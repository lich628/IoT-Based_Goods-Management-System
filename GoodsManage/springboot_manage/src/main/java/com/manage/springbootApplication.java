package com.manage;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@MapperScan("com.manage.mapper")
@CrossOrigin
public class springbootApplication {

	public static void main(String[] args) {
		SpringApplication.run(springbootApplication.class, args);
	}

}
