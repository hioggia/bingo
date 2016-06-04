gbx.define(['gbx/render/ui/button'],function(Button){

	var Checkbox = Button.extend({
		ctor: function(skin,label){
			this.__node = new laya.ui.CheckBox(skin,label);
		}
	});

	return Checkbox;

});