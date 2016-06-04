gbx.define([
	'libs/layaair/laya.core.js',
	'libs/layaair/laya.webgl.js',
	'libs/layaair/laya.ui.js',
	'libs/layaair/laya.ani.js',
	'libs/layaair/laya.particle.js',
	'libs/layaair/laya.filters.js'
],function(){

	var stage = {
		get SCALE_MODE(){return scaleMode},
		get ORIENTATION(){return orientation},
		get ALIGNMENT(){return alignment},
		get VERTICAL_ALIGNMENT(){return verticalAlignment},
		get FRAME_SPEED(){return frameSpeed},

		set bgColor(v){Laya.stage.bgColor=v},
		get canvasRotation(){return Laya.stage.canvasRotation},
		get clientScaleX(){return Laya.stage.clientScaleX},
		get clientScaleY(){return Laya.stage.clientScaleY},
		get designHeight(){return Laya.stage.desginHeight},
		get designWidth(){return Laya.stage.desginWidth},
		get now(){return Laya.stage.now},
		get mouseX(){return Laya.stage.mouseX},
		get mouseY(){return Laya.stage.mouseY},
		get offset(){return Laya.stage.offset},
		initStageWithSize: function(width,height){Laya.init(width,height,laya.webgl.WebGL)},
		setScaleMode: function(scaleMode){Laya.stage.scaleMode=scaleMode},
		setOrientation: function(orientation){Laya.stage.screenMode=orientation},
		setAlignment: function(alignment){Laya.stage.alignH=alignment},
		setVerticalAligmnent: function(verticalAlignment){Laya.stage.alignV=verticalAlignment},
		setFrameSpeed: function(frameSpeed){Laya.stage.frameRate=frameSpeed},
		repaint: function(){Laya.stage.repaint()},
		parentRepaint: function(child){Laya.stage.parentRepaint(child.__node)},
		setScreenSize: function(screenWidth,screenHeight){Laya.stage.setScreenSize(screenWidth,screenHeight)},
		size: function(width,height){Laya.stage.size(width,height)}
	}, scaleMode = {
		get SHOW_ALL(){return laya.display.Stage.SCALE_SHOWALL},
		get EXTRACT_FIT(){return laya.display.Stage.SCALE_EXACTFIT},
		get NONE(){return laya.display.Stage.SCALE_NOSCALE},
		get NO_BORDER(){return laya.display.Stage.SCALE_NOBORDER},
		get FIXED_HEIGHT(){return laya.display.Stage.SCALE_FIXED_HEIGHT},
		get FIXED_WIDTH(){return laya.display.Stage.SCALE_FIXED_WIDTH},
		get FULL(){return laya.display.Stage.SCALE_FULL}
	}, orientation = {
		get LANDSCAPE(){return laya.display.Stage.SCREEN_HORIZONTAL},
		get PORTRAIT(){return laya.display.Stage.SCREEN_VERTICAL},
		get AUTO(){return laya.display.Stage.SCREEN_NONE}
	}, alignment = {
		get LEFT(){return laya.display.Stage.ALIGN_LEFT},
		get CENTER(){return laya.display.Stage.ALIGN_CENTER},
		get RIGHT(){return laya.display.Stage.ALIGN_RIGHT}
	}, verticalAlignment = {
		get TOP(){return laya.display.Stage.ALIGN_TOP},
		get MIDDLE(){return laya.display.Stage.ALIGN_MIDDLE},
		get BOTTOM(){return laya.display.Stage.ALIGN_BOTTOM}
	}, frameSpeed = {
		get FAST(){return laya.display.Stage.FRAME_FAST},
		get AUTO(){return laya.display.Stage.FRAME_MOUSE},
		get SLOW(){return laya.display.Stage.FRAME_SLOW}
	};

	return stage;

});