

```
https://bmsapi.zhimeiguoji.cn/v1/user/allUserList?orderBy=distributeTime&order=DESC&pageIndex=1&pageSize=5000&userId=&realName=&userCategory=&dataType=&belongEmp=&status=&userSource=&specialConditions=&fanTypeId=&fansSource=&createdBy=&startTime=&endTime=&createdTimeStart=&createdTimeEnd=&distributeEmp=&deptId=&shareType=&belongDepartmentISnull=false&startDistributeTime=&endDistributeTime=&startOrderTime=&endOrderTime=&oneFpstartOrderTime=&oneFpendOrderTime=
```



```
 {
  id: 7020,
  name: 'asd.zip',
  url: 'http://zmgjtest-cdn.zhimeiguoji.cn/csv_files/20230412/db598a00-d8d7-11ed-8583-697844d4e392.zip',
  path: 'csv_files/20230412/db598a00-d8d7-11ed-8583-697844d4e392.zip'
}
```



```


写一个能重置export_all_user_byfilter:global_lock的接口


```





```
import { IsString, IsNumberString, IsOptional, IsIn } from 'class-validator';
import { GetPageDto } from '../../../common/dto/get-page.dto';

export class GetAllUserListDto extends GetPageDto {
  /** 客户ID */
  @IsOptional()
  @IsString({ message: '客户ID必须是整型' })
  userId: string;
  /** 姓名 */
  @IsOptional()
  @IsString({ message: '姓名字段必须是字符串类型' })
  realName: string;
  /** 客户分类 */
  @IsOptional()
  @IsString({ message: '客户分类字段必须是字符串类型' })
  userCategory: string;
  /** 资料类别 */
  @IsOptional()
  @IsString({ message: '资料类别字段必须是字符串类型' })
  dataType: string;
  /** 当前归属 */
  @IsOptional()
  @IsString({ message: '当前归属字段必须是字符串类型' })
  belongEmp: string;
  /** 状态 */
  @IsOptional()
  @IsString({ message: '状态字段必须是字符串类型' })
  status: string;
  /** 开始时间 */
  @IsOptional()
  @IsString({ message: '开始时间字段必须是字符串类型' })
  startTime: string;
  /** 结束时间 */
  @IsOptional()
  @IsString({ message: '结束时间字段必须是字符串类型' })
  endTime: string;
  /** 客户来源 */
  @IsOptional()
  @IsString({ message: '客户来源字段必须是字符串类型' })
  userSource: string;
  /** 特殊条件 */
  @IsOptional()
  @IsString({ message: '特殊条件字段必须是字符串类型' })
  specialConditions: string;
  /** 未跟进天数 */
  @IsOptional()
  @IsString({ message: '未跟进天数字段必须是字符串类型' })
  unRevisit: string;
  startUnrevisit: string;
  endUnrevisit: string;
  /** 进粉分类 */
  @IsOptional()
  @IsString({ message: '进粉分类必须是整型类型' })
  fanTypeId: string;
  /** 进粉渠道 */
  @IsOptional()
  @IsString({ message: '进粉渠道必须是字符串类型' })
  fansSource: string;
  /** 创建人 */
  @IsOptional()
  @IsString({ message: '创建人必须是字符串类型' })
  createdBy: string;
  /** 创建时间 开始 */
  @IsOptional()
  @IsString({ message: '创建开始时间必须是字符串类型' })
  createdTimeStart: string;
  /** 创建时间 结束 */
  @IsOptional()
  @IsString({ message: '创建结束时间必须是字符串类型' })
  createdTimeEnd: string;

  /** 分配人 */
  distributeEmp: string;

  /** 起始分配时间 */
  startDistributeTime: string;

  /** 截至分配时间 */
  endDistributeTime: string;
  @IsOptional()
  @IsString({ message: '部门ID必须是字符串类型' })
  deptId: string;

  /**归属人查询 */
  @IsOptional()
  @IsString({ message: '归属人必须是字符串类型' })
  belongEmployee: string;
  /** 消费总金额 */
  @IsOptional()
  startAmountSum: string;
  @IsOptional()
  endAmountSum: string;

  // 任务608 增加 筛选条件 客户的最后下单时间 By JackFung 20211206
  /** 最后下单时间 - 起始 */
  @IsOptional()
  startOrderTime: string;
  /** 最后下单时间 - 截止 */
  @IsOptional()
  endOrderTime: string;

  @IsOptional()
  oneFpstartOrderTime: string;
  /** 最后下单时间 - 截止 */
  @IsOptional()
  oneFpendOrderTime: string;

  /**M-700 资料类别 */share
  @IsOptional()
  @IsString({ message: '资料类型字段必须是字符串类型' })
  shareType: string;

  belongDepartmentISnull:string;

  guidePowderPassStatus: any;
  guidePowderType: any;

  
  @IsOptional()
  @IsIn(['id', 'distributeTime', ''], { message: '排序方式不正确' })
  private orderBy: 'id' | 'distributeTime' | '';
  @IsOptional()
  @IsIn(['ASC', 'DESC', ''], { message: '排序顺序不正确' })
  private order: 'ASC' | 'DESC';

  getOrderBy(): 'id' | 'distributeTime' {
    if (this.orderBy === 'id' || this.orderBy === 'distributeTime') {
      return this.orderBy;
    }
    return 'id';
  }

  getOrder(): 'ASC' | 'DESC' {
    if (this.order) {
      return this.order;
    }
    return 'DESC';
  }
}

```





