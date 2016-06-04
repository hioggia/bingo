gbx.define(['gbx/render/ui/component'],function(Component){

	var Button = Component.extend({
		ctor: function(skin,label){
			this.__node = new laya.ui.Button(skin,label);
		},
		get stateNum(){return this.__node.stateNum},
		set stateNum(v){this.__node.stateNum=v},
		get label(){return this.__node.label},
		set label(v){this.__node.label=v},
		get labelAlign(){return this.__node.labelAlign},
		set labelAlign(v){this.__node.labelAlign=v},
		get labelPadding(){return this.__node.labelPadding},
		set labelPadding(v){this.__node.labelPadding=v},
		get labelSize(){return this.__node.labelSize},
		set labelSize(v){this.__node.labelSize=v},
		get labelColors(){return this.__node.labelColors},
		set labelColors(v){this.__node.labelColors=v},
		get toggle(){return this.__node.toggle},
		set toggle(v){this.__node.toggle=v},
		get selected(){return this.__node.selected},
		set selected(v){this.__node.selected=v},
		//自定义的方法
		setSkinImage: function(image){
			this.__node.skin = image;
		},
		setClickHandler: function(context,handler){
			var args = Array.prototype.slice.call(arguments,2);
			args.unshift(this);
			this.__node.clickHandler = laya.utils.Handler.create(context,handler,args,false);//设置 button 的点击事件处理器。
		}
	});

	return Button;

});