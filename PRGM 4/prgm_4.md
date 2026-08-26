>>> **CREATE DATABASE**

CREATE DATABASE StudentDB;





>>> **USE THE DATABASE**

USE StudentDB;





>>> **CREATE TABLE**

CREATE TABLE Student

(

&#x20;   StudentID INT PRIMARY KEY,

&#x20;   Name VARCHAR(50),

&#x20;   Department VARCHAR(30),

&#x20;   Age INT

);





>>> **INSERT RECORDS**

INSERT INTO Student

VALUES

(101,'Anupama','Electronics',21);



INSERT INTO Student

VALUES

(102,'Rahul','Computer Science',22);



INSERT INTO Student

VALUES

(103,'Priya','Electronics',20);



INSERT INTO Student

VALUES

(104,'Karthik','Mathematics',21);





>>> **DISPLAY ALL RECORDS**

SELECT \* FROM Student;





>>> SELECT with WHERE Condition

SELECT \* FROM Student

WHERE Department='Electronics';



or



SELECT \* FROM Student

WHERE Age > 20;





>>> **UPDATE RECORD**

UPDATE Student

SET Age=22

WHERE StudentID=103;





>>> **DISPLAY UPDATED TABLE**

SELECT \* FROM Student;





>>> **DELETE RECORD**

DELETE FROM Student

WHERE StudentID=104;





>>> **DISPLAY FINAL TABLE**

SELECT \* FROM Student;

