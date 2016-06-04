gbx.define(['gbx/render/display/sprite'],function(Sprite){

	var Component = Sprite.extend({
		ctor: function(){
			this.__node = new laya.ui.Component();
		},
		init: function(){
			this._super.apply(this,Array.prototype.slice.call(arguments,0));
			this.__nodeData = {};
		},
		get bottom(){return this.__node.bottom},
		set bottom(v){this.__node.bottom=v},
		get centerX(){return this.__node.centerX},
		set centerX(v){this.__node.centerX=v},
		get centerY(){return this.__node.centerY},
		set centerY(v){this.__node.centerY=v},
		get disabled(){return this.__node.disabled},
		set disabled(v){this.__node.disabled=v},
		get displayHeight(){return this.__node.displayHeight},
		get displayWidth(){return this.__node.displayWidth},
		get left(){return this.__node.left},
		set left(v){this.__node.left=v},
		get measureHeight(){return this.__node.measureHeight},
		get measureWidth(){return this.__node.measureWidth},
		get right(){return this.__node.right},
		set right(v){this.__node.right=v},
		get scaleX(){return this.__node.scaleX},
		get scaleY(){return this.__node.scaleY},
		get top(){return this.__node.top},
		set top(v){this.__node.top=v},
		//自己加的
		setData: function(key,value){
			this.__nodeData[key]=value;
		},
		getData: function(key){
			return this.__nodeData[key];
		},
		destroy: function(){
			this.__nodeData = null;
			this._super();
		}
	});

	return Component;

});