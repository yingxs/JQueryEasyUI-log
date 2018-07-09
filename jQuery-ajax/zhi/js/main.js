$(function(){

	$('.search_button').button();

	$('#reg_a').click(function(){
		$('#reg').dialog('open');
	});


	$('#reg').dialog({
		title:'知问注册',
		position:"center",
		buttons:{
			'提交':function(){
				alert("正在ajax提交");
			},
			'取消':function(){
				$(this).dialog('close')
			}
		},
		//show:'puff',
		//hide:'puff',
		autoOpen:false   ,       //初始化窗口，但是不显示
		//draggable:false,            //可否拖拽移动
		//resizable:false,           //可否改变大小
		modal:true,                  //是否生成遮罩
		closeText:'关闭'
	});
	//$('#login').dialog();
});