//接受主线程的消息
// console.log(this);
onmessage = function(e){
	console.log(e);
	let a=0;
	for(let i=0;i<5000000;i++){
		a += e.data.a;
	}
	//发送消息给主线程
	postMessage({
		type:'debug',
		message: a,
	});
}
 