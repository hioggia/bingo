gbx.define(['gbx/render/ui/box'],function(Box){

	var Group = Box.extend({
		ctor: function(labels,skin){
			this.__node = new laya.ui.Group(labels,skin);
		},
		get direction(){return this.__node.direction},
		set direction(v){this.__node.direction=v},
		get items(){return this.__node.items}, //items:Vector.<ISelect>?
		get labelBold(){return this.__node.labelBold},
		set labelBold(v){this.__node.labelBold=v},
		get labelColors(){return this.__node.labelColors},
		set labelColors(v){this.__node.labelColors=v},
		get labelPadding(){return this.__node.labelPadding},
		set labelPadding(v){this.__node.labelPadding=v},
		get labels(){return this.__node.labels},
		set labels(v){this.__node.labels=v},
		get labelSize(){return this.__node.labelSize},
		set labelSize(v){this.__node.labelSize=v},
		get labelStroke(){return this.__node.labelStroke},
		set labelStroke(v){this.__node.labelStroke=v},
		get labelStrokeColor(){return this.__node.labelStrokeColor},
		set labelStrokeColor(v){this.__node.labelStrokeColor=v},
		get selectedIndex(){return this.__node.selectedIndex},
		set selectedIndex(v){this.__node.selectedIndex=v},
		get selection(){return this.__node.selection},
		set selection(v){this.__node.selection=v},
		get skin(){return this.__node.skin},
		set skin(v){this.__node.skin=v},
		get space(){return this.__node.space},
		set space(v){this.__node.space=v},
		get stateNum(){return this.__node.stateNum},
		set stateNum(v){this.__node.stateNum=v},
		get strokeColors(){return this.__node.strokeColors},
		set strokeColors(v){this.__node.strokeColors=v},
		addItem: function(item,autoLayOut){
			return this.__node.addItem(item.__node,autoLayOut);
		},
		_commitMeasure: function(){
			this.__node.commitMeasure();
		},
		delItem: function(item,autoLayOut){
			this.__node.delItem(item.__node,autoLayOut);
		},
		initItems: function(){
			this.__node.initItems();
		},
		_preinitialize: function(){
			this.__node.preinitialize();
		},
		//自己加的,
		setSelectHandler: function(context,handler){
			this.__node.selectHandler = laya.utils.Handler.create(context,handler,[],false);
		}
	});

	return Group;

});