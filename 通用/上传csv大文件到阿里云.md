# 上传录音文件到阿里云

![image-20230410174206453](C:\Users\刘伟华\Documents\temp\github-md\通用\4.10.assets\image-20230410174206453.png)







```

const file = {
            originalname: originalName,
            mimetype: 'audio/x-mpeg',
            size: 0,
            buffer: Buffer.from(res.data),
          };
          const fileTime = moment(new Date(param.End)).format('YYYYMMDD');
          const dto: UploadFileDto = {
            parentId: 0,
            path: `call_recording/${fileTime}`,
          };
          
          
          

let fileName = `${moment().format('YYYYMMDD')}/${imageUuid}`;
    if (isString(dto.path)) {
      fileName =
        dto.path[dto.path.length - 1] === '/'
          ? `${dto.path}${fileName}`
          : `${dto.path}/${fileName}`;
    }
    const nameArray = file.originalname.split('.');
    const extName = nameArray[nameArray.length - 1];
// 上传到阿里云OSS
    const uploadFile = UploadFileFactory.createUploadFile(
      OssUploadRecordFileUtils,
      file,
      fileName,
      extName,
      this,
    );
    
    // 上传图片
    await uploadFile.save();
```

system.service.ts





```
https://bmsapi.zhimeiguoji.cn/v1/user/allUserList?orderBy=distributeTime&order=DESC&pageIndex=1&pageSize=5000&userId=&realName=&userCategory=&dataType=&belongEmp=&status=&userSource=&specialConditions=&fanTypeId=&fansSource=&createdBy=&startTime=&endTime=&createdTimeStart=&createdTimeEnd=&distributeEmp=&deptId=&shareType=&belongDepartmentISnull=false&startDistributeTime=&endDistributeTime=&startOrderTime=2022-12-31T16:00:00.000Z&endOrderTime=2023-04-10T15:59:59.000Z&oneFpstartOrderTime=&oneFpendOrderTime=
```



```
RangeError: Maximum call stack size exceeded
```





```
update customer_order_score set employee_id = 1081,employee_name='JT00002'
where id = 51476;
```



```
-- 修改雷超的
update customer_order_score set employee_id = 1085,employee_name='JT00006',employee_real_name='雷超'
where id = (2036082,2036083,2036080);
```



```
-- 张吉梅
update customer_order_score set employee_id = 1081,employee_name='JT00002',employee_real_name='张吉梅'
where id = 2038298;
```



```
employee_real_name

employee_name


employee_id
```



```
-- 张吉梅
update customer_order_employee_score set employee_id = 1081,employee_name='JT00002',employee_real_name='张吉梅'
where id = 279988;
```

```
-- 修改雷超的
update customer_order_employee_score set employee_id = 1085,employee_name='JT00006',employee_real_name='雷超'
where id in (266236,266234,266230);

```



```
{
  res: {
    status: 200,
    statusCode: 200,
    statusMessage: 'OK',
    headers: {
      server: 'AliyunOSS',
      date: 'Tue, 11 Apr 2023 04:03:24 GMT',
      'content-type': 'application/xml',
      'content-length': '326',
      connection: 'keep-alive',
      'x-oss-request-id': '6434DC0B5784FA35324F445B',
      etag: '"2BA2C79B0F21724C3EF169586E4E2F07-145"',
      'x-oss-hash-crc64ecma': '15653451169983098890',
      'x-oss-server-time': '126'
    },
    size: 326,
    aborted: false,
    rt: 139,
    keepAliveSocket: true,
    data: <Buffer 3c 3f 78 6d 6c 20 76 65 72 73 69 6f 6e 3d 22 31 2e 30 22 20 65 6e 63 6f 64 69 6e 67 3d 22 55 54 46 2d 38 22 3f 3e 0a 3c 43 6f 6d 70 6c 65 74 65 4d 75 ... 276 more bytes>,
    requestUrls: [
      'http://zmgjtest.oss-cn-guangzhou.aliyuncs.com/exampledir/exampleobject.csv?uploadId=ED02AB7A495142F2B4AA1BF6B3C0E1CA'
    ],
    timing: null,
    remoteAddress: '8.134.16.246',
    remotePort: 80,
    socketHandledRequests: 30,
    socketHandledResponses: 30
  },
  bucket: 'zmgjtest',
  name: 'exampledir/exampleobject.csv',
  etag: '"2BA2C79B0F21724C3EF169586E4E2F07-145"'
}
```

