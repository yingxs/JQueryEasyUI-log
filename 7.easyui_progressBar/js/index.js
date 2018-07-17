$(function(){



	//$.fn.progressbar.defaults.value=15;

	$('#box').progressbar({
		width:400,
		height:30,
		//value:30,
		text:'已加载{value}%...',
		onChange:function(newValue,oldValue){
			console.log("新："+newValue+",旧:"+oldValue);
		}
	});

	//setInterval(function(){
	//	$('#box').progressbar('setValue',$('#box').progressbar('getValue')+5);
	//},200);



	/*

			事件
			onChange        newValue,oldValue           在值更改的时候触发

	 */

	/*
			progressbar方法           传参

			options                 none                返回属性对象
			resize                  width               设置进度条宽度
			getValue                 none               返回当前进度数值
			setValue                 value               设置进度数值

	 */

	$('#box').progressbar('resize',600);




});

$.fn.progressbar.defaults.value=15;