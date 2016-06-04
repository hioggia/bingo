gbx.define(['gbx/render/ui/component'],function(Component){

	var Box = Component.extend({
		ctor: function(){
			this.__node = new laya.ui.Box();
		}
	});

	return Box;

});