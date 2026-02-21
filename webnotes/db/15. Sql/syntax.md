[one-shot](#SQL-ONESHOT)  
[selection](#selection)  
[string](#STRING-OPERATIONS)  
[aggregate fns](#AGGREGARE-FUNCTIONS)  
[relationships](#relationships)  
[joins](#joins)  
[window funcitons](#Window-Functions)  
[cte](#Common-Table-Expressions)

## DATABASE

```sql
show DATABASES;
CREATE DATABASE vela;
drop DATABASE vela;
use vela;
SELECT DATABASE();
```

---

## TABLE

```sql
CREATE Table v(name VARCHAR(50), age INT);
show TABLES;
show COLUMNS from v;
desc v;
drop table v;
--INSERTING DATA
INSERT into v(name,age)
VALUES('vela',19),('john',45)
```
---
TABLE DEFINITION PROPERTIES  
PRIMARY KEY,UNIQUE,AUTOINCREMENT
```sql
CREATE TABLE orders (
  id INT PRIMARY KEY,
  order_no INT AUTO_INCREMENT UNIQUE,
  customer_name VARCHAR(100)
);
-- WE CAN USE AUTOINC ONLY WITH PRIMARY KEY OR WITH UNIQUE
--CHECK
create TABLE V(
    id INT AUTO_INCREMENT PRIMARY KEY,
    CONSTRAINT price int DEFAULT 0 CHECK (PRICE>0),
    name VARCHAR(20)
);
-- CONSTRAINT WHEN THE ERROR COMES IT WILL SHOW THE  ERROR IN CONSTRAINT NAME
```
## ALTERING-TABLE
```sql
--add new column
ALTER TABLE v
add description VARCHAR(50);
--delete a column
ALTER TABLE employee
DROP COLUMN emp_salary;
--modify a column
ALTER Table employee
MODIFY COLUMN age DECIMAL;--changing the datatype
--rename a column
alter Table v
change COLUMN old_col_name new_col_name INT;
```
---
## UPDATE DATA
```sql
UPDATE v SET age=20 WHERE AGE=19;
--delete a column
DELETE FROM V WHERE NAME='ram
```
---
# SQL-ONESHOT

-- ORDER OF EXECUTION

-- SELECT  
-- FROM  
-- WHERE  
-- GROUP BY  
-- HAVING  
-- ORDER BY  
-- LIMIT/OFFSET

--SYNTAX ORDER 

--SELECT columns
--FROM table1
--JOIN table2 ON table1.id = table2.id
--WHERE some_condition
--GROUP BY column
--HAVING group_condition
--ORDER BY column;

## selection

```sql
select name from v;
SELECT * from v;
--DISTINCT
SELECT DISTINCT name FROM v;
--it will show only non duplicate name
SELECT DISTINCT name, price FROM v;
--it will show only non duplicate name ,price together
-- where keyword
select * from v where age>=10;
SELECT age as user_id FROM v; --ALIAS

--SELECT CURRENT_TIME();
SELECT CURRENT_DATE();
SELECT NOW();
-- NEXT DATE
SELECT your_date_column + INTERVAL 1 DAY AS next_date
FROM your_table;
--ANOTHER METHOD
SELECT DATE_ADD(your_date_column, INTERVAL 1 DAY) AS next_date
FROM your_table;

-- ORDER,GROUP,PARTITION
SELECT * FROM v
ORDER BY price DESC
LIMIT 2;

SELECT first_name, AVG(age) AS average_age
FROM Users
GROUP BY first_name;
```
-- PARTITION BY divides the result set into groups (partitions) for window functions.

--SUBQUERY,LIMIT,OFFSET

```sql
SELECT(
  SELECT DISTINCT SALARY
  FROM EMPLOYEE
  ORDER BY SALARY DESC
  LIMIT 1 OFFSET 1
) AS SecondHighestSalary;
```

-- OFFSET tells the database to skip a number of rows from the top  
of the result set before starting to return data.IT IS USED ONLY WITH LIMIT  
-- OFFSET is applied first, then LIMIT selects rows from that point onward
SELECT \* FROM employee LIMIT 2, 100;  
-- SHORTHAND:OFFSET comes first, LIMIT comes second here

AND OR BETWEEN IN CASE

```sql
SELECT *
FROM Users
WHERE first_name = "Emma" AND last_name = "Johnson"

SELECT *
FROM Users
WHERE first_name = 'Jane' OR last_name = 'Johnson';

SELECT *
FROM Users
WHERE age BETWEEN 40 AND 60;

SELECT *
FROM Users
WHERE email IN ('jane@example.com', 'olivia@example.com');

SELECT first_name, age,
    CASE
        WHEN age < 30 THEN 'Young'
        WHEN age >= 30 AND age < 60 THEN 'Middle-aged'
        ELSE 'Senior'
    END AS age_group
FROM
    Users;
```

---
 WILD CARDS
```sql
% MATCHES ZERO OR MORE CHAR
_ MATCHES ONE CHAR

SELECT * FROM v
where name like "%tab%"

SELECT * from v
WHERE  NAME LIKE "_ELA";
```

---

## STRING-OPERATIONS

```sql
SELECT SUBSTRING(first_name, 2, 6) FROM USERS;
SELECT SUBSTR('abcdef', -3);      -- 'def' (supports negative index)
SELECT REPLACE(first_name, 'Jane', 'Janeeeee') FROM USERS;
SELECT REVERSE(first_name) FROM USERS;
SELECT CHAR_LENGTH(first_name) FROM USERS;
SELECT LENGTH(last_name) FROM USERS;
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM users;
SELECT UPPER('hello'); -- returns 'HELLO'
SELECT LOWER('WORLD'); -- returns 'world'
SELECT TRIM('   hello   ');     -- removes both sides
SELECT LTRIM('   hello');       -- removes left spaces
SELECT RTRIM('hello   ');       -- removes right spaces
SELECT INSTR('hello', 'l'); -- returns 3
SELECT CAST(123 AS CHAR);
```

---

## AGGREGARE-FUNCTIONS

-- Definition: Perform a calculation on a set of rows and return one summarized result.  
-- Effect: They collapse rows into a single value per group.  
-- Used with: GROUP BY (mostly).  
-- MIN,MAX,COUNT,AVG,SUM,OFFSET  

```sql
SELECT MIN(PRICE) FROM v
SELECT MAX(PRICE) FROM v

SELECT COUNT(*) FROM v
WHERE PRICE >=5000;

SELECT AVG(PRICE) FROM v;
SELECT SUM(PRICE) FROM V;

SELECT DepartmentID, COUNT(*) AS NumEmployees
FROM Employees
GROUP BY DepartmentID
HAVING COUNT(*) > 5;
```
HAVING IS LIKE WHERE FOR GROUP BY

---
## joins
Inner → only where there’s overlap  
Left / Right → all from one side + match from the other  
Full outer → everything, fill gaps with NULL  
Cross → everything × everything  
Self → table meets itself  

```sql
--cross join:
-- A CROSS JOIN is the Cartesian product of two tables. It gives you all possible combinations.
SELECT *
FROM table_a
CROSS JOIN table_b;
```

```sql
-- inner join:
-- An INNER JOIN returns only the rows where there’s a match between two tables based on a specified condition.
SELECT * FROM engineer e
INNER JOIN tasks t ON e.engineer_id = t.engineer_id;
```

```sql
---- LEFT JOIN
-- A left join returns all records from the left table, and the matched records from the right table.
-- If there's no match, the result is NULL from the right side.
SELECT * FROM engineer e
LEFT JOIN tasks t ON e.engineer_id = t.engineer_id;
```

```sql
-- RIGHT JOIN
-- A right join returns all records from the right table , and the matched records from the left table . If there's no match, the result is NULL from the left side.
SELECT * FROM engineer e
RIGHT JOIN tasks t ON e.engineer_id = t.engineer_id;
```

```sql
--SELF JOIN
-- Table joined with itself (useful for hierarchies)
SELECT e.name, m.name AS manager_name FROM engineer e LEFT JOIN engineer m ON e.manager_id = m.engineer_id;
```
---
## advanced concepts

### cast
-- CAST is a SQL function that converts a value from one data type to another.  
-- Convert a string to an integer
```sql
SELECT CAST('123' AS INT) AS result;
-- Convert string to date
SELECT CAST('2025-09-01' AS DATE) AS result;
```

-- COALESCE is a function that returns the first non-NULL value in a list of expressions.  
-- If all values are NULL, it returns NULL.

```sql
SELECT COALESCE(NULL, NULL, 'Hello', 'World');
```
-- Result: 'Hello' (first non-NULL).
-- Default value when NULL

###ROUND
-- ROUND(number, decimals)

```sql
SELECT ROUND(123.4567, 0) AS result;
```
### union vs union all

#### 1. UNION

-- Combines results of two (or more) SELECT queries.  
-- Removes duplicates from the combined result set (performs an implicit DISTINCT).  
-- Slightly slower than UNION ALL because it must check for duplicates.  
-- SELECT name FROM employees UNIONSELECT name FROM managers;

#### 2. UNION ALL

-- Combines results of two (or more) SELECT queries.  
-- Keeps duplicates (no DISTINCT applied).  
-- Usually faster because it doesn’t need to check for duplicates.  
-- SELECT name FROM employees  
-- SELECT name FROM managers;  
-- → Result: Names from both tables, including duplicates

### correlated vs normal(non correlated)

#### non correlated

-- The inner query runs first, independently of the outer query .runs one time  
-- The result is then passed to the outer query.  
-- It doesn’t depend on any column of the outer query.

```sql
SELECT name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
```

#### Correlated Subquery

-- The inner query runs once for every row of the outer query.
-- It references columns from the outer query.
-- Slower, but useful when comparing each row with a group.

```sql
SELECT e1.name, e1.salary
FROM employees e1
WHERE e1.salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.department_id = e1.department_id
);
```
### FUNCTIONS
```sql
CREATE FUNCTION function_name(input_param TYPE)
RETURNS return_type
DETERMINISTIC
BEGIN
  -- Your logic here
  DECLARE result return_type;
  -- e.g., compute result
  SET result = input_param * 2;

  RETURN result;
END $$
```
---

## Window-Functions

-- Definition: perform calculations across a set of rows related to the current row (a "window"), without collapsing rows like GROUP BY

<function_name>(expression) 
OVER (
    [PARTITION BY partition_expression]
    [ORDER BY order_expression]
    [ROWS|RANGE frame_specification]
)  
<function_name>: SUM, AVG, COUNT, ROW_NUMBER, RANK, LEAD, LAG, FIRST_VALUE, LAST_VALUE, etc. 
 
OVER: Defines the “window” of rows the function looks at for each row.  
PARTITION BY (optional): Divides the dataset into subsets, and the function is applied within each subset.  
ORDER BY (optional): Defines the order of rows within the window—important for functions like ROW_NUMBER() or LAST_VALUE().  
ROWS / RANGE (optional): Defines the frame of rows relative to the current row.  

### Ranking Functions

```sql
ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC) AS row_num
RANK() OVER (ORDER BY salary DESC) AS rank
DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rank
NTILE(4) OVER (ORDER BY salary DESC) AS quartile
```

-- rownumber :Gives a unique sequential number to each row within the partition.No ties (always unique).  
-- rank :Assigns ranks, but ties get the same rank.Gaps exist after ties.  
-- dense rank :Like RANK(), but no gaps after ties.  
-- nthile :Divides rows into N buckets as evenly as possible.

### Aggregate Functions with OVER()

--sum,count,min,max,avg

```sql
SUM(salary) OVER (PARTITION BY dept) AS dept_salary_total
COUNT(*) OVER (PARTITION BY dept) AS dept_employee_count

-- Value Functions
-- lead, lag,first value,last value
LAG(salary, 1) OVER (ORDER BY hire_date) AS prev_salary
LEAD(salary, 1) OVER (ORDER BY hire_date) AS next_salary
FIRST_VALUE(salary) OVER (ORDER BY hire_date) AS first_salary
LAST_VALUE(salary) OVER (ORDER BY hire_date ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) 
AS last_salary
```

---

## Common-Table-Expressions

-- CTE is very much like a subquery that you define separately at the top for clarity and reuse

```sql
WITH HighSalary AS (
    SELECT name, salary
    FROM employees
    WHERE salary > 5000
)
SELECT * FROM HighSalary;
--multile cte
WITH DeptAvg AS (
    SELECT department_id, AVG(salary) AS avg_sal
    FROM employees
    GROUP BY department_id
),
AboveAvg AS (
    SELECT e.name, e.salary, e.department_id
    FROM employees e
    JOIN DeptAvg d ON e.department_id = d.department_id
    WHERE e.salary > d.avg_sal
)
SELECT * FROM AboveAvg;

```

### recursive cte

```sql
-- You want to find all employees under Alice.(hierachy)
WITH RECURSIVE EmployeeHierarchy AS (
    -- Anchor: start with Alice
    SELECT EmployeeID, Name, ManagerID
    FROM Employees
    WHERE Name = 'Alice'
    UNION ALL
    -- Recursive: find employees who report to the previous level
    SELECT e.EmployeeID, e.Name, e.ManagerID
    FROM Employees e
    INNER JOIN EmployeeHierarchy eh ON e.ManagerID = eh.EmployeeID
)
SELECT * FROM EmployeeHierarchy;
-- Generating sequences
WITH RECURSIVE Numbers AS (
    -- Anchor: start at 1
    SELECT 1 AS n
    UNION ALL
    -- Recursive: add 1 each time
    SELECT n + 1
    FROM Numbers
    WHERE n < 100
)
SELECT n
FROM Numbers;
```

## relationships

```sql
-- one to one relationships
CREATE TABLE User (
  id INT PRIMARY KEY,
  name VARCHAR(50)
);

CREATE TABLE UserProfile (
  user_id INT PRIMARY KEY,
  bio TEXT,
  FOREIGN KEY (user_id) REFERENCES User(id)
);
-- user_id is both a foreign key and primary key, enforcing 1:1.
-- here both are primary keys so no duplicates

--one to many
CREATE TABLE Customer (
  id INT PRIMARY KEY,
  name VARCHAR(50)
);
CREATE TABLE Orders (
  id INT PRIMARY KEY,
  customer_id INT,
  order_date DATE,
  FOREIGN KEY (customer_id) REFERENCES Customer(id)
);
--Each row in Table A can be linked to many rows in Table B, but each row in Table B points to only one in Table A.
-- Customer → Orders
-- A customer can place multiple orders, but each order belongs to one customer
-- can have duplicates

-- many to many
CREATE TABLE MOVIES (
    movie_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    year INT NOT NULL,
    director VARCHAR(100) NOT NULL,
    genre VARCHAR(100) NOT NULL
);

CREATE TABLE Person (
    person_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    age INT,
    email VARCHAR(255),
    gender VARCHAR(100),
    country VARCHAR(100)
);

CREATE TABLE Comment (
    comment_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    comment_content TEXT NOT NULL,
    movie_id INT NOT NULL,
    person_id INT NOT NULL,
    FOREIGN KEY (movie_id) REFERENCES MOVIES(movie_id),
    FOREIGN KEY (person_id) REFERENCES Person(person_id)
);
```

-- four main categories of SQL commands  
-- 🔹 1. DDL (Data Definition Language)  
-- Defines the structure of the database (tables, schemas, indexes, etc.).  
-- Automatically commits (changes can’t be rolled back).  
-- Examples:  
-- CREATE TABLE employees (id INT, name VARCHAR(50));
-- ALTER TABLE employees ADD salary DECIMAL(10,2);  
-- DROP TABLE employees;  
-- TRUNCATE TABLE employees;  
-- Think of DDL as "designing the blueprint".

-- 🔹 2. DML (Data Manipulation Language)  
-- Deals with the data inside tables.  
-- Can be rolled back (undo changes if needed).  
-- Examples:  
-- INSERT INTO employees VALUES (1, 'Alice', 5000);  
-- UPDATE employees SET salary = 6000 WHERE id = 1;  
-- DELETE FROM employees WHERE id = 1;  
-- SELECT \* FROM employees;  
-- DML is about "working with the actual data".

-- 🔹 3. DCL (Data Control Language)  
-- Controls permissions and access to the database.  
-- Examples:  
-- GRANT SELECT, INSERT ON employees TO user1;  
-- REVOKE INSERT ON employees FROM user1;  
-- DCL is about "who can do what".

-- 🔹 4. TCL (Transaction Control Language)  
-- Manages transactions (a group of SQL operations treated as a single unit).
-- Ensures ACID properties (Atomicity, Consistency, Isolation, Durability).  
-- Examples:  
-- BEGIN; -- or START TRANSACTION  
-- UPDATE employees SET salary = salary + 500;  
-- COMMIT; -- save changes  
-- ROLLBACK; -- undo changes  
-- SAVEPOINT sp1;  
-- ROLLBACK TO sp1;  
-- TCL is about "safely handling multiple changes".

---
