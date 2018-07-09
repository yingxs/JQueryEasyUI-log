$(function(){

	/**
	 * 自定义插件建议：
	 * 1.插件名季刊一使用jquery.[插件名].js,一面和其他库冲突
	 * 2.局部对象附加jquery.fn对象上，全局函数附加在jquery上
	 * 3.插件内部，this指向的的是当前的局部对象
	 * 4.可以通过this.each来遍历所有元素
	 * 5.所有的方法或插件，必须使用分号结尾，避免出现问题
	 * 6.插件应该返回jquery对象，以保证可以连缀
	 * 7.避免插件内部使用$,如果要使，请传递jQuery进去
	 *
	 */

	$('.list').eq(0).nav('orange');

});