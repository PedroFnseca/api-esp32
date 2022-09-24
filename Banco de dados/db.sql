DROP DATABASE IF EXISTS bd_esp32;

CREATE DATABASE bd_esp32;

USE bd_esp32;

create table tbl_sensor(
	valor float not null,
	id int not null,
	dataHora datetime not null
);