## 监听

```
 const userService = app.get<UserService>(UserService);

  const redis = require('redis');

  // 创建 Redis 客户端
  const client = redis.createClient(config.redis);

  // 订阅名为 "testChannel" 的频道
  client.subscribe('export_all_user_byfilter');

  // 监听订阅事件
  client.on('subscribe', (channel, count) => {
    console.log(`Subscribed to channel ${channel}. Total number of subscriptions: ${count}.`);
  });

  // 监听消息事件
  client.on('message', async (channel, message) => {
    // userService.
    if(channel == 'export_all_user_byfilter'){
      console.log(`Received message "${message}" from channel ${channel}.`);
      const obj = JSON.parse(message)
      // await userService.exportAllUserByfilter(obj.dto,obj.employeeInfo);
    }
  });
  
  
  
  // 发布消息到名为 "testChannel" 的频道
    this.cache.client.publish('export_all_user_byfilter', JSON.stringify({dto,employeeInfo}), (err, res) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Message published successfully. Number of subscribers who received the message: ${res}.`);
      }
    });
```



```
 // 计算进度
  const progress = Math.floor((i / totalData) * 100);
```





# 监听的key



```
redis key 记录今天完成了第几次
`export_all_user_byfilter:emps_${employeeInfo.id}_finishes_numbers`
redis key 记录最后一次的url之类的信息
`export_all_user_byfilter:emps_${employeeInfo.id}`
redis key 记录最后一次的url进度
`export_all_user_byfilter:emps_${employeeInfo.id}_progress`
redis key 记录findAllUsersParallel的pageSize方便测试
`export_all_user_byfilter:global_every_pagesize`


全局是否打开锁
export_all_user_byfilter:global_lock

```

![image-20230413190407712](4.12.assets/image-20230413190407712.png)

```
 const params:any = {
        empId: employeeInfo.id,
        progress:0
     }
    await this.cache.set(`export_all_user_byfilter:emps_${employeeInfo.id}`,params,86400*30);
```



```
{
  id: 7024,
  name: '95f74fb0-d8fa-11ed-a0cb-0bd8e8e167a6.zip',
  url: 'http://zmgjtest-cdn.zhimeiguoji.cn/csv_files/20230412/95f74fb0-d8fa-11ed-a0cb-0bd8e8e167a6.zip',
  path: 'csv_files/20230412/95f74fb0-d8fa-11ed-a0cb-0bd8e8e167a6.zip'
}
```

```
if(this.progress>=100){
          this.progress = 99.99;
        }
```



```
// 通知前端通话已接通
      await this.eventsGateway.sendMessageToClient(
        agent.empId,
        CommonStatic.CALL_LINK_EVENT_PUSH,
        { isLink: true, callId: param.CallID },
      );
```







```
 // session 
  const redis = require('redis')
  const RedisStore = store(session);
  const redisClient = redis.createClient(config.redis)
 

  // redisClient.set('myKey', 'myValue');
  // redisClient.expire('myKey', 10);
 
  app.use(
    session({
      store: new RedisStore({ client: redisClient }),
      secret: CommonStatic.SECRET,
      cookie: { maxAge: 60 * 60 * 1000, httpOnly: true },
      resave: false,
      saveUninitialized: true,
    }),
  );
```



```
await this.cache.set(`export_all_user_byfilter:emps_${employeeInfo.id}_progress`,this.progress,86400*30);
```



```
profile.realName = this.zmcrypt.zmDecrypt(cust.customerName);
```



```
898， 918， 966 周五上午前全部修改完，并测试完 @·G· 。 同步到 新仓库。 周五中午切换到 新仓库开发。@Enigma.  
```



```
 componentType:
    | 'Textarea'
    | 'Label'
    | 'Input'
    | 'Select'
    | 'Radio'
    | 'Checkbox'
    | 'Employee'
    | 'Department'
    | 'RichText'
    | 'Uploader'
    | 'Switch'
    | 'Region'
    | 'DateTimePicker'
    | 'inputNumber';
```



```
 'Textarea',
      'Label',
      'Input',
      'Select',
      'Radio',
      'Checkbox',
      'Employee',
      'Department',
      'RichText',
      'Uploader',
      'Switch',
      'Region',
      'DateTimePicker',
      'inputNumber'
```





```
export_all_user_byfilter:emps_99_finishes_numbers_2023-04-12
```



