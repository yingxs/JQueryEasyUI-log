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
	$('#date').datepicker();

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
		source:host,            //数据源
		disabled:false,           //是否禁用
		minLength:1,             //触发补全列表最少输入的字符
		delay:300,                //延迟时长
		autoFocus:true,               //是否自动选中第一个目标
		//position:{                //位置

		/*
				事件
				focus          当自动补全获取焦点时(点击某一项时)，会调用focus方法，该方法有两参数(event,ui)此事件中的ui有一个子属性对象item,分别有两个子属性
								label，补全列显示的文本，value，将要输入框的值，一般情况下，label和value的值相同
				select          选定
				change          当自动补全失去焦点且内容发生改变时，会调用change方法
				search          当自动补全搜索完成后，会调用search方法，(event,ui),该方法UI为空
				response        当自动搜索完成后，会调用response方法，该方法有两个参数(event,ui)此事件的ui有一个子对象content,他会返回label,和value的值，可以通过遍历了解
		 */
		focus:function(e,ui){
			ui.item.value="123";
		}



		/*
				autocomplate('close');      jQuery      关闭自动补全
				autocomplate('disable');      jQuery      禁用自动补全
				autocomplate('enable');      jQuery      启用自动补全
				autocomplate('destroy');      jQuery      销毁自动补全
				autocomplate('widget');      jQuery         获取工具提示的jQuery对象
				autocomplate('search',value);      jQuery      在数据源中获取匹配的数据
		 */

	});
	//$('#email').autocomplete('search','a');

	/*
			事件
		autocompleteopen        显示时触发
		autocompleteclose        关闭时触发
		autocompletesearch        查找时触发
		autocompletefocus        获得焦点时触发
		autocompleteselect        选定时触发
		autocompletechange        改变时触发
		autocompleteresponse        搜索完毕后，显示之前
	 */

	$('#reg').on('autocompleteopen',function(){
		console.log("自动补全打开！");
	});





});