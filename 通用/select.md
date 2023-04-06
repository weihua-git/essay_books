



## 财务导出问题



```
/api/customerOrder/v1/finance/getCustomerOrderList?orderStatusList=&deliveryItemId=&expressNumber=&customerName=&startDate=&endDate=&pageIndex=1&pageSize=5000&groupId=&deptIds=&orderId=&userId=&dataType=&date[]=2023-04-03T16:00:00.000Z&date[]=2023-04-04T15:59:59.999Z&startShippingTime=2023-04-03T16:00:00.000Z&endShippingTime=2023-04-04T15:59:59.000Z&apiType=%E8%B4%A2%E5%8A%A1
请求方法: GET
```

```
orderStatusList: 
deliveryItemId: 
expressNumber: 
customerName: 
startDate: 
endDate: 
pageIndex: 1
pageSize: 5000
groupId: 
deptIds: 
orderId: 
userId: 
dataType: 
date[]: 2023-04-03T16:00:00.000Z
date[]: 2023-04-04T15:59:59.999Z
startShippingTime: 2023-04-03T16:00:00.000Z
endShippingTime: 2023-04-04T15:59:59.000Z
apiType: %E8%B4%A2%E5%8A%A1
```



```sql
SELECT `order`.`id` AS `order_id`, `order`.`real_collect_amount` AS `order_real_collect_amount` FROM `cust`order` WHERE ( 1 = 1 AND `order`.`order_status` in (?) AND `order`.`shipping_time` >= ? AND `order`.`shipping_time` <= ? ) AND ( `order`.`deleted_time` IS NULL ) ORDER BY `order`.`id` DESC LIMIT 5000 -- PARAMETERS: [[1,2,3,5,6,7,14,15],"2023-04-03T16:00:00.000Z","2023-04-04T15:59:59.000Z"]
query: SELECT COUNT(1) AS `cnt` FROM `customer_order` `order` WHERE ( 1 = 1 AND `order`.`order_status` in (?) AND `order`.`shipping_time` >= ? AND `order`.`shipping_time` <= ? ) AND ( `order`.`deleted_time` IS NULL ) -- PARAMETERS: [[1,2,3,5,6,7,14,15],"2023-04-03T16:00:00.000Z","2023-04-04T15:59:59.000Z"]
```



```
SELECT `order`.`disabled` AS `order_disabled`, `order`.`created_by` AS `order_created_by`, `order`.`created_time` AS `order_created_time`, `order`.`updated_by` AS `order_updated_by`, `order`.`updated_time` AS `order_updated_time`, `order`.`deleted_by` AS `order_deleted_by`, `order`.`deleted_time` AS `order_deleted_time`, `order`.`id` AS `order_id`, `order`.`order_sn` AS `order_order_sn`, `order`.`order_status` AS `order_order_status`, `order`.`user_id` AS `order_user_id`, `order`.`order_amount` AS `order_order_amount`, `order`.`order_discount` AS `order_order_discount`, `order`.`real_collect_amount` AS `order_real_collect_amount`, `order`.`deposit_money` AS `order_deposit_money`, `order`.`assign_delivery_item_id` AS `order_assign_delivery_item_id`, `order`.`pay_from` AS `order_pay_from`, `order`.`order_kind` AS `order_order_kind`, `order`.`order_times` AS `order_order_times`, `order`.`order_lab_times` AS `order_order_lab_times`, `order`.`org_id` AS `order_org_id`, `order`.`add_emp_id` AS `order_add_emp_id`, `order`.`app_emp_id` AS `order_app_emp_id`, `order`.`app_time` AS `order_app_time`, `order`.`lock_emp_id` AS `order_lock_emp_id`, `order`.`lock_time` AS `order_lock_time`, `order`.`notes` AS `order_notes`, `order`.`international_order` AS `order_international_order`, `order`.`customer_name` AS `order_customer_name`, `order`.`province_id` AS `order_province_id`, `order`.`city_id` AS `order_city_id`, `order`.`district_id` AS `order_district_id`, `order`.`address` AS `order_address`, `order`.`telephone` AS `order_telephone`, `order`.`address_id` AS `order_address_id`, `order`.`express_number` AS `order_express_number`, `order`.`shipping_status` AS `order_shipping_status`, `order`.`serial_number` AS `order_serial_number`, `order`.`is_processed` AS `order_is_processed`, `order`.`express_info` AS `order_express_info`, `order`.`express_time` AS `order_express_time`, `order`.`delivery_id` AS `order_delivery_id`, `order`.`shipping_time` AS `order_shipping_time`, `order`.`shipping_emp_id` AS `order_shipping_emp_id`, `order`.`delay_shipping_time` AS `order_delay_shipping_time`, `order`.`express_fee` AS `order_express_fee`, `order`.`service_charge` AS `order_service_charge`, `order`.`quality_audited_by` AS `order_quality_audited_by`, `order`.`quality_audited_time` AS `order_quality_audited_time`, `order`.`is_first_order` AS `order_is_first_order`, `order`.`score_data` AS `order_score_data`, `order`.`is_exchange_order` AS `order_is_exchange_order`, `order`.`origin_customer_order_id` AS `order_origin_customer_order_id`, `order`.`origin_order_exchange_id` AS `order_origin_order_exchange_id`, `order`.`is_direct_fill_order` AS `order_is_direct_fill_order`, `order`.`sign_delivery_time` AS `order_sign_delivery_time`, `order`.`confirm_delivery_time` AS `order_confirm_delivery_time`, `order`.`confirm_delivery_by` AS `order_confirm_delivery_by`, `order`.`is_first_sales` AS `order_is_first_sales`, `order`.`sales_line_order_times` AS `order_sales_line_order_times`, `exchange`.`id` AS `exchange_id`, `exchange`.`type` AS `exchange_type`, `exchange`.`status` AS `exchange_status`, `exchange`.`refund_time` AS `exchange_refund_time`, `exchange`.`receive_time` AS `exchange_receive_time`, `exchangeItem`.`id` AS `exchangeItem_id`, `exchangeItem`.`item_name` AS `exchangeItem_item_name`, `exchangeItem`.`number` AS `exchangeItem_number`, `exchangeItem`.`action_type` AS `exchangeItem_action_type`, `user`.`id` AS `user_id`, `dataType`.`id` AS `dataType_id`, `dataType`.`name` AS `dataType_name`, `department`.`org_title` AS `department_org_title`, `department`.`id` AS `department_id`, `assignDeliveryItem`.`id` AS `assignDeliveryItem_id`, `assignDeliveryItem`.`name` AS `assignDeliveryItem_name`, `assignDeliveryItem`.`phonetic` AS `assignDeliveryItem_phonetic`, `assignDeliveryItem`.`code` AS `assignDeliveryItem_code`, `assignDeliveryItem`.`type` AS `assignDeliveryItem_type`, `assignDeliveryItem`.`disabled` AS `assignDeliveryItem_disabled`, `assignDeliveryItem`.`created_by` AS `assignDeliveryItem_created_by`, `assignDeliveryItem`.`created_time` AS `assignDeliveryItem_created_time`, `assignDeliveryItem`.`updated_by` AS `assignDeliveryItem_updated_by`, `assignDeliveryItem`.`updated_time` AS `assignDeliveryItem_updated_time`, `assignDeliveryItem`.`deleted_by` AS `assignDeliveryItem_deleted_by`, `assignDeliveryItem`.`deleted_time` AS `assignDeliveryItem_deleted_time`, `assignDeliveryItem`.`duration_minute` AS `assignDeliveryItem_duration_minute`, `auditLog`.`created_by` AS `auditLog_created_by`, `auditLog`.`created_time` AS `auditLog_created_time`, `auditLog`.`id` AS `auditLog_id`, `auditLog`.`audit_type` AS `auditLog_audit_type`, `auditLog`.`result` AS `auditLog_result`, `auditLog`.`reason` AS `auditLog_reason`, `auditLogDept`.`org_title` AS `auditLogDept_org_title`, `auditLogDept`.`id` AS `auditLogDept_id`, `auditEmp`.`employee_name` AS `auditEmp_employee_name`, `auditEmp`.`id` AS `auditEmp_id`, `auditEmpProfile`.`real_name` AS `auditEmpProfile_real_name`, `auditEmpProfile`.`id` AS `auditEmpProfile_id`, `deliveryRoute`.`delivery_status` AS `deliveryRoute_delivery_status`, `deliveryRoute`.`id` AS `deliveryRoute_id` FROM `customer_order` `order` LEFT JOIN `customer_order_exchange` `exchange` ON `exchange`.`customer_order_id`=`order`.`id` AND (`exchange`.`deleted_time` IS NULL)  LEFT JOIN `customer_order_exchange_item` `exchangeItem` ON `exchangeItem`.`exchange_id`=`exchange`.`id` AND (`exchangeItem`.`deleted_time` IS NULL)  INNER JOIN `user` `user` ON `user`.`id`=`order`.`user_id` AND (`user`.`deleted_time` IS NULL)  LEFT JOIN `user_data_type` `dataType` ON `dataType`.`id`=`user`.`data_type_id` AND (`dataType`.`deleted_time` IS NULL)  LEFT JOIN `department` `department` ON `department`.`id`=`order`.`org_id` AND (`department`.`deleted_time` IS NULL)  LEFT JOIN `delivery_item` `assignDeliveryItem` ON `assignDeliveryItem`.`id`=`order`.`assign_delivery_item_id` AND (`assignDeliveryItem`.`deleted_time` IS NULL)  LEFT JOIN `customer_order_audit_log` `auditLog` ON `auditLog`.`customer_order_id`=`order`.`id` AND (`auditLog`.`deleted_time` IS NULL)  LEFT JOIN `department` `auditLogDept` ON `auditLogDept`.`id`=`auditLog`.`dept_id` AND (`auditLogDept`.`deleted_time` IS NULL)  LEFT JOIN `employee` `auditEmp` ON `auditEmp`.`employee_name`=`auditLog`.`created_by` AND (`auditEmp`.`deleted_time` IS NULL)  LEFT JOIN `employee_profile` `auditEmpProfile` ON `auditEmpProfile`.`employee_id`=`auditEmp`.`id` AND (`auditEmpProfile`.`deleted_time` IS NULL)  LEFT JOIN `customer_order_delivery_route` `deliveryRoute` ON `deliveryRoute`.`order_id`=`order`.`id` AND (`deliveryRoute`.`deleted_time` IS NULL) WHERE ( `order`.`id` in (?) ) AND ( `order`.`deleted_time` IS NULL ) ORDER BY `order`.`id` DESC
```



```
SELECT `order`.`id` AS `order_id`, `order`.`real_collect_amount` AS `order_real_collect_amount` 
FROM `customer_order` `order` WHERE ( 1 = 1 AND `order`.`order_status` in (1,2,3,5,6,7,14,15) 
AND `order`.`shipping_time` >= "2023-02-03T16:00:00.000Z" AND `order`.`shipping_time` <= "2023-04-04T15:59:59.000Z" ) 
AND ( `order`.`deleted_time` IS NULL ) 
ORDER BY `order`.`id` DESC LIMIT 1000
```



```
2038503
2038502
2038501
2038493
2038490
2038489
2038487
2038486
2038485
2038484
```





```
1695 ms 2816 ms
```







## 工单字段问题

```
alter table task_sheet_field add column real_name_organization varchar(1024)  null;

alter table task_template_field add column real_name_organization varchar(1024)  null;

select *  from `setting` where `key` = 'UPDATE_ORDER_SCORERATE';

SELECT * FROM task_template WHERE id = 10;

```









