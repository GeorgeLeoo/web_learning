var province = document.getElementById("province");
var city = document.getElementById("city");

var provinces = [
	{
		id:1,
		name:'北京',
		tag:'bj'
	},
	{
		id:2,
		name:'上海',
		tag:'sh'
	},
	{
		id:3,
		name:'江苏',
		tag:'js'
	},
];

var citys = {
	bj:[
		{
			id:1,
			name:'海淀区',
			tag:'hd'
		},
		{
			id:2,
			name:'通州区',
			tag:'tz'
		},
	],
	sh:[
		{
			id:1,
			name:'宝山',
			tag:'bs'
		},
		{
			id:2,
			name:'徐汇',
			tag:'xh'
		},
	],
	js:[
		{
			id:1,
			name:'南京',
			tag:'nj'
		},
		{
			id:2,
			name:'南通',
			tag:'nt'
		},
	]
};

var provinceHTML = '<option value="-1">---请选择---</option>';

for(var i = 0; i < provinces.length; i++){
	provinceHTML += `<option value="${provinces[i].tag}">${provinces[i].name}</option>`;
}

province.innerHTML = provinceHTML;

province.onchange = function(ev){
	var selectProvince = ev.target.value;
	var selectCitys = citys[selectProvince];
	var cityHTML = '<option value="-1">---请选择---</option>';
	
	for(var i = 0; i < selectCitys.length; i++){
		cityHTML += `<option value="${selectCitys[i].id}">${selectCitys[i].name}</option>`;
	}
	city.innerHTML = cityHTML;
}


