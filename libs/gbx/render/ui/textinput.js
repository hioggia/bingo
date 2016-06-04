gbx.define(['gbx/render/ui/label'],function(Label){

	var TextInput = Label.extend({
		ctor: function(text){
			this.__node = new laya.ui.TextInput(text);
		},
		get bg(){return this.__node.bg},
		set bg(v){this.__node.bg=v},
		get clearOnFocus(){return this.__node.clearOnFocus},
		set clearOnFocus(v){this.__node.clearOnFocus=v},
		get editable(){return this.__node.editable},
		set editable(v){this.__node.editable=v},
		get inputElementXAdjuster(){return this.__node.inputElementXAdjuster},
		set inputElementXAdjuster(v){this.__node.inputElementXAdjuster=v},
		get inputElementYAdjuster(){return this.__node.inputElementYAdjuster},
		set inputElementYAdjuster(v){this.__node.inputElementYAdjuster=v},
		get maxChars(){return this.__node.maxChars},
		set maxChars(v){this.__node.maxChars=v},
		get multiline(){return this.__node.multiline},
		set multiline(v){this.__node.multiline=v},
		get restrict(){return this.__node.restrict},
		set restrict(v){this.__node.restrict=v},
		get sizeGrid(){return this.__node.sizeGrid},
		set sizeGrid(v){this.__node.sizeGrid=v},
		get skin(){return this.__node.skin},
		set skin(v){this.__node.skin=v},
		get title(){return this.__node.title},
		set title(v){this.__node.title=v},
		select: function(){
			this.__node.select();
		}
	});

	return TextInput;

});