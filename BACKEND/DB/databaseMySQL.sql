drop database if exists `Exercici_omplenar_form_retornar_ok`;
create database `Exercici_omplenar_form_retornar_ok`;
use `Exercici_omplenar_form_retornar_ok`;

create table usuaris(
	id int primary key auto_increment,
    email varchar(75)
);