```
{
  res: {
    status: 200,
    statusCode: 200,
    statusMessage: 'OK',
    headers: {
      server: 'AliyunOSS',
      date: 'Tue, 11 Apr 2023 04:04:20 GMT',
      'content-type': 'application/xml',
      'content-length': '326',
      connection: 'keep-alive',
      'x-oss-request-id': '6434DC448D66F83738A32113',
      etag: '"2BA2C79B0F21724C3EF169586E4E2F07-145"',
      'x-oss-hash-crc64ecma': '15653451169983098890',
      'x-oss-server-time': '74'
    },
    size: 326,
    aborted: false,
    rt: 87,
    keepAliveSocket: true,
    data: <Buffer 3c 3f 78 6d 6c 20 76 65 72 73 69 6f 6e 3d 22 31 2e 30 22 20 65 6e 63 6f 64 69 6e 67 3d 22 55 54 46 2d 38 22 3f 3e 0a 3c 43 6f 6d 70 6c 65 74 65 4d 75 ... 276 more bytes>,
    requestUrls: [
      'http://zmgjtest.oss-cn-guangzhou.aliyuncs.com/exampledir/exampleobject.csv?uploadId=69C5124E78604E28994EE3C0ED45CA40'
    ],
    timing: null,
    remoteAddress: '8.134.16.246',
    remotePort: 80,
    socketHandledRequests: 34,
    socketHandledResponses: 34
  },
  bucket: 'zmgjtest',
  name: 'exampledir/exampleobject.csv',
  etag: '"2BA2C79B0F21724C3EF169586E4E2F07-145"'
}
```









```
 // If you use "await", code must be inside an asynchronous function:
    (async () => {
      
          let length = data.length;
          if(data.length>100000){
            length = Math.ceil(data.length / 100000);
          }
          // 示例用法
          const chunkedArray = this.chunkArray(data, length);
          let csvs = ''
          for (const data of chunkedArray) {
            
            const csv = new ObjectsToCsv(data);
      
            // Save to file:
            // await csv.toDisk('./test1.csv', { allColumns: true,append: true });
      
            const hehe = await csv.toString();
            csvs+=hehe;

              

          }

          const file = {
            originalname: 'test1.csv',
            mimetype: 'text/plain',
            size: 0,
            buffer: Buffer.from(csvs),
          };
          const dto: UploadFileDto = {
            parentId: 0,
            path: `csv_files`,
          };
          // 上传到阿里云OSS
          /* const upload = await this.systemService.uploadFileCSV(
            file,
            dto,
            'system',
          ); */


      

    

      // Return the CSV file as string:
       // console.log(hehe);
    })();
```



```
 const dto = new GetCustomerOrderDto();
      Object.assign(dto, data);
      (dto as any).pageSize = Number.MAX_SAFE_INTEGER;
      const result = await this.getCustomerOrderList(
        dto,
        employeeInfo,
        CustomerOrderStatic.CUSTOMER_ORDER_ORDER_COORDINATOR,
      );
```

```
GetAllUserListDto
```



