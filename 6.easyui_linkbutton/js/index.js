$(function(){

	$('#box').linkbutton({
		//id : 'pox',
		//toggle:true,
		//selected:true,
		//group:'sex'
		//plain:true
		//iconCls:'icon-add'
	});
	$('#pox').linkbutton({
		//id : 'pox',
		//toggle:true,
		//group:'sex'
		//iconCls:'icon-mini-add'

	});



	/*

			属性列表
				id          string              改变组件的ID属性，默认为null
				disabled    boolean             设置true则禁止按钮，默认为false
				toggle      boolean             设置true则允许用户切换其状态是否被选中，可实现checkbox复选效果，默认为false
				selected    boolean             设置为true,默认选中，false未选中
				group       string              指定相同组名的按钮同属于一个组，可实现radio单选效果，默认为null
				plain       boolean             设置为true时显示简介效果，默认为false
				text        string              按钮文字，默认为空字符串
				iconCls     string              显示在按钮左侧的图标(16*16)的css类ID，默认为null
				iconAlign   string              按钮图标位置，默认是left,还有right

	 */



	/*

			LinkButton方法

				options                         返回属性对象
				disable                         禁止按钮
				enable                          启用按钮
				select                          选择按钮
				unselect                        取消选择按钮

	 */




});


//重写默认值对象
$.fn.linkbutton.defaults.iconCls='icon-add';

