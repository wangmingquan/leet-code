# Write your MySQL query statement below
select class
from Courses
group by class
HAVING count(student) >= 5