```
async uploadFileCSV(
    file: {
      originalname: string;
      mimetype: string;
      size: number;
      buffer: Buffer;
    },
    dto: UploadFileDto,
    employeeName: string,
  ): Promise<{ id: number; name: string; url: string; preview: string }> {
    // 校验父级目录
    const parentPath = await Storage.findOne({
      id: dto.parentId,
      type: CommonStatic.STORAGE_TYPE_PATH,
    });
    if (dto.parentId && !parentPath) {
      throw new CommonException(
        10004,
        {},
        ApiReturnMsg.API_STORAGE_PARENT_NOT_EXIST,
      );
    }
    // 写文件
    const imageUuid = uuid.v1();
    let fileName = `${moment().format('YYYYMMDD')}/${imageUuid}`;
    if (isString(dto.path)) {
      fileName =
        dto.path[dto.path.length - 1] === '/'
          ? `${dto.path}${fileName}`
          : `${dto.path}/${fileName}`;
    }
    const nameArray = file.originalname.split('.');
    const extName = nameArray[nameArray.length - 1];
    // 查询上传方式
    const storageType = await this.getSettingRawValue('STORAGE_TYPE');
    let uploadFile = null;
   if (storageType === 'OSS') {
      // 上传到阿里云OSS
      uploadFile = UploadFileFactory.createUploadFile(
        OssUploadFileUtils,
        file,
        fileName,
        extName,
        this,
      );
    } else {
      throw new CommonException(1000, '上传方式未指定，请检查系统配置');
    }
    // 上传图片
    // await uploadFile.save();
    // 示例用法
    const res = await uploadFile.multipartUpload();
    // 写数据库
    const storage = new Storage();
    if (parentPath) {
      storage.parent = parentPath;
    }
    // 检查文件名是否重复,重复则用uuid作为名字
    const checkStorage = await Storage.findOne({
      name: file.originalname,
      parent: storage.parent ? storage.parent : null,
      createdBy: employeeName,
    });
    storage.name = checkStorage ? `${imageUuid}.${extName}` : file.originalname;
    storage.mime = file.mimetype;
    storage.ext = extName;
    storage.size = file.size;
    storage.pixel = '';
    if (storage.mime.startsWith('text')) {
      // const size = imageSize(file.buffer as Buffer);
      // storage.pixel = `${size.width}*${size.height}`;
    }
    .0
    storage.hash = await this.commonUtils.createFileHash256(file.buffer);
    storage.path = `${fileName}.${extName}`;
    storage.url = `${fileName}.${extName}`;
    storage.protocol = 'http://';
    if (storage.mime.startsWith('image')) {
      storage.type = 0;
      storage.cover = storage.url;
    } else if (storage.mime.startsWith('video')) {
      storage.type = 3;
      storage.cover = CommonStatic.STORAGE_VIDEO_IMAGE;
    } else {
      storage.type = 1;
      storage.cover = CommonStatic.STORAGE_FILE_IMAGE;
    }
    storage.priority = 0;
    storage.sort = 50;
    storage.isDefault = 0;
    storage.createdBy = employeeName;
     await storage.save(); 
    // 查询文件路径
    const storageBaseUrl = await this.getSettingRawValue('STORAGE_BASE_URL');
    const storageBaseUrlStyle = await this.getSettingRawValue(
      'STORAGE_PREVIEW_STYLE',
    );
    return {
      id: storage.id,
      name: storage.name,
      url: storageBaseUrl + storage.url,
      preview: storageBaseUrl + storage.url + storageBaseUrlStyle,
      // preview: storage.type === CommonStatic.STORAGE_TYPE_IMAGE ?
      //     this.storageConfig.STORAGE_PREVIEW_URL + storage.cover + this.storageConfig.STORAGE_PREVIEW_STYLE : undefined
    };
  }
```



\



