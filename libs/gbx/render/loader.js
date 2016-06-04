gbx.define(function(){

	var loader = {
		add: function(url,type){
			if(type){
				assets.push({url:url,type:type});
			}else{
				var m = url.match(/\.(\w+)$/);
				if(m && m[1] in laya.net.Loader.typeMap){
					type = laya.net.Loader.typeMap[m[1]];
					assets.push({url:url,type:type});
				}else{
					console.error('not supported resource type:', url);
				}
			}
		},
		load: function(context,complete,progress){
			Laya.loader.load(assets,Laya.Handler.create(this,function(){
				this.clear();
				complete.apply(context)
			},null,true), Laya.Handler.create(context,progress,null,false));
		},
		clear: function(){
			assets.length = 0;
		},
		get: function(url){
			return Laya.loader.getRes(url);
		}
	}, assets = [];

	return loader;
	
});