## 表单验证
###1.input标签规则
```html
<input type="" name="" (required="required")>
```
| 内容            | value           | name        |
| ----------------|:---------------:| -----------:|
| 姓名            | text            | name        |
| 昵称            | text            | nickname    |
| 性别            | radio           | sex         |
| 学校（名称）    | text            | school      |
| 院系            | text            | college     |
| 专业            | text            | major       |
| 公司名称        | text            | company     |
| 个性签名        | text            | motto       |
| 邮箱            | email           | email       |
| 用户名          | text            | username    |
| 密码            | password        | prepass     |
| 新密码          | password        | newpass     |
| 确认密码        | password        | confirmpass |
| 手机号          | tel             | tel         |
| 从事职业        | text            | work        |
| 个人简介        | text            | intro       |
| 验证码          | text            | code        |
| 证件号          | text            | idcard      |

###2.select标签规则
```html
<select name="" (required="required")>
  ...
</select>
```
| 内容            | name        |
| ----------------| -----------:|
| 家乡（省）      | hometown-P  |
| 家乡（市）      | hometown-C  |
| 所在地（地区）  | nowAt-L     |
| 所在地（省）    | nowAt-P     |
| 所在地（市）    | nowAt-C     |
| 生日（年）      | birth-Y     |
| 生日（月）      | birth-M     |
| 生日（日）      | birth-D     |
| 学校（入学年份）| enter-Y     |
| 行业            | profession  |
| 职位            | possition   |
| 工作时间始（年）| begin-Y     |
| 工作时间始（月）| begin-M     |
| 工作时间末（年) | end-Y       |
| 工作时间末（月) | end-M       |
| 情感状态        | status      |
| 证件类型        | papers      |

###3.textarea标签规则
```html
<textarea (required)>
```
