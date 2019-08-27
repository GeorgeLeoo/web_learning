x轴相当于width, y轴相当于高度

####平移translate
`transform: translate(x轴位移量, y轴位移量);`

`transform: translate(x轴位移量, y轴位移量, z轴位移量);`

`transform: translateX(x轴位移量);`

`transform: translateY(y轴位移量);`

`transform: translateZ(z轴位移量);`

####缩放scale
`transform: scale(x轴缩放倍数, y轴缩放倍数);`

`transform: scale(x轴缩放倍数, y轴缩放倍数, z轴缩放倍数);`

`transform: scaleX(x轴缩放倍数);`

`transform: scaleY(y轴缩放倍数);`

`transform: scaleZ(z轴缩放倍数);`

####旋转rotate
也是有x,y,z三个方向
1. `transform: rotate(旋转的圈数turn);`

如：`transform: rotate(0.3turn);`旋转0.3圈

2. `transform: rotate(旋转的角度deg);`

如：`transform: rotate(90deg);`旋转90度

3. `transform: rotate(旋转的梯度grad);`

如：`transform: rotate(45grad);`旋转45梯度

4. `transform: rotate(旋转的弧度);`

如：`transform: rotate(45rad);`旋转45弧度

####倾斜skew
只有x,y两个方向
`transform: skew(沿x轴的倾斜角度, 沿y轴的倾斜角度);`
skew的单位和rotate一样

如：`transform: skew(20deg, 30deg);`沿x轴的倾斜20度, 沿y轴的倾斜30度

也可以将各种动画组合起来,如:`transform: scale(2) rotate(90deg) translate(120px, 100px);`

#### 3D
在3d构图时，首先使用`transform-style`来转换成3D效果，接着使用`perspective`作为透视点来构建3D空间。
元素缩小的速率由 `perspective` 属性决定，取值越小，透视越深。
然后在使用`perspective-origin`来设置观察者的位置。默认透视值为观察者的中心，但是这并不总是适当的。