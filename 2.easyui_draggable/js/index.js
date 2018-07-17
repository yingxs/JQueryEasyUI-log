$(function(){


	$('#box').draggable({
		//revert:true,                  //设置为true,则拖动停止时返回起始位置
		//handle:'#pox'                 //开始拖动的句柄,即可以拖动的区域
		//axis:'v'                        //只可以垂直拖
		//proxy:'clone'
		proxy:function(source){
			//source为#box的DOM对象
			console.log(source);

			var p = $('<div style="width: 400px;height: 200px;border: 2px dashed #ccc;"></div>');
			p.appendTo('body');
			return p;

		}
	});

	/*
			属性

			Proxy                      null/string,function                  当使用'clone'，则克隆一个替代元素拖动，如果指定一个函数，则自定义替代元素
			revert                     false/boolean                         设置为true,则拖动停止时返回起始位置
			cursor                      move/string                             拖动时的CSS指针样式
			delataX                     null/number                             被拖动的元素对应于当前光标位置X
			delataY                     null/number                             被拖动的元素对应于当前光标位置Y
	        handle                      null/selector                           开始拖动的句柄,即可以拖动的区域
	        disabled                    false/boolean                           设置为true,则禁止拖动
	        edge                        0/number                                可以在其中拖动的容器的宽度
	        axis                        null/string                             设置拖动为垂直'v',还是水平'h'+
	 */


	/*
			事件
			onBeforeDrag                  拖动之前触发，返回false将取消拖动
			onStartDrag                   拖动开始时触发
			onStartDrag                   拖动过程中触发，不能拖动时返回false
			onStopDrag                    拖动停止时触发
	 */

	/*

			Draggable方法

			option                         返回属性对象
			proxy                           有代理就返回
			enable                           允许拖动
			disable                           禁止拖动
	 */


	//我们可以使用$.fn.draggable.defaults重写默认值对象
	$.fn.draggable.defaults.cursor = 'text';




});

