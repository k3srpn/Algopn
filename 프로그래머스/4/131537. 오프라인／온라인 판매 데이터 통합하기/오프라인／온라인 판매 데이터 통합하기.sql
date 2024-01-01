WITH totalSale as (
    SELECT sales_amount, product_id, user_id, sales_date
    FROM online_sale
    WHERE 1=1
    AND sales_date < '2022-04-01'
    AND sales_date >= '2022-03-01'
    UNION ALL
    SELECT sales_amount, product_id, NULL as user_id, sales_date
    FROM offline_sale
    WHERE 1=1
    AND sales_date < '2022-04-01'
    AND sales_date >= '2022-03-01'
)

SELECT DATE_FORMAT(SALES_DATE,'%Y-%m-%d'), product_id, user_id, sales_amount
FROM totalSale
ORDER BY sales_date asc, product_id asc, user_id asc