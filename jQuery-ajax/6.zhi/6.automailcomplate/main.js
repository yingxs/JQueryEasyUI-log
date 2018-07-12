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

			}
		}
	});

	$('#reg').buttonset();


	$('#date').datepicker({
		dateFormat:'yy.mm.dd',      //日期格式化
		//dayNames :  ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"], //数组，周几的长格式
		//dayNamesShort :["周日","周一","周二","周三","周四","周五","周六"],  //数组，周几的短格式，比如Sun,Mon等
		dayNamesMin   : ["日","一","二","三","四","五","六"], //数组，周几的最短格式，比如Su,Mo等
		monthNames:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
		monthNamesShort:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
		//altField:'#date',       //为日期选择期指定另外一个<input>
		//altFormat:'yy/mm/dd',    //为指定的另外一个<input>添加指定的格式化
		//appendText:'日历',              //在日期选择期的<input>域的后面添加文本
		showWeek:true,
		weekHeader:'周',
		firstDay:1,                 //周次从那一天开始
		/*
				外观属性
				disabled 是否禁用
		 */
		//numberOfMonths:2,
		//numberOfMonths:[3,2],
		//showOtherMonths:true,          //是否使用没有填充的单元格，默认为false,会隐藏无法使用的单元格
		//selectOtherMonths:true,          //是否可以选择上个月或下个月的日期，前提是showOtherMonths设置为true,默认为false
		changeMonth:true ,                //允许通过下拉列表来选择月份
		changeYear:true,                 //允许通过下拉列表来选择月份
		//isRTL:true,                       //是否由右向左绘制日历
		//autoSize:true,                      //是否自动调整文本框的控件大小，以适应当前的日期格式的输入，一般针对未设置css的文本框，
		//showOn : 'button',                   //日历出现的触发事件改为button，默认是focus,若改为button 则focus失效，若是both则两者皆可
		//buttonText : '日历',                  //触发按钮上的文字
		//buttonImage : "",                   //触发按钮上的图片路径
		//buttonImageOnly : true,             //是否只显示图片，即图片替代按钮
		showButtonPanel:true,
		closeText:'关闭',
		currentText:'今天dd',
		//nextText:'下个月mm',
		//prevText:'下个月mm',
		//navigationAsDateFormat:true     //设置prev,next,和current的文字可以是format的日期格式
		//yearSuffix : '年',                 //年份的后缀
		//showMonthAfterYear:true           //是否倒置年份与月份的位置

		//日期的限制优先级，min和max最高，年份该有另外一个属性进行限制
		maxDate:0,                          //最大时间
		//minDate:1,                          //最小时间
		hideIfNoPrevNext:true,
		//maxDate和minDate只是限制日期，而年份的限制的优先级没有yearRange的优先级高
		yearRange:"1950:2020",
		//defaultDate:-1        //默认选中昨天，当直接回车时，默认选中的这一天会输入进去
		//gotoCurrent:true,        //如果为true,点击近日且回车后选择的是当前选定的日期，而不是今日
		//showAnim:false,             //出现时的动画效果，false为无动画效果
		duration:300,                    //动画时序时间
		/*
				事件
			beforeShow              //日历显示之前被调用
		    beforeShowDay           //显示每个日期时都会被调用，该方法返回一个数组来指定每个日期的信息
		            1.该日期是否可以被选择
		            1.该单元格上使用的CSS类
		            1.该单元格上显示得到字符串提示信息
            onChangeMonthYear       //onChangeMonthYear(year,month,inst)方法在日历中显示的月份或年份被改变时调用，或者cgangeMonth或changeYear为true时，
                                    下拉改变时也会触发,year是当前的年，month是当前的月，inst是一个对象，可以调用一些属性获取值
            onClose                 //onClose(dateText,inst)方法在日历被关闭时调用，dateText是当时选中的日期字符串，inst是一个对象，可以调用一些属性获取值
            onSelect                 //onClose(dateText,inst)方法在选择日历的日期时调用，dateText是当时选中的日期字符串，inst是一个对象，可以调用一些属性获取值
		 */

		//beforeShowDay:function(date){
		//	if(date.getDate() == 1){
		//		return [false,'a','不能选择'];
		//	}else{
		//		return [true];
		//	}
		//
		//}


		//onChangeMonthYear:function(year,month,inst){
		//	console.log("日历中年份或月份被改变时激活！",year,month,inst);
		//}

		//onSelect : function(dateText,inst){
		//	console.log(dateText);//日期字符串
		//},
		//onClose : function(dateText,inst){
		//	console.log(dateText);//日期字符串
		//}





	});



	/*

			jQuery      datepicker('show')                      显示日历
			jQuery      datepicker('hide')                      隐藏日历
			Date        datepicker('getDate')                   获取当前选定日期
			jQuery      datepicker('setDate',String date)       设置当前选定日期
			jQuery      datepicker('destroy')                   销毁日历
			jQuery      datepicker('widget')                    获取日历的jQuery对象
			jQuery      datepicker('isDisabled')                获取日历是否禁用
			jQuery      datepicker('refresh')                   刷新日历
			object      datepicker('option',param)              获取options中的param属性的值
			object      datepicker('option',param,value)        设置options中的param属性的值为value

	 */


	//设置当前选定的日期
	$('#date').datepicker('setDate','2018.5.1');






















	$('#reg input[title]').tooltip({
		show : false,       //显示效果
		hide : false,       //隐藏效果
		position:{
			my : 'left+5 center',
			at : 'right+5 center'
		}
	});

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