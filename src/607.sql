# Write your MySQL query statement below
select s.name
from SalesPerson s
where s.sales_id NOT IN(
  select o.sales_id
  from orders o
  left join
  company c
  ON o.com_id = c.com_id
  where c.name = 'RED'
)
