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

		//�����ȡjsonp.php�ļ�,ʧ��
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



		//���ػ�ȡjsonp2�ļ����ɹ�
		//$.getJSON('jsonp2.php?callback=?',function(data){
		//	alert(data.a);
		//	console.log(data);
		//});

		//��ȡԶ��jsonp2�ļ����ɹ�
		//$.getJSON('http://yingxs.com/jsonp2.php',function(data){
		//	alert(data.a);
		//	console.log(data);
		//});


		//$ajax()��ȡԶ������
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

		//$ajax()��ȡԶ������
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
		//ʹ��jqXHR�Ļ�����ʹ��.done(),.always(),��.fail()�������.success(),complate()��error();
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