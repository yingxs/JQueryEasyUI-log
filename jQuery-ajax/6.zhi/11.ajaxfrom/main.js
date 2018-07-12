$(function(){

	//这里的function就是success : function(){}
	//使用ajaxForm()方法，会直接实现ajax提交，自动阻止了默认行为，二提交form控件的action属性的值，提交方式是method的值
	//$('#reg').ajaxForm(function(){
	//	alert("提交成功");
	//});



	//js里用submit()这个方法时，采用ajaxSubmit提交，
	// ajaxForm是针对form直接提交的，所以阻止了默认事件，而ajaxSubmit()方法，
	// 由于是针对submit方法的，所以需要手动阻止默认行为，而使用了验证插件，那么ajaxSubmit()比较适合我们
	$('#reg').submit(function(){
		$(this).ajaxSubmit({
			url:'test.php',                         //请求的url
			target:'#box',                          //请求的数据保存在#box中
			type:'POST',                          //请求的方式
			dateType:null,                          //xml,json,script
			clearForm:true,                          //成功提交后，是否清空表单
			resetForm:true,                          //成功提交后，是否重置表单
			data:{                                   //增加额外的数据提交
				aaa:'bbb',
				ccc:'ddd'
			},
			beforeSubmit:function(formData,jqForm,options){     //表单数据键值对，表单的jquery对象，ajax的可变参数
				//提交之前执行，一般用于数据验证

				//如果数据验证不合法，就会返回false,不让提交，返回true就允许提交
			},
			success:function(responseText,statusText){      //数据文本，和请求状态文本
				alert("提交成功");
			},
			error : function(event,errorText,ErrorType){
				//发生错误时调用
			}
		});

		return false;
	});



	//表单序列化
	$('#reg').formSerialize();

	//序列化某一个字段
	$('#reg #user').fieldSerialize();

	//得到某个字段的value值
	$('#reg #user').fieldValue();

	//重置表单
	$('#reg').resetForm();

	//清空某个字段
	$('#reg #user').clearFields()

});