transition: 要加动画的属性名 动画持续时间 动画曲线 多少时间后执行动画;
如：`transition: width 2s ease-in-out .1s;`

动画曲线timing-function的取值,可以是函数，也可以是关键词，具体如下：
+ cubic-bezier()
+ steps()
+ step-start
+ step-end
+ linear
+ ease 
+ ease-in-out
+ ease-in
+ ease-out

如：`transition: width 2s cubic-bezier(0.1, 0.7, 1.0, 0.1) .1s;`

###手风琴效果
我们首先布局基本布局，然后将内容区域高度设为0，超出部分隐藏，
然后给标题添加tabindex属性，让标题可以使用focus属性，给内容区域添加transition属性
当点击标题时，标题获得焦点，然后就可以改变内容区域的高度，并把超出部分设为滚动