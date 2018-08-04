$(function(){


		$('#box').tabs({
			width:300,
			height:100,
			//plain:true ,        //设置为true时，将不显示控制面板背景
			//fit:true,           //设置为true时，选项卡大小将铺满它所在的容器，默认是false
			border:true,        //设置为true时，显示选项卡容器边框，默认为true
			scrollIncrement:100, //选项卡滚动条每次滚动的像素值，默认为100
			scrollDuration:400,  //每次滚动动画的持续时间单位为毫秒，默认为400
			//tabWidth:300,        //标签宽度
			//tabHeight:50,        //标签高度
			//tools : [{
			//	iconCls : 'icon-add',
			//	handler : function(){
			//		alert('add');
			//	}
			//},{}],s
			//tools : '#tt',              //不能自动拓展宽度
			//toolPosition : 'left',       //工具栏的位置,可用：'left','right'，默认right
			//tabPosition : 'left',       //选项卡按钮的位置,可用：'bottom','top','left','right'，默认right
			//headerWidth: 200  ,         //选项卡标题宽度,在tabPosition属性设置为'left'或right的时候才有效,默认为150
			//tabWidth:200,               //标签条的宽度，默认auto
			//tabHeight:30,               //标签条的高度，默认27
			selected:1 ,                  //初始化选中一个tab页,默认0
			showHeader:true,               //设置为true时，显示tab页面标题(选项卡按钮)，默认值true
			//onSelect : function(title,index){
			//	console.log(title,index);
			//}
			onContextMenu:function(e,title,index){
				console.log(e,title,index);
			}
		});

	/*

			事件列表            传参              说明
			onLoad             panel            在ajax选项卡面板加载完成远程数据的时候触发
			onSelect         title,index        用户在选择一个选项卡面板的时候触发
			onUnselect       title,index        用户在取消选择一个选项卡面板的时候触发
			onBeforeClose    title,index        在选项卡面板关闭的时候触发，返回false取消关闭操作，
			onClose          title,index        在用户关闭一个选项卡面板的时候触发
			onAdd            title,index        在用户添加一个新选项卡面板的时候触发
			onUpdate         title,index        在用户更新一个选项卡面板的时候触发
			onContextMenu    e,title,index      在右键点击一个选项卡面板的时候触发

	 */


});


