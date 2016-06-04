gbx.define(['gbx/render/ui/slider'],function(Slider){

	var HSlider = Slider.extend({
		ctor: function(skin){
			this.__node = new laya.ui.HSlider(skin);
		}
	});

	return HSlider;

});