gbx.define(['gbx/render/ui/slider'],function(Slider){

	var VSlider = Slider.extend({
		ctor: function(skin){
			this.__node = new laya.ui.VSlider(skin);
		}
	});

	return VSlider;

});