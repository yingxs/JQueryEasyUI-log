$(function(){

	$('#search_button').button({
		disabled : false,           //是否禁用
		label : '搜索',               //按钮上的文字
		icons :{
			primary : 'ui-icon-search'                //按钮的前置图标
			//secondary : 'ui-icon-triangle-1-s'      //按钮的后置图标
		},
		text:true              //当设置为false时，不会显示文字但是必须要有一个指定的图标
	});

	$('#question_button').button({
		disabled : false,           //是否禁用
		label : '提问',               //按钮上的文字
		icons :{
			primary : 'ui-icon-lightbull'                //按钮的前置图标
			//secondary : 'ui-icon-triangle-1-s'      //按钮的后置图标
		},
		text:true              //当设置为false时，不会显示文字但是必须要有一个指定的图标
	}).click(function(){
		if($.cookie('user')){
			$('#question').dialog('open');
		} else{
			$('#error').dialog('open');
			setTimeout(function(){
				$('#error').dialog('close');
				$('#login').dialog('open');

			},1000);
		}
	});

	$('#question').dialog({
		autoOpen:false,
		modal:true,
		resizable:false,
		width:900,
		height:400,
		buttons : {
			'发布':function(){
				$(this).submit();
			}
		}
	});

	//$('.uEditorCustom').uEditor();


	$('#error').dialog({
		autoOpen:false,
		modal:true,                  //遮罩
		resizable:false,             //禁止改变大小
		draggable:false,             //禁止拖拽
		width:180,
		height:55
	}).parent().find('.ui-widget-header').hide();          //去掉header头


	$('#member,#logout').hide();





	if($.cookie('user')){
		$('#member,#logout').show();
		$('#reg_a,#login_a').hide();
		$('#member').html($.cookie('user'));
	}else{
		$('#member,#logout').hide();
		$('#reg_a,#login_a').show();
	}

	$('#logout').click(function(){
		$.removeCookie('user');

		if($.cookie('user')){
			$('#member,#logout').show();
			$('#reg_a,#login_a').hide();
			$('#member').html($.cookie('user'));
		}else{
			$('#member,#logout').hide();
			$('#reg_a,#login_a').show();
		}
	});




	$('#loading').dialog({
		autoOpen:false,
		modal:true,                  //遮罩
		resizable:false,             //禁止改变大小
		draggable:false,             //禁止拖拽
		width:180,          
		height:55
	}).parent().find('.ui-widget-header').hide();          //去掉header头


	$('#reg_a').click(function(){
		$('#reg').dialog('open');
	});

	$('#reg').dialog({
		autoOpen:false,
		modal:true,
		resizable:false,
		width:320,
		height:340,
		buttons : {
			'提交':function(){
					$(this).submit();
			}
		}
	}).buttonset().validate({

		//把错误信息统一放在一个容器里面。
		errorLabelContainer : 'ol.reg_error',
		//用什么标签再把上边的 errorELement 包起来。
		wrapper : 'li',
		//验证通过后执行的函数
		submitHandler : function(form){
			$(form).ajaxSubmit({
				url:'add.php',
				type:'POST',
				beforeSubmit : function(formData,jqForm,options){
					$('#loading').dialog('open');
				    $('#reg').dialog('widget').find('button').eq(1).button('disable');
				},
				success:function(responseText,statusText){
					if(responseText){
						$('#reg').dialog('widget').find('button').eq(1).button('enable');
						$('#loading').css('background','url(ok.svg) no-repeat 20px center').html("注册成功...");
						$.cookie('user',$('#user').val());
						setTimeout(function(){
							$('#loading').dialog('close');
							$('#reg').dialog('close');
							$('#reg').resetForm();
							$('#reg span.star').html('*').removeClass('succ');
							$('#loading').css('background','url(loading.gif) no-repeat 20px center').html("数据交互中...");


							$('#member,#logout').show();
							$('#reg_a,#login_a').hide();
							$('#member').html($.cookie('user'));
						},1000)
					}
				}
			});


			//alert("验证成功准备提交");
		},

		showErrors : function(errorMap,errorList){
			var errors = this.numberOfInvalids();

			if(errors > 0){
				$('#reg').dialog('option','height',errors * 20 + 340);
			}else{
				$('#reg').dialog('option','height', 340);
			}

			this.defaultShowErrors();
		},

		//可以给未通过验证的元素加效果、闪烁等。
		highlight :function(element,errorClass){
			$(element).css('border','1px solid #630');
			$(element).parent().find('span').html('*').removeClass('succ');
		},
		unhighlight : function(element,errorClass){
			$(element).css('border','1px solid #ccc');
			$(element).parent().find('span').html('&nbsp;').addClass('succ');
		},

		rules : {
			user : {
				remote :{
					url:'is_user.php',
					type:'POST'
				},
				required : true,
				minlength : 2

			},
			pass : {
				required : true,
				minlength : 6
			},
			email:{
				required : true,
				email:true
			},
			date:{
				date:true
			}
		},
		messages : {
			user :{
				remote : '用户名被占用',
				required : '账号不得为空',
				minlength : '账号不得少于{0}位'

			},
			pass :{
				required : '密码不得为空',
				minlength : '密码不得少于{0}位'
			},
			email :{
				required : '邮箱不得为空',
				email : '邮箱地址不合法'
			}
		}
	});


	$('#login_a').click(function(){
		$('#login').dialog('open');
	});

	$('#login').dialog({
		autoOpen:false,
		modal:true,
		resizable:false,
		width:320,
		height:240,
		buttons : {
			'提交':function(){

				$(this).submit();
			}
		}
	}).validate({

		//把错误信息统一放在一个容器里面。
		errorLabelContainer : 'ol.login_error',
		//用什么标签再把上边的 errorELement 包起来。
		wrapper : 'li',
		//验证通过后执行的函数
		submitHandler : function(form){
			$(form).ajaxSubmit({
				url:'login.php',
				type:'POST',
				beforeSubmit : function(formData,jqForm,options){
					$('#loading').dialog('open');
					$('#login').dialog('widget').find('button').eq(1).button('disable');
				},
				success:function(responseText,statusText){
					if(responseText){
						$('#login').dialog('widget').find('button').eq(1).button('enable');
						$('#loading').css('background','url(ok.svg) no-repeat 20px center').html("登陆成功...");
						if( $('#expires').is(':checked') ){
							$.cookie('user',$('#login_user').val(),{
								expires:7
							});
						}else{
							$.cookie('user',$('#login_user').val());
						}
						setTimeout(function(){
							$('#loading').dialog('close');
							$('#login').dialog('close');
							$('#login').resetForm();
							$('#login span.star').html('*').removeClass('succ');
							$('#loading').css('background','url(loading.gif) no-repeat 20px center').html("数据交互中...");


							$('#member,#logout').show();
							$('#reg_a,#login_a').hide();
							$('#member').html($.cookie('user'));
						},1000)
					}
				}
			});


			//alert("验证成功准备提交");
		},

		showErrors : function(errorMap,errorList){
			var errors = this.numberOfInvalids();

			if(errors > 0){
				$('#login').dialog('option','height',errors * 20 + 240);
			}else{
				$('#login').dialog('option','height', 240);
			}

			this.defaultShowErrors();
		},

		//可以给未通过验证的元素加效果、闪烁等。
		highlight :function(element,errorClass){
			$(element).css('border','1px solid #630');
			$(element).parent().find('span').html('*').removeClass('succ');
		},
		unhighlight : function(element,errorClass){
			$(element).css('border','1px solid #ccc');
			$(element).parent().find('span').html('&nbsp;').addClass('succ');
		},

		rules : {
			user : {
				required : true,
				minlength : 2

			},
			pass : {
				required : true,
				minlength : 6
			}

		},
		messages : {
			user :{
				required : '账号不得为空',
				minlength : '账号不得少于{0}位'

			},
			pass :{
				required : '密码不得为空',
				minlength : '密码不得少于{0}位'
			}
		}
	});



	$('#tabs').tabs();

	$('#accordion').accordion({
		/*
				属性                  默认值/类型                          说明
				collapsible             false/布尔值                 是否允许菜单折叠
				disabled                无/布尔值                     是否禁用
				event                   click/字符串                  触发折叠的事件类型默认是click，可以设置成mouseover等其它鼠标事件
				active                  数组和布尔值                  如果是数组，默认就显示那个，如果是布尔值，那么就是默认是否折叠，前提条件是collapsible:true
		        hieghtStyle             content/字符串                 默认为auto,即自动根据最高的那么为基准，fill则是填充一定的可用高度，content则是根据内容伸展高度
				header                  h1/字符串                      设置折叠菜单的标题标签
				icons                   默认图标                      设置想要的图标

	     */

		icons:{
			"header":"ui-icon-plus",
			"activeHeader":"ui-icon-minus"
		}

		/*
				create             当创建一个折叠菜单时激活此事件，该方法有两个参数(event,ui),ui参数有两个子属性header和panel得到当前标题和内容选项的对象
				activate           当切换一个折叠菜单时触发此事件，该方法有两个参数(event,ui)ui参数有四个属性newHeader,newPanel,oldHeader,oldPanel
		        beforeActivate     当切换一个折叠菜单时之前触发此事件，该方法有两个参数(event,ui)ui参数有四个属性newHeader,newPanel,oldHeader,oldPan
		 */
	});

	/*
				jQuery          accordion('disable')            禁用折叠菜单
				jQuery          accordion('enable')            启用折叠菜单
				jQuery          accordion('widget')            获取折叠菜单的jQuery对象
				jQuery          accordion('destroy')           销毁折叠菜单
				jQuery          accordion('refresh')           销毁折叠菜单
				object          accordion('option',param)           获取options属性的值
				object          accordion('option',param,value)           设置options属性的值
	 */

	//$('#accordion').accordion('disable');       //禁用此折叠菜单

	/*
				on()

				accordionactivate               //折叠菜单切换时触发
				accordionbeforeactivate               //折叠菜单切换前触发
	 */

	$('#accordion').on('accordionactivate',function(event,ui){
		console.log( ui.newHeader.get() );
		console.log( ui.newPanel.get() );
		console.log( ui.oldHeader.get() );
		console.log( ui.oldPanel.get() );
	});




	$('#date').datepicker({
		changeMonth:true ,                //允许通过下拉列表来选择月份
		changeYear:true,                 //允许通过下拉列表来选择月份
		yearSuffix:'',                      //年份的后缀字符串
		maxDate:0,                          //最大时间
		yearRange:"1950:2020"
	});






	//工具提示
	//$('#reg input[title]').tooltip({
	//	show : false,       //显示效果
	//	hide : false,       //隐藏效果
	//	position:{
	//		my : 'left+5 center',
	//		at : 'right+5 center'
	//	}
	//});


	//email自动完成
	var host = ["aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","bb"];
	$('#email').autocomplete({
		delay:0,
		autoFocus:true,
		source:function(request,response){
			//获取用户输入的内容
			//console.log(request.term);
			//response(["aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","bb"]);
			//这里的response不会根据搜索关键字而过滤无关结果，而是把整个结果全部呈现出来，因为source数据源，本身就是动态改变的，从而放弃系统内置的搜索能力

			var hosts = ['qq.com','163.com','263.com','gmail.com','sina.com.cn','hotmail.com'],
				term = request.term,            //获取用户输入的内容
				name = term,                    //获取用户输入的内容
				host = '',                      //邮箱的域名
				ix = term.indexOf('@'),         //@的位置
				result = [];                    //最终呈现的邮箱列表
				result.push(term);
			//当有@的时候，重新分别计算用户名和域名
			if(ix > -1){
				name = term.slice(0,ix);
				host = term.slice(ix+1);
			}

			if(name){
				//如果用户已经输入@和后面的域名
				//那么就找到相关的域名提示，比如bnbbs@1,就提示bnbbs@163.com
				//如果用户还没有输入@和后面的域名就把所有的域名都提示出来
				var findedHosts = [];
				if(host){
					findedHosts = $.grep(hosts,function(value,index){
						return value.indexOf(host)>-1;
					});
				}else{
					findedHosts = hosts;
				}


				var findedResult = $.map(findedHosts,function(value,index){
					return name+'@'+value;

				});

				result = result.concat(findedResult);

				console.log(result);
			}

			response(result);

		}

	});



});