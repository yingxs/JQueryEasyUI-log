$(function(){


	//遍历数组
	var arr = ['张三','李四','王五','马六'];
	$.each(arr,function(index,value){
		$('#box').html( $('#box').html() + (index+1)+'.' + value + '<br/>' );
	});


	//遍历对象
	$.each($.ajax(),function(name,fn){
		$('#box').html( $('#box').html()+ fn +'<br/><br/>' );
	});



	//数据过滤
	var arr = [4,2,6,9,11,25,38,59];
	var arrGrep = $.grep(arr,function(element,index){
		return index < 5 && element < 6;
	});

	//修改数据
	//$.map()

	//获得元素下标
	var arr = [4,2,6,9,11,25,38,59];
	alert($.inArray(11,arr));           //4
	alert($.inArray(5,arr));           //-1


});