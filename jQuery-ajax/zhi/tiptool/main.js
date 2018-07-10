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
	//$('#reg input[title]').tooltip();
	$('[title]').tooltip({
		/*
		 disabled      false/bool   是否禁止显示工具提示
		 context       无/string    设置titele内容
		 items         无/String    过滤其中的元素
		 tooltipClass  无/string    引入class形式的css样式
		 position      无           位置，使用对象的键值对赋值，有两个属性my和at表示坐标，my是以目标左下角为基准，at以my为基准
		 */
		//show : false,       //显示效果
		//hide : false,       //隐藏效果
		//track : true,       //是否跟随鼠标移动
		position:{
			my : 'left+5 center',
			at : 'right+5 center'
		}
		/*
			事件：
			create      创建时触发，(event,ui),此事件中ui为空
			open         打开时触发，(event,ui)，此事件中的ui有一个参数tooltip返回是工具的jQuery对象
			close       当提示工具关闭时调用，关闭的提示工具可以用tooltip('open')重新打开。返回的是工具提示的jQuery对象，此事件中的ui有一个参数是tooltip
		 */
		/*
			jQuery tooltip('open')     打开工具提示
			jQuery tooltip('close')    关闭工具提示
			jQuery tooltip('disable')  禁用工具提示
			jQuery tooltip('enable')   启用工具提示
			jQuery tooltip('destroy')  销毁工具提示
			jQuery tooltip('widget')   获取工具提示的jQuery对象
			object tooltip('option',param) 获取options中的子属性param的值
			jQuery tooltip('option',param,value) 设置options中的子属性param的值
		 */
	});

	//$('#pass').tooltip('open');

	$('#user').on('tooltipopen',function(){
		console.log("打开时触发");
	});
	$('#user').on('tooltipclose',function(){
		console.log("关闭时触发");
	});




});