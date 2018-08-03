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
			iconCls : 'icon-help',
			handler : function(){
				alert('help');
			}
		},{

		}],
		//collapsed : true,        //默认初始化时，面板是折叠的
		//minimized : true,        //默认初始化时，面板最小化的
		//maximized : true,        //默认初始化时，面板最小化的
		//closed : true           //默认，在关闭状态下
		href:'content.php',
		loadingMessage:'加载中...',  //加载中显示的message字符串
		extractor : function(data){     //返回的数据处理函数，data就是返回的数据
			console.log(data);
			return "返回的数据："+data;
		}

	});


	$('#box').panel('panel').css('position','absolute');



});

