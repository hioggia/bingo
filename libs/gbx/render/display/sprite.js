gbx.define(['gbx/render/display/node','gbx/render/tween'],function(Node,Tween){

	var Sprite = Node.extend({
		ctor: function(url){
			this.__node = new laya.display.Sprite(url);
		},
		get alpha(){return this.__node.alpha},
		set alpha(v){this.__node.alpha=v},
		get autoSize(){return this.__node.autoSize},
		set autoSize(v){this.__node.autoSize=v},
		get blendMode(){return this.__node.blendMode},
		set blendMode(v){this.__node.blendMode=v},
		get cacheAs(){return this.__node.cacheAs},
		set cacheAs(v){this.__node.cacheAs=v},
		get cacheAsBitmap(){return this.__node.cacheAsBitmap},
		set cacheAsBitmap(v){this.__node.cacheAsBitmap=v},
		get enableRenderMerge(){return this.__node.enableRenderMerge},
		set enableRenderMerge(v){this.__node.enableRenderMerge=v},
		get filters(){return this.__node.filters},  //filters:Array
		set filters(v){this.__node.filters=v},
		get graphics(){return this.__node.graphics},  //graphics:Graphics
		set graphics(v){this.__node.graphics=v},
		get height(){return this.__node.height},
		set height(v){this.__node.height=v},
		get hitArea(){return this.__node.hitArea},  //hitArea:Rectangle
		set hitArea(v){this.__node.hitArea=v},
		get mask(){return new Sprite(this.__node.mask)},  //mask:Sprite *
		set mask(v){this.__node.mask=v.__node},
		get mouseEnabled(){return this.__node.mouseEnabled},
		set mouseEnabled(v){this.__node.mouseEnabled=v},
		get mouseThrough(){return this.__node.mouseThrough},
		set mouseThrough(v){this.__node.mouseThrough=v},
		get mouseX(){return this.__node.mouseX},
		get mouseY(){return this.__node.mouseY},
		get optimizeFloat(){return this.__node.optimizeFloat},
		set optimizeFloat(v){this.__node.optimizeFloat=v},
		get pivotX(){return this.__node.pivotX},
		set pivotX(v){this.__node.pivotX=v},
		get pivotY(){return this.__node.pivotY},
		set pivotY(v){this.__node.pivotY=v},
		get rotation(){return this.__node.rotation},
		set rotation(v){this.__node.rotation=v},
		get scaleX(){return this.__node.scaleX},
		set scaleX(v){this.__node.scaleX=v},
		get scaleY(){return this.__node.scaleY},
		set scaleY(v){this.__node.scaleY=v},
		get scrollRect(){return this.__node.scrollRect},  //scrollRect:Rectangle
		set scrollRect(v){this.__node.scrollRect=v},
		get skewX(){return this.__node.skewX},
		set skewX(v){this.__node.skewX=v},
		get skewY(){return this.__node.skewY},
		set skewY(v){this.__node.skewY=v},
		get stage(){return this.__node.stage},  //stage:Stage
		get staticCache(){return this.__node.staticCache},
		set staticCache(v){this.__node.staticCache=v},
		get transform(){return this.__node.transform},  //transform:Matrix
		set transform(v){this.__node.transform=v},
		get viewHeight(){return this.__node.viewHeight},
		get viewWidth(){return this.__node.viewWidth},
		get visible(){return this.__node.visible},
		set visible(v){this.__node.visible=v},
		get width(){return this.__node.width},
		set width(v){this.__node.width=v},
		get x(){return this.__node.x},
		set x(v){this.__node.x=v},
		get y(){return this.__node.y},
		set y(v){this.__node.y=v},
		get zOrder(){return this.__node.zOrder},
		set zOrder(v){this.__node.zOrder=v},
		applyFilters: function(){
			this.__node.applyFilters();
		},
		ask: function(type,value){
			return this.__node.ask(type,value);
		},
		boundPointsToParent: function(ifRotate){
			return this.__node.boundPointsToParent(ifRotate);
		},
		childChanged: function(child){
			this.__node.childChanged(child.__node);
		},
		customRender: function(context,x,y){
			this.__node.customRender(context,x,y);
		},
		drawToCanvas: function(canvasWidth,canvasHeight,offsetX,offsetY){
			return this.__node.drawToCanvas(canvasWidth,canvasHeight,offsetX,offsetY);
		},
		fromParentPoint: function(point){
			return this.__node.fromParentPoint(point);
		},
		getBounds: function(){
			return this.__node.getBounds();
		},
		getGraphicBounds: function(){
			return this.__node.getGraphicBounds();
		},
		getMousePoint: function(){
			return this.__node.getMousePoint();
		},
		getSelfBounds: function(){
			return this.__node.getSelfBounds();
		},
		globalToLocal: function(point,createNewPoint){
			return this.__node.globalToLocal(point,createNewPoint);
		},
		hitTestPoint: function(x,y){
			return this.__node.hitTestPoint(x,y);
		},
		destroyChildren: function(){
			return this.__node.destroyChildren();
		},
		isRepaint: function(){
			return this.__node.isRepaint();
		},
		loadImage: function(url,x,y,width,height,complete){
			this.__node.graphics.clear();
			this.__node.loadImage(url,x,y,width,height,complete);
			return this;
		},
		localToGlobal: function(point,createNewPoint){
			return this.__node.localToGlobal(point,createNewPoint);
		},
		parentRepaint: function(child){
			this.__node.parentRepaint(child.__node);
		},
		pivot: function(x,y){
			this.__node.pivot(x,y);
			return this;
		},
		pos: function(x,y){
			this.__node.pos(x,y);
			return this;
		},
		reCache: function(){
			this.__node.reCache();
		},
		render: function(context,x,y){
			this.__node.render(context,x,y);
		},
		repaint: function(){
			this.__node.repaint();
		},
		scale: function(scaleX,scaleY){
			this.__node.scale(scaleX,scaleY);
			return this;
		},
		setBounds: function(bound){
			this.__node.setBounds(bound);
		},
		setStyle: function(value){
			this.__node.setStyle(value);
		},
		setValue: function(name,value){
			this.__node.setValue(name,value);
		},
		size: function(width,height){
			this.__node.size(width,height);
			return this;
		},
		skew: function(skewX,skewY){
			this.__node.skew(skewX,skewY);
			return this;
		},
		startDrag: function(area,hasInertia,elasticDistance,elasticBackTime,data,disableMouseEvent){
			this.__node.startDrag(area,hasInertia,elasticDistance,elasticBackTime,data,disableMouseEvent);
		},
		stopDrag: function(){
			this.__node.stopDrag();
		},
		toParentPoint: function(point){
			return this.__node.toParentPoint(point);
		},
		updateOrder: function(){
			this.__node.updateOrder();
		},
		//自定义的方法
		pivotToCenter: function(){
			this.pivotX=this.width/2;
			this.pivotY=this.height/2;
		},
		tweenTo: function(props,duration,timingFunction,complete,context,delay){
			Tween.to(this,props,duration,timingFunction,complete,context,delay);
		},
		tweenFrom: function(props,duration,timingFunction,complete,context,delay){
			Tween.from(this,props,duration,timingFunction,complete,context,delay);
		},
		tweenCancel: function(){
			Tween.clearAll(this);
		},
		setImage: function(image){ //将来改用atlas时只需要修改此方法
			this.loadImage(image);
		}
	});

	return Sprite;
});