gbx.define(['gbx/render/display/sprite'],function(Sprite){

	var Animation = Sprite.extend({
		ctor: function(url){
			this.__node = new laya.display.Animation();
		},
		get count(){return this.__node.count},
		get index(){return this.__node.index},
		set index(v){this.__node.index=v},
		get interval(){return this.__node.interval},
		set interval(v){this.__node.interval=v},
		get loop(){return this.__node.loop},
		set loop(v){this.__node.loop=v},
		clear: function(){
			this.__node.clear();
		},
		loadAtlas: function(url){
			this.__node.loadAtlas(url);
		},
		loadImages: function(urls){
			this.__node.loadImages(urls);
		},
		play: function(start,loop,name){
			this.__node.play(start,loop,name);
		},
		stop: function(){
			this.__node.stop();
		},
		onComplete: function(context,handler,args){
			this.on('complete',context,handler,args);
		}
	});

	return Animation;
});