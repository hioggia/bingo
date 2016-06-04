gbx.define(['gbx/render/ui/component'],function(Component){

	var Slider = Component.extend({
		ctor: function(skin){
			this.__node = new laya.ui.Slider(skin);
		},
		get allowClickBack(){return this.__node.allowClickBack},
		set allowClickBack(v){this.__node.allowClickBack=v},
		get max(){return this.__node.max},
		set max(v){this.__node.max=v},
		get min(){return this.__node.min},
		set min(v){this.__node.min=v},
		get showLabel(){return this.__node.showLabel},
		set showLabel(v){this.__node.showLabel=v},
		get skin(){return this.__node.skin},
		set skin(v){this.__node.skin=v},
		get tick(){return this.__node.tick},
		set tick(v){this.__node.tick=v},
		get value(){return this.__node.value},
		set value(v){this.__node.value=v},
		setChangeHandler: function(context,handler){
			this.__node.changeHandler = new Laya.Handler(context, handler);
		},
		setSlider: function(min,max,value){
			this.__node.setSlider(min,max,value);
		}
	});

	return Slider;

});