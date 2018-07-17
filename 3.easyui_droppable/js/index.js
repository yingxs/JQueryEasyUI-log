$(function(){


	$('#dd').droppable({
		accept:'#box',
		//disabled:true,
		onDragEnter : function(e,source){
			//console.log(e,source);
			console.log("onDragEnter");
			$(this).css('background','blue');
		},
		onDragOver : function(e,source){
			//console.log(e,source);
			console.log("onDragOver");
			$(this).css('background','orange');
		},
		onDragLeave : function(e,source){
			//console.log(e,source);
			console.log("onDragLeave");
			$(this).css('background','green');
		},
		onDrop : function(e,source){
			//console.log(e,source);
			console.log("onDrop");
			$(this).css('background','maroon');
		}
	});

	/*
			属性名
			accept              默认为null,确定哪些元素被接受
			disabled            默认为false,如果为true,则禁止放置

	 */



	/*
			事件
			onDragEnter         e,source        在被拖拽元素放置到区内时触发
			onDragOver          e,source        在被拖拽元素经过放置到区内时触发
			onDragLeave         e,source        在被拖拽元素离开放置到区内时触发
			onDrop              e,source        在被拖拽元素放入放置到区内时触发

			//enter只触发一次，先于over
	 */




	/*
			droppable()方法

			options     返回属性对象
			enable      启用放置功能
			disable      禁用放置功能

	 */

	//可以使用$.fn.droppable.defaults重写默认对象
	$.fn.droppable.defaults.disabled = true;











	$('#box').draggable({
		//revert:true,                  //设置为true,则拖动停止时返回起始位置
		//handle:'#pox'                 //开始拖动的句柄,即可以拖动的区域
		//axis:'v'                        //只可以垂直拖
		//proxy:'clone'
		//proxy:function(source){
		//	//source为#box的DOM对象
		//	console.log(source);
		//
		//	var p = $('<div style="width: 400px;height: 200px;border: 2px dashed #ccc;"></div>');
		//	p.appendTo('body');
		//	return p;
		//
		//}
	});





});

