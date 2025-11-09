create database blog;
use blog;

create table users(
	userId int primary key auto_increment,
    firstname varchar(100),
    age int,
    gender enum("Male","Female"),
    username varchar(100),
    email varchar(100),
    password varchar(100),
    provider varchar(100)
);

select * from users;
-- delete from users where userId = 1;

create table Blogs(
	blogId int primary key auto_increment,
    imgsrc text,
	title varchar(50),
    description varchar(500),
    createdAt date,
    category varchar(50),
    uId int,
    foreign key (uId) references users(userId)
);

