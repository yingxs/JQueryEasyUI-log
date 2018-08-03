$(function(){



	$('#box').panel({
		//id:"pox",        //面板的ID，默认为null
		title:"标题",      //面板显示的标题文本
		width:500,          //设置宽度
		height:150,         //设置高度
		iconCls:"icon-search",         //设置面板左上角的16*16图标css类
		left:100,
		top:100,
		cls:"a",             //添加一个CSS类ID到面板
		headerCls:"b",             //添加一个CSS类ID到面板头部
		bodyCls:"c",             //添加一个CSS类ID到正文部分
		style:{},                 //添加一个指定的样式到面板部分，默认为{}，如果添加了与当前样式冲突的样式，会无效
		//fit:true,                   //当设置为true的时候面板大小将会自适应父容器，默认为false
		//border:true,                //是否显示边框
		//doSize:true,                 //当设置为true的时候，在面板被创建的时候将重置大小和重新布局，也就是将会载入我们设置的属性大小信息
		//noheader:true,             //当设置为true,将不会创建面板标题，默认为false
		//content:"面板主体内容",
		collapsible:true,              //定义是否显示可折叠按钮，默认为false
		minimizable:true,             //定义是否显示最小化按钮，默认为false
		maximizable:true,             //定义是否显示最大化按钮，默认为false
		closeable:true,             //定义是否显示关闭按钮，默认为false

		//tools:'#tt',                //自定义工具菜单，第一种写法
		tools:[{
			iconCls : 'icon-reload',
			handler : function(){
				$('#box').panel('refresh');
			}
		},{

		}],
		//collapsed : true,        //默认初始化时，面板是折叠的
		//minimized : true,        //默认初始化时，面板最小化的
		//maximized : true,        //默认初始化时，面板最小化的
		//closed : true           //默认，在关闭状态下
		href:'content.php',
		loadingMessage:'加载中...',  //加载中显示的message字符串
		/*
		extractor : function(data){     //返回的数据处理函数，data就是返回的数据
			console.log(data);
			return "返回的数据："+data;
		},
		onBeforeLoad : function(){
			console.log("远程加载之前触发...");
		},
		onLoad : function(){
			console.log("远程加载之后触发...");
		},
		onResize: function (width,height) {
			console.log(width,height);
		}*/

	});



	/*

			事件列表            传参           说明
			 onBeforeLoad        none        在加载远程数据之前触发
			 onLoad              none        在加载远程数据时触发
			 onBeforeOpen        none        在打开面板之前触发,返回false可以取消打开操作
			 onOpen              none        在打开面板之后触发
			 onBeforeClose       none        在关闭面板之前触发,返回false可以取消关闭操作
			 onClose             none        在关闭面板之后触发
			 onBeforeClose       none        在关闭面板之前触发,返回false可以取消操作
			 onClose             none        在关闭面板之后触发
			 onBeforeDestroy     none        在销毁面板之前触发,返回false可以取消操作
			 onDestroy           none        在销毁面板之后触发
			 onBeforeCollapse    none        在折叠面板之前触发,返回false可以取消操作
			 onCollapse          none        在折叠面板之后触发
			 onBeforeExpand      none        在面板展开之前触发,返回false可以取消操作
			 onExpand            none        在面板展开之后触发
			 onResize         width,height   在面板改变大小之后触发,width,height分别是新的宽度和新的高度
			 onMove           left,top       在面板移动之后触发，left,top分别是新的左边距位置，和新的上边距位置
			 onMaximize          none         在窗口最大化之后触发
			 onRestore          none         在窗口恢复到原始大小之后触发
			 onMinimize          none         在窗口最小化之后触发
	 */


	/*

			方法列表                参数              说明
			options                none             返回属性对象
			panel                  none             返回面板对象
			header                 none             返回面板头对象
			body                   none             返回面板主体对象
			setTitle               title            设置面板头的标题文本
			open                   forceOpen        打开面板，当forceOpen参数设置为true的时候，打开面板时候将跳过onBeforeOpen回调函数
			close                  forceClose       关闭面板，当forceClose参数设置为true的时候，关闭面板时候将跳过onBeforeClose回调函数
			destroy                forceDestroy     当forceClose参数设置为true的时候，打开面板时候将跳过onBeforeDestroy回调函数
			refresh                 href            刷新页面用来加载远程数据
			resize                  options          这是面板的大小和布局，包含下列属性,width,height,left,top
			move                    options         移动面板到一个新位置，参数对象包含left和top
			maximize                none            最大化到容器大小
			minimize                none            最小化
			restore                 none            恢复最大化面板回到原来的大小和位置
			collapse                none           折叠面板
			expand                  none           展开面板


	 */



	/*

	$('#box').panel('panel').css('position','absolute');


	$(document).click(function(){
		$('#box').panel('resize',{
			'width':600,
			'height':300
		});
	});
*/


	//console.log($('#box').panel('options'));
	//console.log($('#box').panel('panel'));          //返回面板的jq包装对象
	//console.log($('#box').panel('header'));          //返回面板的jq包装对象
	//console.log($('#box').panel('body'));          //返回面板的jq包装对象



});


//我们可以使用$.fn.panel.defaults重写默认对象
//$.fn.panel.defaults.border=false;
