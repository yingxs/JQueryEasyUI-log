$(function(){

	$('#reg').validate({
		rules :{
			user :{
				required :true,
				minlength:2
			},
			email:{
				required :true,
				email:true
			},
			url:{
				url:true
			},
			date : {
				date :true
			},
			dateISO : {
				dateISO :true
			},
			number : {
				number :true,
				min:5,  //最小输入5
				max:15  //最大输入15
			},
			digits : {
				digits :true
			},
			creditcard : {
				creditcard : true
			},
			notpass : {
				equalTo : '#pass'
			}


			/*
					其他验证规则
					minlength:5             //输入长度最小为5位的字符串
					maxlength:15             //输入长度最多为10位的字符串
					rangelength:[5,10]       //输入长度5-10位的字符串
					range:[5,10]             //输入的值介于5-10
					min:5             //输入的值最小为5
					max:10            //输入的值最大为10
					remote:"check.php"     //使用ajax方法调用check.php验证输入值
			 */
		},
		messages  : {
			user : {
				required : '账号不能为空！',
				minlength : '账号不得少于两位！'
			},
			email : {
				required : 'email不能为空！',
				email:'e-mail不合法'
			},
			url:{
				url:'网址不合法'
			},
			date : {
				date :'日期非法或无效'
			},
			dateISO : {
				dateISO : '日期格式错误'
			},
			number : {
				number :'非法数字',
				min:'5-15',
				max:'5-15'
			},
			digits : {
				digits :'正整数哦亲'
			},
			creditcard : {
				creditcard : '这是卡号吗亲'
			},
			notpass : {
				equalTo : '两次输入密码不一致'
			}

		}
	});


});