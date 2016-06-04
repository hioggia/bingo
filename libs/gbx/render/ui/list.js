gbx.define(['gbx/render/ui/box'],function(Box){

	var Item = Box.extend({
		ctor: function(){},
		init: function(box){
			if('__sealer' in box){
				return box.__sealer;
			}else{
				this.__node = box;
				this._super();
			}
		}
	});

	var List = Box.extend({
		ctor: function(){
			this.__node = new laya.ui.List();
		},
		get array(){return this.__node.array;},
		set array(v){this.__node.array=v;},
		get cacheContent(){return this.__node.cacheContent;},
		set cacheContent(v){this.__node.cacheContent=v;},
		get cells(){return this.__node.cells;},
		get content(){return this.__node.content;},
		get hScrollBarSkin(){return this.__node.hScrollBarSkin;},
		set hScrollBarSkin(v){this.__node.hScrollBarSkin=v;},
		get length(){return this.__node.length;},
		get page(){return this.__node.page;},
		set page(v){this.__node.page=v;},
		get repeatX(){return this.__node.repeatX;},
		set repeatX(v){this.__node.repeatX=v;},
		get repeatY(){return this.__node.repeatY;},
		set repeatY(v){this.__node.repeatY=v;},
		get scrollBar(){return this.__node.scrollBar;},
		set scrollBar(v){this.__node.scrollBar=v;},
		get selectedIndex(){return this.__node.selectedIndex;},
		set selectedIndex(v){this.__node.selectedIndex=v;},
		get selectedItem(){return this.__node.selectedItem;},
		set selectedItem(v){this.__node.selectedItem;},
		get selectEnable(){return this.__node.selectEnable;},
		set selectEnable(v){this.__node.selectEnable=v;},
		get selection(){return this.__node.selection;},
		set selection(v){this.__node.selection=v;},
		get spaceX(){return this.__node.spaceX;},
		set spaceX(v){this.__node.spaceX=v;},
		get spaceY(){return this.__node.spaceY;},
		set spaceY(v){this.__node.spaceY=v;},
		get startIndex(){return this.__node.startIndex;},
		set startIndex(v){this.__node.startIndex=v;},
		get totalPage(){return this.__node.totalPage;},
		set totalPage(v){this.__node.totalPage=v;},
		get vScrollBarSkin(){return this.__node.vScrollBarSkin;},
		set vScrollBarSkin(v){this.__node.vScrollBarSkin=v;},
		addItem: function(source){
			this.__node.addItem(source);
		},
		addItemAt: function(source,index){
			this.__node.addItemAt(source,index);
		},
		changeItem: function(index,source){
			this.__node.changeItem(index,source);
		},
		_changeSize: function(){
			this.__node.changeSize();
		},
		_createChildren: function(){
			this.__node.createChildren();
		},
		_createItem: function(){
			return this.__node.createItem();
		},
		deleteItem: function(index){
			this.__node.deleteItem(index);
		},
		deleteItemByName: function(name){
			this.__node.removeChildByName(name);
		},
		getCell: function(index){
			return this.__node.getCell(index);
		},
		getChildIndex: function(node){
			return this.__node.getChildIndex(node);
		},
		getItem: function(index){
			return this.__node.getItem(index);
		},
		initItems: function(){
			this.__node.initItems();
		},
		refresh: function(){
			this.__node.refresh();
		},
		_renderItem: function(cell,index){
			this.__node.renderItem(cell,index);
		},
		scrollTo: function(index){
			this.__node.scrollTo(index);
		},
		setContentSize: function(width,height){
			this.__node.setContentSize(width,height);
		},
		setItem: function(index,source){
			this.__node.setItem(index,source);
		},
		scrollTweenTo: function(index,time){ //从tweenTo改名
			this.__node.tweenTo(index,time);
		},
		//自己添加的方法
		set direction(v){
			if(v==List.DIRECTION.HORIZONTAL){
				this.__node.hScrollBarSkin = '';
			}else if(v==List.DIRECTION.VERTICAL){
				this.__node.vScrollBarSkin = '';
			}
		},
		setMouseHandler: function(context,handler){
			this.__node.mouseHandler = laya.utils.Handler.create(context,handler,null,false);
		},
		setRenderHandler: function(context,handler){
			this.__node.renderHandler = laya.utils.Handler.create(context,function(cell,idx){
				handler.call(context,new Item(cell),idx);
			},null,false);
		},
		setSelectHandler: function(context,handler){
			this.__node.selectHandler = laya.utils.Handler.create(context,handler,null,false);
		},
		setCellSize: function(width,height){
			function Item(){
				Item.__super.call(this);
				this.size(width,height);
			}
			Laya.class(Item, null, laya.ui.Box);
			this.__node.itemRender = Item;
		}
	});

	Object.defineProperty(List,'DIRECTION',{
		get: function(){
			return {
				'HORIZONTAL': 'horizontal',
				'VERTICAL': 'vertical'
			};
		}
	});

	return List;

});