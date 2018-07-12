$(function(){

	$('.search_button').button();

	/*
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
	*/


	/*
	//得到焦点函数
	$('#reg').dialog({
		focus:function(e,ui){
			alert("注册！");
		}
	});
	$('#login').dialog({
		focus:function(e,ui){
			alert("登录！");
		}
	});

	*/

	//create 创建的时候执行
	//open   打开的时候执行
	//close   关闭的时候执行
	//beforeClose   关闭之前执行，如果这个函数返回false，对话框将不会关闭，可以做一些确认关闭的工作
	//drag 每次移动的时候执行
	//dragStart 拖动开始时
	//dragStop 拖动结束时
	//resize 改变对话框大小时
	//
	/*
		四个子属性；
			size 得到对话框的大小，width,height
			position 得到对话框的坐标，top,left
			originalSize 得到对话框原始的大小，width,height
			originalPosition 得到对话框原始的坐标，top和left
	 */
	//resizeStart 开始改变大小时，同样有四个子属性
	//resizeStop  结束改变大小时，同样有四个子属性

	/*
		dialog('action',param)

		jQuery dialog('open') 打开对话框
		jQuery dialog('close') 关闭对话框
		jQuery dialog('destroy') 删除对话框
		bool   dialog('isOpen') 判断对话框是否打开状态
		jQuery dialog('widget') 获取对话框(整体)的jQuery
		object dialog('option',param) 获取options中param属性的值
	    jQuery dialog('option',param,value) 设置options中param属性的值

	    dialog('moveToTop') 将指定对话框置前




	 */



/*
	$('#reg').dialog({

		//拖动时
		//drag:function(e,ui){
		//	console.log('top:'+ui.position.top+','+'left:'+ui.position.left);
		//},

		//拖动开始时
		dragStart:function(e,ui){
			console.log('start:top:'+ui.position.top+','+'left:'+ui.position.left);
		},

		//拖动结束时
		dragStop:function(e,ui){
			console.log('stop:top:'+ui.position.top+','+'left:'+ui.position.left);
		}



	});
	//$('#reg').dialog('open');           //得到内容区的jquery对象
	//$('#reg').dialog('widget');         //得到整个对话框div的对象
*/

	$('#reg').dialog().on('dialogclose',function(){
		console.log("对话框关闭");
	});



});