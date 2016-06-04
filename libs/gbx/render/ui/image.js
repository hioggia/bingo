gbx.define(['gbx/render/ui/component'],function(Component){

	var Image = Component.extend({
		ctor: function(src){
			this.__node = new laya.ui.Image(src);
		},
		get alpha(){return this.__node.alpha},
		set alpha(v){this.__node.alpha=v},
		get x(){return this.__node.x},
		set x(v){this.__node.x=v},
		get y(){return this.__node.y},
		set y(v){this.__node.y=v},
		pos: function(x,y){
			this.__node.pos(x,y);
			return this;
		},
	});

	return Image;

});