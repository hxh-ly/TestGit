## 简介

1. ```java
   <!-- https://mvnrepository.com/artifact/org.springframework/spring-webmvc -->
   <dependency>
       <groupId>org.springframework</groupId>
       <artifactId>spring-webmvc</artifactId>
       <version>5.2.0.RELEASE</version>
   </dependency>
   
   ```

   

## 组成和拓展

## **ioc**

MVC 

controler

dao 

  ![image-20200921094425791](C:\Users\可爱的小栩\AppData\Roaming\Typora\typora-user-images\image-20200921094425791.png)



==！：加客户需求业务得再**userdaoimpl**加==

service

==set动态决定值注入==

![image-20200921095531793](C:\Users\可爱的小栩\AppData\Roaming\Typora\typora-user-images\image-20200921095531793.png)

![image-20200921095800303](C:\Users\可爱的小栩\AppData\Roaming\Typora\typora-user-images\image-20200921095800303.png)

​					前：程序主动创建对象  

​					后： set注入程序被动接受对象

![image-20200921100824898](C:\Users\可爱的小栩\AppData\Roaming\Typora\typora-user-images\image-20200921100824898.png)

### 本质：获取依赖对象的方式转变了

### 思想：

1. 请人吃饭，这套程序是你写好菜单买菜，客人来了自己把菜炒好。
2. 炒菜这件事，不再由自己去做，委托给第三方___餐厅。 

## ioc创建对象的方式

![image-20200921112240650](C:\Users\可爱的小栩\AppData\Roaming\Typora\typora-user-images\image-20200921112240650.png)

### 	配置文件加载bean就实例化了（无参测试）