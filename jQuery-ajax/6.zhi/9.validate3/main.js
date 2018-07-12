$(function(){


	$('#reg').validate({
		//debug : true,
		focusInvalid:false,

		submitHandler : function(form){         //form为表单原生的DOM对象
			//console.log("表单验证成功，准备提交");
			alert("验证成功准备提交");
		},

	/*
		rules :{
			user :{
				required :true,
				rangelength:[2,10]
				//remote:'user.php'
			},
			pass : {
				required :true,
				minlength:6,
				remote:{
					url:'user.php',
					type:'POST',
					dataType:'json',
					data:{
						user:function(){
							return $('#user').val();
						}
					}
				}
			}
		},
		messages  : {
			user : {
				required : '账号不能为空！',
				rangelength:"账号长度必须在{0}-{1}位之间",
				//remote:'账号被占用！'
			},
			pass : {
				required :'密码不能为空！',
				minlength:"密码程度不能少于{0}位",
				remote:'账号或者密码不正确'
			}

		}


		*/

		/*
				取消提交验证                                          onsubmit:false
				设置鼠标离开不触发验证                                 onfocusout:false,
				设置键盘按下弹起不触发验证                             onkeyup:false,
				设置点击checkbox和radio点击不触发验证                  onclick:false,
				设置错误提示后，无法获得焦点                           focusInvalid:false


				是否禁止读取title                                     ignoreTitle:true


		 */





	});

	//外部验证表单的所有字段是否全部有效
	//alert($('#reg').valid());

	//单独验证某一个字段
	$('#user').rules('add',{
		required :true,
		minlength:2,
		message:{
			required : '账号不能为空！',
			rangelength:"账号长度必须在{0}-{1}位之间",
		}
	});

	//删除所有的验证规则
	$('#user').rules('remove');
	//删除 minlength:2, 验证规则
	$('#user').rules('remove','minlength');
	//$('#user').rules('remove','minlength min max');

	//单独验证某一个字段
	$('#code').rules('add',{
		required :true,
		code:true,
		messages:{
			required : '邮编不能为空！'
		}
	});

	//添加自定义验证规则，code 为规则名称
	$.validator.addMethod('code',function(value,element){
		var tel = /^[0-9]{6}$/;
		return this.optional(element) || (tel.test(value));
	},'请输入正确的邮编');

});