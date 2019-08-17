# Write your MySQL query statement below
SELECT p.FirstName, p.LastName, a.City, a.State FROM Person p LEFT JOIN Address a USING(PersonId)
