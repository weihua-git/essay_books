

## 查询的





![image-20230406161436177](C:\Users\刘伟华\Documents\temp\github-md\通用\4.6.assets\image-20230406161436177.png)



## 导出的

![image-20230406161607178](C:\Users\刘伟华\Documents\temp\github-md\通用\4.6.assets\image-20230406161607178.png)





```
query: select count(*) as orderCount, newOrder.id as id from customer_order oldOrder inner join customer_order newOrder on oldOrder.user_id = newOrder.user_id and oldOrder.is_exchange_order = 0 and oldOrder.deleted_time is null  and oldOrder.created_time < newOrder.created_time and oldOrder.order_status <> 14 where newOrder.id in (?) group by newOrder.id -- PARAMETERS: [[2000524]]


select count(*) as orderCount, newOrder.id as id from dm_his_data_product_order oldOrder inner join customer_order newOrder on oldOrder.customer_id = newOrder.user_id and oldOrder.order_date < newOrder.created_time and oldOrder.status <> 14 where newOrder.id in (?)  group by newOrder.id
```





## 基础sql

```sql
   select temp.`order_id` from (
   SELECT `order`.`id` AS `order_id`, `order`.`real_collect_amount` AS `order_real_collect_amount` FROM `customer_order` `order` WHERE ( 1 = 1 AND `order`.`order_status` in (1,2,3,5,6,7,14,15) AND `order`.`created_time` >= "2023-02-28T16:00:00.000Z" ) AND ( `order`.`deleted_time` IS NULL ) ORDER BY `order`.`id` DESC LIMIT 1000
    ) as  temp
```





``` sql
SELECT `UserProfile`.`user_id` AS `UserProfile_user_id`, `UserProfile`.`real_name` AS `UserProfile_real_name` FROM `user_profile` `UserProfile` WHERE ( `UserProfile`.`user_id` IN (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ) AND ( `UserProfile`.`deleted_time` IS NULL )
```



```sql
SELECT `noworder`.`id` AS `noworder_id`, `noworder`.`origin_customer_order_id` as originCustomerOrderId FROM `customer_order` `noworder` WHERE ( `noworder`.`origin_customer_order_id` in (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ) AND ( `noworder`.`deleted_time` IS NULL ) 
```

