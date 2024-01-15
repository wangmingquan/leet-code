# Write your MySQL query statement below
select MAX(num) AS num
from (
  select num
  from MyNumbers
  group by num
  HAVING count(num) = 1
) AS t;
