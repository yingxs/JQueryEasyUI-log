$(function(){

	//初始化所有表单都是调试模式，不提交
	//所有的默认行为都可以在这里设置
	//$.validate.setDefaults({
	//	debug:true
	//});

	$('#reg').validate({
		//debug : true,
		focusInvalid:false,
		submitHandler : function(form){         //form为表单原生的DOM对象
			//当验证成功后执行，而且阻止了默认提交，
			// 一般用于ajax提交使用
			//console.log(form);
			console.log("表单验证成功，准备提交");
		},
		//ignore:'#pass',                     //忽略某个字段的验证

/*      //错误提示群组方式一
		groups:{                            //定义群组错误提示
			myerror:'user pass',            //会冲突
		},
		focusInvalid:false,                 //阻止表单提交后的默认获得焦点事件
		errorPlacement :function(error,element){        //错误信息方法，error为错误信息，element为控件

			$.each(error,function(index,value){
				console.log(index,$(value).html());
				$('.myerror').html($('.myerror').html()+$(value).html() );

			})

		},
*/


/*      //错误提示群组方式二
		groups:{
			error_user : 'user',
			error_pass : 'pass'
		},
		errorPlacement :function(error,element){
			error.appendTo('.myerror');
		},

*/

		/*
		//errorClass:'abc',               //设置错误信息的class
		//errorElement:'p',               //设置错误信息的标签\
		//errorLabelContainer:'ol.myerror',
		//wrapper:'li',               //外面包一层li标签
		//success:'succ',               //验证成功后添加的class,inout控件内置会加上valid,失败会加上error
		success:function(label){           //验证成功后执行的function 给label添加class和文本
			console.log(label);
			label.addClass('success').text("ok");
		},

		//验证发生错误时，高亮显示有错误的元素
		highlight:function(element,errorClass){
			$(element).css('border','1px solid red');
		},
		//验证成功元素取消高亮
		unhighlight:function(element,errorClass){
			$(element).css('border','1px solid #ddd');
		},

		//表单提交时获取错误信息
		invalidHandler :function(event,validator){
			var errors = validator.numberOfInvalids();
			console.log("你有"+errors+"条错误信息");
		},
*/
		//获取错误句柄,不用提交也能及时获取值
		showErrors:function(errorMap,errorList){
			console.log(errorMap,errorList);
			//console.log(errorList[0].element);          //当前的控件DOM对象
			//console.log(errorList[0].message);          //当前的控件错误message


			var error = this.numberOfInvalids();        //获取错误数量
			if(error){
				$('.myerror').html('你有'+error+'错误信息');
			}else{
				$('.myerror').hide();
			}

			//默认阻止了错误提示的显示
			this.defaultShowErrors();       //显示默认的错误提示


		},




		rules :{
			user :{
				required :true,
				//minlength:5
				rangelength:[5,10]
			},
			pass : {
				required :true,
				minlength:6
			}
		},
		messages  : {
			user : {
				required : '账号不能为空！',
				//minlength : '账号不得少于{0}位！',
				rangelength:"账号长度必须在{0}-{1}位之间"
			},
			pass : {
				required :'密码不能为空！',
				minlength:"密码程度不能少于{0}位"
			}

		}
	});


});