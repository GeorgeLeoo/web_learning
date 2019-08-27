let Animation = (function(global){
	function animation(el, name, interval){
		let styleValue = parseInt(getStyle(el, name));
		let left = 0;
		move(el, left, interval);
	}

	function move(el, left, interval) {
		setTimeout(function(){
			_move(el, left);
		}, interval);
	}

	function _move(el, left){
		let base = 10;
		let timer = setInterval(function() {
			left += base;
			base+=0.1
			if(left > 1000){
				clearInterval(timer);
			}
			el.style.left = left + 'px'; 
		}, 50);
	}

	//获取样式
	function getStyle(el, name){
		return el.currentStyle ? el.currentStyle[name] : getComputedStyle(el, name);
	}

	return animation;
})(window);