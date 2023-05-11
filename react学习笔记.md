## React特点：

1. 采用<font color='red'>组件化</font>模式、<font color='red'>声明式</font>编码，提高开发效率及组件复用率
2. 在React Native中可以使用React语法进行移动端开发
3. 采用虚拟DOM+Diffing算法，减少与真实DOM的交互

## 虚拟DOM：

1. 本质是object类型的对象（一般对象）
2. 虚拟DOM属性比真实DOM属性少
3. 虚拟DOM最终会被React转化为真实DOM

## JSX语法规则：

1. 定义虚拟DOM时，不要写引号
2. 标签中混入js表达式时要用{}
3. 样式的类名使用 className
4. 内联样式使用：style={{ color: 'red'}}
5. 必须有一个根标签

```react
const ClassName = 'titleAAA'
const option = '2023'
const VDOM = (<p className="name" id={ClassName.toLowerCase()}>
        	< span> {option} < /span>
    	</p>)
ReactDOM.render(VDOM, document.getElementById('box'))
```

## 函数式组件、类组件

## 字符型ref缺点

1. 效率低

## 高阶函数

```react
/*
如果一个函数符合下面2个规范中的任何一个，那么该函数就是高阶函数
   1. 若A函数，接收的参数是一个函数，那么A函数就称之为高阶函数
   2. 若A函数，调用的返回值依然是一个函数，那么A函数就称之为高阶函数

 函数的柯里化：通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式
*/
```