```
// 开始分片上传。
  async  multipartUpload() {
    if (!this.file) {
        console.error('没有文件');
        throw new CommonException(10004, {});
    }
    await this.initOSS();
    const path = require("path");
    const progress = (p, _checkpoint) => {
        // Object的上传进度。
        console.log(p); 
        // 分片上传的断点信息。
        console.log(_checkpoint); 
      };
      
      

      try {
          // 依次填写Object完整路径（例如exampledir/exampleobject.txt）和本地文件的完整路径（例如D:\\localpath\\examplefile.txt）。Object完整路径中不能包含Bucket名称。
          // 如果本地文件的完整路径中未指定本地路径（例如examplefile.txt），则默认从示例程序所属项目对应本地路径中上传文件。

          // this.file.buffer
          const result = await this.client.multipartUpload(`${this.fileName}.${this.fileExt}`, this.file.buffer, {
              progress,
              // headers,
              // 指定meta参数，自定义Object的元信息。通过head接口可以获取到Object的meta数据。
              meta: {
                  year: 2023,
                  people: 'test',
              },
          });
          //   console.log(result);
          // 填写Object完整路径，例如exampledir/exampleobject.txt。Object完整路径中不能包含Bucket名称。
          const head = await this.client.head(`${this.fileName}.${this.fileExt}`);
          console.log(head);
      } catch (e) {
          // 捕获超时异常。
          if (e.code === 'ConnectionTimeoutError') {
              console.log('TimeoutError');
              // do ConnectionTimeoutError operation
          }
          console.log(e);
      }
  }
  
```





```
http://192.168.9.100/v1/user/exportAllUserByfilter?orderBy=distributeTime&order=DESC&pageIndex=1&pageSize=10&userId=&realName=&userCategory=&dataType=&belongEmp=&status=&userSource=&specialConditions=&fanTypeId=&fansSource=&createdBy=&startTime=&endTime=&createdTimeStart=&createdTimeEnd=&distributeEmp=&deptId=&shareType=&belongDepartmentISnull=false&startDistributeTime=&endDistributeTime=&startOrderTime=2023-01-11T08:11:39.833Z&endOrderTime=2023-04-11T08:11:39.833Z&oneFpstartOrderTime=&oneFpendOrderTime=
```



```
订单号2037761  SF1615474367901  何东梅  JT
订单号2037721  SF1647278546373  马丽   MJ  
快递号更改@~ 
```



```
const progress = (p, _checkpoint) => {
        // Object的上传进度。
        console.log(p); 
        // 分片上传的断点信息。
        console.log(_checkpoint); 
      };
```



```
oss-download-file.utils.ts
```



```
// 任务620 录音上传到私有bucket JackFung 20211229
    const accessKeyId = await this.systemService.getSettingRawValue(
      'OSS_ACCESS_KEY_ID_RECORD',
    );
    const accessKeySecret = await this.systemService.getSettingRawValue(
      'OSS_ACCESS_KEY_SECRET_RECORD',
    );
    // const bucket = await this.systemService.getSettingRawValue('OSS_BUCKET'); //OSS_BUCKET_RECORD
    const bucket = await this.systemService.getSettingRawValue(
      'OSS_BUCKET_RECORD',
    );
    // const region = await this.systemService.getSettingRawValue('OSS_REGION'); //OSS_REGION_RECORD
    const region = await this.systemService.getSettingRawValue(
      'OSS_REGION_RECORD',
    );
```



```

private ossDownloadFileUtils: OssDownloadFileUtils,
const curl = await this.ossDownloadFileUtils.getSignatureUrl(record.fileUrl);
      // 上传错了 或者没找到 
      if (curl == '404') {
        if(call.recordFile.indexOf('.mp3') == -1){call.recordFile = ZmCrypt.getSingleton().zmDecrypt(call.recordFile); }
        url = `${call.fileServer}/${call.recordFile}`
      }else{
        url = curl;
      }
```



```
async getSignatureUrl(fileName: string): Promise<any> {
    await this.initOSS();
    // 判断文件是否存在
    try {
      const hasFile = await this.client.head(fileName);
    } catch (error) {
      return '404'
    }
    const url = this.client.signatureUrl(fileName, {expires: 3600});
    return url;
  }
```



```
getAllUserByfilter


{
            empId:employeeInfo.id,
            progress:p,
        }
```

