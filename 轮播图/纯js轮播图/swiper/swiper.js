


var Swiper = (function(global) {

	function swiper(swiperOptions) {
		// console.log(options);
		// 判断picLists是否存在，不存在提示错误
		if (!swiperOptions.picLists) {
			console.error('swiperOptions.picLists is undefined!');
			return;
		}

		createDOM(swiperOptions);

		//是否自动滚动
		if (swiperOptions.autoplay) {
			autoPaly(swiperOptions);
		}

	}

	//创建dom
	function createDOM(swiperOptions) {
			let swiperEl = document.getElementById(swiperOptions.el ? swiperOptions.el : "swiper");
			// console.log(swiperEl);
			if (!swiperOptions.width) {
				swiperOptions.width = 200;
			}
			if (!swiperOptions.height) {
				swiperOptions.height = 150;
			}

			swiperEl.style.width = swiperOptions.width + 'px';
			swiperEl.style.height = swiperOptions.height + 'px';

			let swiperHtml = '';

			swiperHtml += '<div class="swiper-container" id="swiper-container">'
			
			let picWidth = -swiperOptions.width;
			for (let i = 0; i < swiperOptions.picLists.length; i++) {
				picWidth += swiperOptions.width;
				swiperHtml += `
					<div class="swiper-item" style='width:${swiperOptions.width}px; height:${swiperOptions.height}px; position:absolute; left:${picWidth}px; top: 0;'>
						<img src="${swiperOptions.picLists[i].picUrl}" title="${swiperOptions.picLists[i].desc}" alt="${swiperOptions.picLists[i].desc}" style='width:${swiperOptions.width}px; height:${swiperOptions.height}px'>
					</div>
				`;
			}

			swiperHtml += '</div>'

			swiperEl.innerHTML = swiperHtml;

	}


	// 自动轮播
	function autoPaly(swiperOptions){
		let id = 'swiper-container';
		let leftVal;
		let index = 0;
		let el = document.getElementById(id);
		leftVal = parseInt(getStyle(el, 'left'));

		setInterval(function(){
			index++;
			//当index的值和图片的数量相等时，index设为0
			if(index === swiperOptions.picLists.length){
				index = 0;
			}
			var moveWidth = -index * swiperOptions.width;
			el.style.left = -index * swiperOptions.width + 'px';
			// _move(el, moveWidth, swiperOptions.width);
		}, swiperOptions.interval);
	}

	

	// 移动
	function _move(el, moveWidth,  width){
		
		let speed = 10;
		let timer = setInterval(function() {
			// console.log(1);
			// if(getStyle(el, 'left') === moveWidth){
			// 	clearInterval(timer);
			// }
			var left = moveWidth + width + speed;
			// console.log(left, moveWidth, width, speed);
			el.style.left = left + 'px';
		}, 50);
	}	

	//获取样式
	function getStyle(el, name){
		return el.currentStyle ? el.currentStyle[name] : getComputedStyle(el, false)[name];
	}

	return swiper;

})(window);