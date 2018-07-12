$(function(){

	$('#search_button').button({
		disabled : false,           //是否禁用
		label : '搜索',               //按钮上的文字
		icons :{
			primary : 'ui-icon-search'                //按钮的前置图标
			//secondary : 'ui-icon-triangle-1-s'      //按钮的后置图标
		},
		text:true,              //当设置为false时，不会显示文字但是必须要有一个指定的图标
	});

	$('#reg').dialog({
		autoOpen:true,
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

		submitHandler : function(){
			alert("验证成功准备提交");
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