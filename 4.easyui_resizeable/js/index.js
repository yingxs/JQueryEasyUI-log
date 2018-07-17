$(function(){


	$('#rr').resizable({
		//disabled:true,
		handles:'e,s,se'
	});
	/*
				属性
				disabled            boolean                 默认为false,设置为true则禁用调整
				handles             String                  默认为n,e,s,w,ne,se,sw,nw,all,声明调整方位，n表示北、e表示东、s表示南、w表示西、还有ne、se、sw、nw和all
				minWidth            number                  默认10
				minHeight           number                  默认10
				maxWidth            number                  默认10000
				maxHeight           number                  默认10000
				edge                number                  边框边缘触发大小，默认5

	 */


	/*
				事件                      传参
				onStrartResize             e                 //在开始改变大小的时候触发
				onResize                   e                 //在改变大小期间触发，当返回false的时候，在拖动期间不会实际改变DOM元素的大小，放开时完成大小改变
				onStopResize               e                 //在停止改变大小的时候触发
	 */




	/*
				Resizeable方法

				options                     返回属性对象
				enable                      启用调整功能
				disable                     禁用调整功能
	 */

	//我们可以使用$.fn.resizeable.defaults重写默认值对象
	$.fn.resizable.defaults.disabled = true;



});

