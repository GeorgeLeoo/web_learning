//获取样式
function getStyle(el, name){
	return el.currentStyle ? el.currentStyle[name] : getComputedStyle(el, false)[name];
}
var section3  = document.getElementById('section3');
var el3h = parseInt(getStyle(section3, 'height'));
var el3_height = el3h/2;

section3.style.backgroundPosition = `center calc(50% - ${el3_height}px)`;
var index = 0;
var index2 = 0;
window.onscroll = function(){
  var t = document.documentElement.scrollTop || document.body.scrollTop;
  // console.log(t);
  var el1 = document.getElementById('section1');
  var el3 = document.getElementById('section3');
  var el5 = document.getElementById('section5');
  el1.style.backgroundPosition = `center calc(50% + ${t/2}px)`;
  index = Math.abs(t - el3h) - el3_height;
  index2 = Math.abs(t - el3h) - el3_height;

  el3.style.backgroundPosition = `center calc(50% + ${index/2}px)`;

  el5.style.backgroundPosition = `center calc(50% + ${index2/2}px)`;


}

