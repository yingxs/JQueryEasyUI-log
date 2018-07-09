$(function(){

	$('#search_button').button({
		disabled : false,           //是否禁用
		label : '搜索',               //按钮上的文字
		icons :{
			primary : 'ui-icon-search'                //按钮的前置图标
			//secondary : 'ui-icon-triangle-1-s'      //按钮的后置图标
		},
		text:true,              //当设置为false时，不会显示文字但是必须要有一个指定的图标
		create:function(){
			//alert("创建");
		}
	});
	/**

	    button(action,param)

	 jQuery button('disable') 禁用按钮
	 jQuery button('enable')  启用按钮
	 jQuery button('destroy')  销毁按钮
	 jQuery button('refresh')  销毁按钮
	 jQuery button('widget')  销毁按钮
	 jQuery button('widget')  销毁按钮
	 obj button('option',param)  获取按钮的options中param属性的值
	 jQuery button('option',param,value)  设置按钮的options中param属性的值




	$('#search_button').click(function(){
		alert('');
	});

	 */

	$('#reg').dialog({
		buttons : {
			'提交':function(){

			}
		}
	});
	//禁用提交属性1
	//$('#reg').parent().find('button').eq(1).button('disable');
	//禁用提交属性2
	//$('#reg').dialog('widget').find('button').eq(1).button('disable');

	//单选按钮初始化方式一
	//$('#reg input[type=radio] ').button();

	//单选按钮初始化方式二，整体初始化，div内部所有按钮都被初始化
	//$('#reg').buttonset();


	//局部初始化复选按钮
	$('#reg input[type=checkbox] ').button();





});