gbx.define(['gbx/render/ui/view'],function(View){

	var Dialog = View.extend({
		ctor: function(){
			this.__node = new laya.ui.Dialog();
		},
		get dragArea(){return this.__node.dragArea},
		set dragArea(v){this.__node.dragArea=v},
		get isPopup(){return this.__node.isPopup},
		get popupCenter(){return this.__node.popupCenter},
		set popupCenter(v){this.__node.popupCenter=v},
		close: function(type){
			this.__node.close(type);
		},
		closeAll: function(){
			this.__node.closeAll();
		},
		_initialize: function(){
			this.__node.initialize();
		},
		popup: function(closeOther){
			this.__node.popup(closeOther);
		},
		show: function(closeOther){
			this.__node.show(closeOther);
		},
		setCloseHandler: function(context,handler){}
	});

	return Dialog;

});