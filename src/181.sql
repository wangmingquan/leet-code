# Write your MySQL query statement below
select e1.Name Employee from Employee e1 left join Employee e2
on e1.ManagerId = e2.Id
where e1.Salary > e2.Salary
