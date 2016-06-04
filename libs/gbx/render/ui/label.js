gbx.define(['gbx/render/ui/component'],function(Component){

	var Label = Component.extend({
		ctor: function(text){
			this.__node = new laya.ui.Label(text);
		},
		get align(){return this.__node.align},
		set align(v){this.__node.align=v},
		get asPassword(){return this.__node.asPassword},
		set asPassword(v){this.__node.asPassword=v},
		get bgColor(){return this.__node.bgColor},
		set bgColor(v){this.__node.bgColor=v},
		get bold(){return this.__node.bold},
		set bold(v){this.__node.bold=v},
		get borderColor(){return this.__node.borderColor},
		set borderColor(v){this.__node.borderColor=v},
		get color(){return this.__node.color},
		set color(v){this.__node.color=v},
		get font(){return this.__node.font},
		set font(v){this.__node.font=v},
		get fontSize(){return this.__node.fontSize},
		set fontSize(v){this.__node.fontSize=v},
		get italic(){return this.__node.italic},
		set italic(v){this.__node.italic=v},
		get leading(){return this.__node.leading},
		set leading(v){this.__node.leading=v},
		get padding(){return this.__node.padding},
		set padding(v){this.__node.padding=v},
		get stroke(){return this.__node.stroke},
		set stroke(v){this.__node.stroke=v},
		get strokeColor(){return this.__node.strokeColor},
		set strokeColor(v){this.__node.strokeColor=v},
		get text(){return this.__node.text},
		set text(v){this.__node.text=v},
		get textField(){return this.__node.textField},//文本控件实体 Text 实例。?
		get valign(){return this.__node.valign},
		set valign(v){this.__node.valign=v},
		get wordWrap(){return this.__node.wordWrap},
		set wordWrap(v){this.__node.wordWrap=v}
	});

	return Label;

});