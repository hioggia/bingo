gbx.define(['gbx/render/ui/box'],function(Box){

	var View = Box.extend({
		ctor: function(){
			this.__node = new laya.ui.View();
		}
	});

	Object.defineProperties(View,{
		'uiClassMap': {
			get: function(){return laya.ui.View.uiClassMap}
		},
		'uiMap': {
			get: function(){return laya.ui.View.uiMap}
		}
	});

	View.createComp = laya.ui.View.createComp;
	View.regComponent = laya.ui.View.regComponent;
	View.regViewRuntime = laya.ui.View.regViewRuntime;

	return View;

});