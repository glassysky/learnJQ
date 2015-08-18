## 表单验证
input标签规则
```html
<input type="" name="" (required="required")>
```
| 内容            | value           | name     |
| ----------------|:---------------:| --------:|
| 姓名            | text            | name     |
| 昵称            | text            | nickname |
| 性别            | radio           | sex      |
| 学校（名称）    | text            | school   |
| 院系            | text            | college  |
| 专业            | text            | major    |  
| 公司名称        | text            | company  |

select标签规则
```html
<select name="" (required="required")>
  ...
</select>
```
| 内容            | name        |
| ----------------| -----------:|
| 家乡（省）      | hometown-P  |
| 家乡（市）      | hometown-C  |
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

textarea标签规则
```html
<textarea required>
```