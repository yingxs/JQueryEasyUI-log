
;(function($){
/*

	//全局型
	$.extend({
		'nav':function(){
			$('.nav').css({
				"list-style":"none",
				'margin':0,
				'padding':0,
				'display':'none'
			});

			$('.nav').parent().hover(function(){
				$(this).find('.nav').slideDown('normal');
			},function(){
				$(this).find('.nav').stop().slideUp('normal');
			});

		}
	});

*/

	//局部型
	$.fn.extend({
		'nav':function(color){
			//在插件里的this.经过了一系列封装处理，this就表示jQuery对象
			//而不需要再次使用$()包装
			this.find('.nav').css({
				"list-style":"none",
				'margin':0,
				'padding':0,
				'display':'none',
				'color':color
			});

			this.find('.nav').parent().hover(function(){
				$(this).find('.nav').slideDown('normal');
			},function(){
				$(this).find('.nav').stop().slideUp('normal');
			});

			return this;
		}
	});

})(jQuery);






