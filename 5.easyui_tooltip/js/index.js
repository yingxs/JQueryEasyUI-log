$(function(){


	$('#box').tooltip({
		content:'<strong>这里是提示框内容</strong>',
		onUpdate : function(content){
			alert('内容改变了，为：'+content);
		}
	});


	/*
				属性
				position       string           消息提示框的位置，默认是bottom,还有left、right、top
				position       string           消息提示框的内容，默认是null,可以包含html标签
				trackMouse     boolean          为true时，允许提示框跟随鼠标移动，默认false
				deltaX         boolean          水平方向提示框的位置，默认为0
				deltaY         boolean          垂直方向提示框的位置，默认为0
				deltaY         boolean          为true时，允许提示框跟随鼠标移动，默认为0
				showEvent      string           设置显示提示框的激活时间，默认为mouseenter
				showEvent      string           设置显示提示框的激活时间，默认为mouseleave
				showDelay      number           显示提示框的延迟时长，默认200
				hideDelay      number           隐藏提示框的延迟时长，默认100
	 */

	/*

				事件               传参

				onShow              e             在显示提示框的时候触发
				onHide              e             在隐藏提示框的时候触发
				onUpdate           content        在隐藏提示框的时候触发
				onPosition         left,top       在隐藏提示框的时候触发
				onDestroy          none           在隐藏提示框的时候触发

	 */

	/*

			Tooltip方法               传参

			options                   none          返回属性对象
			tip                       none          返回tip元素对象
			arrow                     none          返回箭头元素对象
			show                       e           显示提示框
			hide                       e           隐藏提示框
			update                   content       更新提示框内容
			reposition                 none        重置提示框位置
			destroy                    none        销毁提示框

	 */


	//重写默认值对象
	$.fn.tooltip.defaults.position = 'top';


});

