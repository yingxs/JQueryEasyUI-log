$(function(){


	//$('#box').dialog();

	//手动解析一般使用class的情况下有效，比如设置class='easyui-dialog'
	//渲染页面中所有UI
	$.parser.parse();


});

$.parser.auto = false;

$.parser.onComplete = function(){
	alert('UI解析完毕');
};

