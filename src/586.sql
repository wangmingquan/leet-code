# Write your MySQL query statement below
select customer_number
from orders
group by customer_number
order by COUNT(*) desc
limit 1;
