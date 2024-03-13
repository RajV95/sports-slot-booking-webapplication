create database Main;
use Main;

CREATE TABLE Sports (
    mgid INT PRIMARY KEY NOT NULL,
    gname VARCHAR(20) NOT NULL,
    UNIQUE(gname)
);

SET foreign_key_checks=0;
create table Badminton(
mgid INT NOT NULL,
gid VARCHAR(10) PRIMARY KEY NOT NULL,
slot VARCHAR(5) NOT NULL,
max_students BIGINT NOT NULL,
rem_students BIGINT NOT NULL,
foreign key(mgid) references Sports(mgid));

create table Chess(
mgid INT NOT NULL,
gid VARCHAR(10) PRIMARY KEY NOT NULL,
slot VARCHAR(5) NOT NULL,
max_students BIGINT NOT NULL,
rem_students BIGINT NOT NULL,
foreign key(mgid) references Sports(mgid));

create table Gym(
mgid INT NOT NULL,
gid VARCHAR(10) PRIMARY KEY NOT NULL,
slot VARCHAR(5) NOT NULL,
max_students BIGINT NOT NULL,
rem_students BIGINT NOT NULL,
foreign key(mgid) references Sports(mgid));

create table Carrom(
mgid INT NOT NULL,
gid VARCHAR(10) PRIMARY KEY NOT NULL,
slot VARCHAR(5) NOT NULL,
max_students BIGINT NOT NULL,
rem_students BIGINT NOT NULL,
foreign key(mgid) references Sports(mgid));

create table Tennis(
mgid INT NOT NULL,
gid VARCHAR(10) PRIMARY KEY NOT NULL,
slot VARCHAR(5) NOT NULL,
max_students BIGINT NOT NULL,
rem_students BIGINT NOT NULL,
foreign key(mgid) references Sports(mgid));

create table Table_tennis(
mgid INT NOT NULL,
gid VARCHAR(10) PRIMARY KEY NOT NULL,
slot VARCHAR(5) NOT NULL,
max_students BIGINT NOT NULL,
rem_students BIGINT NOT NULL,
foreign key(mgid) references Sports(mgid));

create table People(
id VARCHAR(15) PRIMARY KEY NOT NULL,
name VARCHAR(50) NOT NULL,
gender VARCHAR(6) NOT NULL,
role VARCHAR(15) NOT NULL,
start_date DATE NOT NULL,
end_date DATE NOT NULL,
refernce_id VARCHAR(20) NOT NULL);

create table Achievements(
id VARCHAR(15) NOT NULL,
competition VARCHAR(60) NOT NULL,
sport_name VARCHAR(15) NOT NULL,
position VARCHAR(20) NOT NULL,
achievement VARCHAR(15) NOT NULL,
FOREIGN KEY(id) REFERENCES People(id));

desc Sports;
desc Badminton;
desc Carrom;
desc Chess;
desc Tennis;
desc Table_Tennis;
desc People;
desc Achievements;