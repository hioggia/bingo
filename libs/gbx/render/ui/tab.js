gbx.define(['gbx/render/ui/group'],function(Group){

	var Tab = Group.extend({
		ctor: function(labels,skin){
			this.__node = new laya.ui.Tab(labels,skin);
		}
	});

	return Tab;

});