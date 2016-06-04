gbx.define(['gbx/render/ui/box'],function(Box){

	var Panel = Box.extend({
		ctor: function(){
			this.__node = new laya.ui.Panel();
		},
		get content(){
			return this.__node.content;
		},
		get hScrollBar(){
			return this.__node.hScrollBar;
		},
		get hScrollBarSkin(){
			return this.__node.hScrollBarSkin;
		},
		set hScrollBarSkin(v){
			this.__node.hScrollBarSkin=v;
		},
		get vScrollBar(){
			return this.__node.vScrollBar;
		},
		get vScrollBarSkin(){
			return this.__node.vScrollBarSkin;
		},
		set vScrollBarSkin(v){
			this.__node.vScrollBarSkin=v;
		},
		refresh: function(){
			this.__node.refresh();
		},
		scrollTo: function(x,y){
			this.__node.scrollTo(x,y);
		},
		_changeSize: function(){
			this.__node.changeSize();
		},
		_createChildren: function(){
			this.__node.createChildren();
		}
	});

	return Panel;

});