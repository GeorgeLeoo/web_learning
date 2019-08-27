let Animation = (function(global){
	let count = 0;
	function animation(el, name, duration, length){
		let style = getStyle(el, name);
		let left = parseInt(style[name]);
		_move(el, left, duration);
	}

	function _move(el, left, duration, length){
		let base = 1;
		let timer = setInterval(function() {
			if (left >= 2000){
				el.style.left = 0;
				console.log(el);
				count = 0 ;
				clearInterval(timer);
				
			}
			if(left === 500 * count){
				console.log(left);
				clearInterval(timer);
				setTimeout(function(){
					_move(el, left, duration);
				},duration);
			}

			left += base;

			el.style.left = -left + 'px'; 
		}, 0);
		count++;
	}

	//获取样式
	function getStyle(el, name){
		return el.currentStyle ? el.currentStyle[name] : getComputedStyle(el, name);
	}

	return animation;
})(window);