gbx.define(['gbx/cclass','gbx/hubs'],function(Class,hubs){

	/*
		重要说明：
		Node是laya对象再封装的最基础类型
		结合了laya.display.Node和laya.EventDispatcher两个类
		为了支持再封装对象与laya对象之间的引用
		在laya对象上添加了一个新的属性__sealer
		该属性引用到封装它的Node对象上
		并hook了laya.display.Node对象的destroy方法
		在laya对象销毁时，移除对封装对象的引用关系

		Node继承自CClass类，你可以按照laya的继承关系，
		从Node继承laya的其它类或自己的类
		封装对象的init方法被用于实现该引用关系
		如果需要继承Node来封装其它laya对象时，请不要重写init方法，改用ctor方法
		若必须重写init方法，一定要把所有参数传给_super，来保证新的子类可以被extend:
		this._super.apply(this,Array.prototype.slice.call(0,arguments));

		另外，destroy不能保证会被调用到，如果需要在销毁时执行动作，请重写end方法
	*/

	var hookDestroy = laya.display.Node.prototype.destroy;
	laya.display.Node.prototype.destroy = function(){
		//gbx.log('laya object destroy');
		if('__sealer' in this){
			this.__sealer.end();
			delete this.__sealer.__node;
			delete this.__sealer;
		}
		hookDestroy.apply(this,Array.prototype.slice.call(0,arguments));
	}

	var Node = Class.extend({
		ctor: function(){
			this.__node = new laya.display.Node();
		},
		init: function(){
			this.ctor.apply(this,Array.prototype.slice.call(arguments,0));
			this.__node.__sealer = this;
			this._super();
		},
		get destroyed(){if(!this.__node){return true}return this.__node.destroyed},
		get displayInStage(){return this.__node.displayInStage},
		get name(){return this.__node.name},
		set name(v){this.__node.name=v},
		get numChildren(){return this.__node.numChildren},
		get parent(){return this.__node.parent.__sealer},
		get timer(){return this.__node.timer},
		set timer(v){this.__node.timer=v},
		addChild: function(child){
			this.__node.addChild(child.__node);
		},
		addChildAt: function(node,index){
			return this.__node.addChildAt(node.__node,index).__sealer;
		},
		addChildren: function(){ //override
			var relist = Array.prototype.slice.call(arguments,0);
			this.addChildrenList(relist);
		},
		ask: function(type,value){
			return this.__node.ask(type,value);
		},
		clearTimer: function(caller,method){
			this.__node.clearTimer(caller,method);
		},
		contains: function(node){
			return this.__node.contains(node.__node);
		},
		destroy: function(destroyChild){ //override
			if(destroyChild!=false){
				this.destroyChildren();
			}
			this.__node.destroy(false);
			//gbx.log('gbx object destroy');
		},
		destroyChildren: function(){ //override
			var max = this.__node.numChildren;
			for(var i=max-1;i>=0;i--){
				var child=this.__node.getChildAt(i);
				if(child.__sealer){
					child.__sealer.destroy();
				}else{
					child.destroy();
				}
			}
		},
		frameLoop: function(delay,caller,method,args,coverBefore){
			this.__node.frameLoop(delay,caller,method,args,coverBefore);
		},
		frameOnce: function(delay,caller,method,args,coverBefore){
			this.__node.frameOnce(delay,caller,method,args,coverBefore);
		},
		getChildAt: function(index){
			return this.__node.getChildAt(index).__sealer;
		},
		getChildByName: function(){
			var names = Array.prototype.slice.call(arguments,0);
			var c = this.__node.getChildByName(names.shift());
			if(c){
				if(names.length){
					return c.__sealer.getChildByName.apply(c.__sealer,names);
				}
				return c.__sealer;
			}
			return null;
		},
		getChildIndex: function(node){
			return this.__node.getChildIndex(node.__node);
		},
		getPrivates: function(){ //不明所以
			return this.__node.getPrivates();
		},
		removeChild: function(node){
			return this.__node.removeChild(node.__node).__sealer;
		},
		removeChildAt: function(index){
			return this.__node.removeChildAt(index).__sealer;
		},
		removeChildByName: function(name){
			return this.__node.removeChildByName(name).__sealer;
		},
		removeChildren: function(beginIndex,endIndex){
			return this.__node.removeChildren(beginIndex,endIndex).__sealer;
		},
		removeSelf: function(){
			return this.__node.removeSelf().__sealer;
		},
		replaceChild: function(newNode,oldNode){
			return this.__node.replaceChild(newNode,oldNode).__sealer;
		},
		setChildIndex: function(node,index){
			return this.__node.setChildIndex(node,index).__sealer;
		},
		timerLoop: function(delay,caller,method,args,coverBefore){
			this.__node.timerLoop(delay,caller,method,args,coverBefore);
		},
		timerOnce: function(delay,caller,method,args,coverBefore){
			this.__node.timerOnce(delay,caller,method,args,coverBefore);
		},
		//seal event dispatcher class
		event: function(type,data){
			return this.__node.event(type,data).__sealer;
		},
		hasListener: function(type){
			return this.__node.hasListener(type);
		},
		isMouseEvent: function(type){
			return this.__node.isMouseEvent(type);
		},
		off: function(type,caller,listener,onceOnly){
			return this.__node.off(type,caller,listener,onceOnly).__sealer;
		},
		offAll: function(type){
			return this.__node.offAll(type).__sealer;
		},
		on: function(type,caller,listener,args){
			return this.__node.on(type,caller,listener,args).__sealer;
		},
		once: function(type,caller,listener,args){
			return this.__node.once(type,caller,listener,args).__sealer;
		},
		get EVENT(){
			return laya.events.Event;
		},
		//create method to hide other api
		addChildrenList: function(list){
			for(var i=0;i<list.length;i++){
				this.addChild(list[i]);
			}
		},
		eachChildrenList: function(iterator,context){
			var max = this.__node.numChildren, list = [];
			context = context || this;
			for(var i=0;i<max;i++){
				var child = this.__node.getChildAt(i);
				if(child.__sealer){
					list.push(child.__sealer);
				}
			}
			for(var i=0;i<list.length;i++){
				iterator.call(context,list[i]);
			}
		},
		addToStage: function(zOrder){
			if(this.__node!=Laya.stage){
				if(zOrder==undefined){
					zOrder = 1;
				}
				Laya.stage.addChild(this.__node);
				this.__node.zOrder = zOrder;
			}
		},
		removeFromStage: function(){
			if(this.__node!=Laya.stage){
				Laya.stage.removeChild(this.__node);
			}
		}
	});

	return Node;
	
});