# myqsl 启动

```bash
d:
```

``` bash
cd D:\install\mysql-8.0.31-winx64\bin
```

```sql
mysqld --console
```



```SQL





{
    "type": "mysql",
    "host": "192.168.9.90",
    "port": 3306,
    "username": "jufeng_ad_wecom",
    "password": "xBn23N6x72sFKjik",
    "database": "jufeng_ad_wecom",
    "entities": ["src/entity/*.js"],
    "migrations": [
        "src/migration/*{.ts,.js}"
      ],
    "cli": {
        "migrationsDir":  "src/migration"
    },
    "autoSchemaSync": false,
    "logging": true
  }
```





## 更新存储过程

``` sql
DROP PROCEDURE IF EXISTS `db_student`.`user_stat_proc`


```



```sql
恢复JT00006/雷超JT商务部一部的业绩

--  47074 删除  47064 恢复 恢复JT00006/雷超JT商务部一部的业绩
-- update customer_order_score set  deleted_time = now() where id = 47074;
-- update customer_order_score set  deleted_time = null where id = 47064;
```



![image-20230413191028226](%E9%80%9A%E7%94%A8%EF%BC%88%E4%BE%8B%E5%A6%82mysql%E5%90%AF%E5%8A%A8%E7%AD%89%EF%BC%89.assets/image-20230413191028226.png)



## nginx 启动 

tasklist | findstr "nginx.exe"

taskkill /F /PID 21068

taskkill /F /IM nginx.exe

![image-20230413191000217](%E9%80%9A%E7%94%A8%EF%BC%88%E4%BE%8B%E5%A6%82mysql%E5%90%AF%E5%8A%A8%E7%AD%89%EF%BC%89.assets/image-20230413191000217.png)

## test.html 测试链接scokio

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.js"></script>
<script>
  const l = console.log;
  // 'http://192.168.9.100/api/schedule'
  let socket = io('http://192.168.9.100');
  socket.on('connect', function() {
    console.log('连接成功');
    // 登录
    socket.emit('login', {
      token: '233a39c0-d921-11ed-881b-8b6225d15c1b',
    });

    socket.emit('transmit_by_radio_message_progress', {
      empId:92
    });

   


  });

  /**
   * 接收登录结果
   */
  socket.on('login', data => {
    l('登录结果：', data);
  });

  socket.on('send_message_progress_by_export_all_user', data => {
    console.log('asdasd ', data);
  });

 
  
  /**
   * 接收新消息API
   */
  socket.on('new_message', data => {
    l('收到新的消息：', data);
  });

 
</script>

```



```
if(dto.hasOperatio || dto.hasOperatio === 0)share.hasOperatio = dto.hasOperatio;
```



```
12138开头的短信
```



```
employee.disabled
```





## git 请求所有



分页有问题

操作日期有问题

接口调用有问题 没有Dto

查询已完成有问题





10075



10043





![image-20230413184632768](%E9%80%9A%E7%94%A8.assets/image-20230413184632768.png)