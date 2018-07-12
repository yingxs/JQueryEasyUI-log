$(function(){

	$('input').click(function(){

		//$.ajax({
		//	url:'test.php',
		//	dataType:'json',
		//	type : 'POST',
		//	success : function(data){
		//		alert(data[0].url);
		//	}
		//});

		//跨域获取jsonp.php文件,失败
		//$.ajax({
		//	url:'http://www.yingxs.com/jsonp.php',
		//	dataType:'json',
		//	type : 'POST',
		//	success : function(data){
		//		//alert(data.a);
		//		alert(data.b);
		//		//alert(data.c);
		//	}
		//});



		//本地获取jsonp2文件，成功
		//$.getJSON('jsonp2.php?callback=?',function(data){
		//	alert(data.a);
		//	console.log(data);
		//});

		//获取远程jsonp2文件，成功
		//$.getJSON('http://yingxs.com/jsonp2.php',function(data){
		//	alert(data.a);
		//	console.log(data);
		//});


		//$ajax()获取远程数据
		//$.ajax({
		//	url:'http://www.yingxs.com/jsonp2.php?callback=?',
		//	dataType:'json',
		//	type : 'POST',
		//	success : function(data){
		//		//alert(data.a);
		//		alert(data.b);
		//		//alert(data.c);
		//	}
		//});

		//$ajax()获取远程数据
		//$.ajax({
		//	url:'http://www.yingxs.com/jsonp2.php',
		//	dataType:'jsonp',
		//	type : 'POST',
		//	success : function(data){
		//		//alert(data.a);
		//		alert(data.b);
		//		//alert(data.c);
		//	}
		//});




		/*
		//使用jqXHR的话建议使用.done(),.always(),和.fail()方法替代.success(),complate()和error();
		var jqXHR = $.ajax({
							url:'user.php',
							type : 'POST',
							data:{
								user:'yingxs',
								email:'yingxs888@126.com'
							}
						});
		jqXHR.done(function(response){
			alert(response+"1");
		}).done(function(response){
			alert(response+"2");

		});
		jqXHR.done(function(response){
			alert(response+"3");

		});

		*/




		var jqXHR = $.ajax('t1.php');
		var jqXHR2 = $.ajax('t2.php');

		/*

		jqXHR.done(function(response){
			alert(response)
		});
		jqXHR2.done(function(response){
			alert(response)
		});

		 */

		$.when(jqXHR,jqXHR2).done(function(r1,r2){
			alert(r1[0]);
			alert(r2[0]);
		});



	});

});