# Write your MySQL query statement below
select c.Name Customers from Customers c
left join Orders o on c.Id = o.CustomerId 
where o.CustomerId is null
