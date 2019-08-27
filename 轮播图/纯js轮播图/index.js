//模拟服务器返回的数据
var res = {
	data: [
		{
			picUrl:'./imgs/img1.jpg',
			desc:'this is pic 1',
			href:'https://www.baidu.com'
		},
		{
			picUrl:'./imgs/img2.jpg',
			desc:'this is pic 2',
			href:'https://www.taobao.com'
		},
		{
			picUrl:'./imgs/img3.jpg',
			desc:'this is pic 3',
			href:'https://www.tmall.com'
		},
		{
			picUrl:'./imgs/img4.jpg',
			desc:'this is pic 4',
			href:'https://www.jd.com'
		},
		{
			picUrl:'./imgs/img5.jpg',
			desc:'this is pic 5',
			href:'https://www.vip.com'
		}
	]
};

/**
 * swiper 参数设置
 *
 * 图片的参数集合
 * picLists: Array
 *
 * 图片的item项
 * picLists.item: Object = {picUrl, desc, href} 
 * picUrl: 图片地址
 * desc: 图片说明 
 * href: 图片链接地址
 * 
 * 
 * @type {Object}
 */
var swiperOptions = {
	el: 'swiper',
	picLists: res.data,
	width: 500,
	height: 250,
	autoplay: true,
	interval: 5000,
	duration: 1000
};
new Swiper(swiperOptions);





