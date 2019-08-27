animation属性是如下属性的一个简写属性形式: 
+ animation-name    
动画的名字，keyframes的名字
+ animation-duration    
动画从开始到结束的总时长
+ animation-timing-function     
动画曲线
+ animation-delay   
动画从多少时间后开始
+ animation-iteration-count     
    + infinite
        无限循环播放动画.
    + <number>
        动画播放的次数 **不可为负值**. 可以用小数定义循环(0.5 将播放动画到关键帧的一半（from 0 ~ 50%).
+ animation-direction   
    + normal：默认值,从动画开始到结束在到起始状态
    + alternate：动画交替反向运行，反向运行时，动画按步后退，同时，带时间功能的函数也反向，比如，ease-in 在反向时成为ease-out。计数取决于开始时是奇数迭代还是偶数迭代
    + reverse：反向运行动画，每周期结束动画由尾到头运行。
    + alternate-reverse：反向交替， 反向开始交替

+ animation-fill-mode   
none：默认值，也就是在动画结束之后不做任何改动    
forwards：目标保持动画最后一帧的样式，最后一帧是哪个取决于animation-direction和 animation-iteration-count  
backwards：动画采用相应第一帧的样式，保持 animation-delay   
both：动画将会执行 forwards 和 backwards 执行的动作。

#### 监听效果
首先布局基本布局,再给eye添加动画,使用animation-iteration-count：infinite来无限循环动画