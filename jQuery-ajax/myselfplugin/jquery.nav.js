
;(function($){
/*

	//ȫ����
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

	//�ֲ���
	$.fn.extend({
		'nav':function(color){
			//�ڲ�����this.������һϵ�з�װ������this�ͱ�ʾjQuery����
			//������Ҫ�ٴ�ʹ��$()��װ
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





