# 接口文档

## 目录：

## 1、获取首页分类数据

### 请求URL：
	http://localhost:4000/index_category

### 请求方式：
	GET

### 参数类型：
	无


## 2、获取商品分类列表

### 请求URL：
	http://localhost:4000/category

### 请求方式：
	GET

### 参数类型：
	无


## 3、获取一次性验证码

### 请求URL：
	http://localhost:4000/captcha

### 请求方式：
	GET


## 4、用户名密码登陆

### 请求URL：
	http://localhost:4000/login_pwd

### 请求方式：
	POST

### 参数类型: 请求体

	|参数		|是否必选 |类型     |说明
	|name       |Y       |string   |用户名
	|pwd        |Y       |string   |密码
	|captcha    |Y       |string   |图片验证码


## 5、发送短信验证码

### 请求URL：
	http://localhost:4000/sendcode

### 示例：
[http://localhost:4000/sendcode?phone=13716962779](http://localhost:4000/sendcode?phone=13716962779)

### 请求方式：
	GET

### 参数类型: query

	|参数		|是否必选 |类型     |说明
	|phone       |Y       |string   |手机号

## 6、手机号验证码登陆

### 请求URL：
	http://localhost:4000/login_sms

### 请求方式：
	POST

### 参数类型: 请求体

	|参数		|是否必选 |类型     |说明
	|phone       |Y       |string   |手机号
	|code        |Y       |string   |验证码


### 7、自动登陆

#### 请求URL：
	http://localhost:4000/auto_login

#### 请求方式：
	GET
