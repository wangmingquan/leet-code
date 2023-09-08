# Write your MySQL query statement below
Select distinct Email
    From Person
    Where Email
    In (
        select Email
        from Person
        group by  Email
        having count(Email) > 1
    )
