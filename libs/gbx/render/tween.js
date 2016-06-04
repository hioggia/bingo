gbx.define(['gbx/class'],function(Class){

	//tween会被回收到对象池中，不会发生destroy

	var Tween = Class.extend({
		init: function(tween){
			if(tween && tween.__className && tween.__className=='laya.utils.Tween'){
				this.__node = tween;
			}else{
				this.__node = new laya.utils.Tween();
			}
			this.__node.__sealer = this;
		},
		get gid(){
			return this.__node.gid;
		},
		clear: function(){
			this.__node.clear();
		},
		complete: function(){
			this.__node.complete();
		},
		from: function(target,props,duration,timingFunction,complete,context,delay,coverBefore){
			var ease = getLayaTimingFunctionByName(timingFunction);
			var handler = makeHandler(target,context,complete);
			return this.__node.from(target.__node,props,duration,ease,handler,delay,coverBefore).__sealer;
		},
		pause: function(){
			this.__node.pause();
		},
		recover: function(){
			this.__node.recover();
		},
		restart: function(){
			this.__node.restart();
		},
		resume: function(){
			this.__node.resume();
		},
		setStartTime: function(startTime){
			this.__node.setStartTime(startTime);
		},
		to: function(target,props,duration,timingFunction,complete,context,delay,coverBefore){
			var ease = getLayaTimingFunctionByName(timingFunction);
			var handler = makeHandler(target,context,complete);
			return this.__node.to(target.__node,props,duration,ease,handler,delay,coverBefore).__sealer;
		},
		updateEase: function(time){
			this.__node.updateEase(time);
		}
	});

	Tween.clear = function(tween){
		laya.utils.Tween.clear(tween.__node);
	};
	Tween.clearAll = function(target){
		laya.utils.Tween.clearAll(target.__node);
	};
	Tween.from = function(target,props,duration,timingFunction,complete,context,delay,coverBefore,autoRecover){
		var ease = getLayaTimingFunctionByName(timingFunction);
		var handler = makeHandler(target,context,complete);
		var _tween = laya.utils.Tween.from(target.__node,props,duration,ease,handler,delay,coverBefore,autoRecover);
		if(_tween.__sealer){
			return _tween.__sealer;
		}
		return new Tween(_tween);
	};
	Tween.to = function(target,props,duration,timingFunction,complete,context,delay,coverBefore,autoRecover){
		var ease = getLayaTimingFunctionByName(timingFunction);
		var handler = makeHandler(target,context,complete);
		var _tween = laya.utils.Tween.to(target.__node,props,duration,ease,handler,delay,coverBefore,autoRecover);
		if(_tween.__sealer){
			return _tween.__sealer;
		}
		return new Tween(_tween);
	};

	var timingFunctionList = {
		get strongIn(){return 'strongIn'},
		get strongOut(){return 'strongOut'},
		get strongInOut(){return 'strongInOut'},
		get sineIn(){return 'sineIn'},
		get sineOut(){return 'sineOut'},
		get sineInOut(){return 'sineInOut'},
		get quintIn(){return 'quintIn'},
		get quintOut(){return 'quintOut'},
		get quintInOut(){return 'quintInOut'},
		get quartIn(){return 'quartIn'},
		get quartOut(){return 'quartOut'},
		get quartInOut(){return 'quartInOut'},
		get QuadIn(){return 'quadIn'},
		get QuadOut(){return 'quadOut'},
		get QuadInOut(){return 'quadInOut'},
		get linearIn(){return 'linearIn'},
		get linearOut(){return 'linearOut'},
		get linearInOut(){return 'linearInOut'},
		get expoIn(){return 'expoIn'},
		get expoOut(){return 'expoOut'},
		get expoInOut(){return 'expoInOut'},
		get elasticIn(){return 'elasticIn'},
		get elasticOut(){return 'elasticOut'},
		get elasticInOut(){return 'elasticInOut'},
		get cubicIn(){return 'cubicIn'},
		get cubicOut(){return 'cubicOut'},
		get cubicInOut(){return 'cubicInOut'},
		get circIn(){return 'circIn'},
		get circOut(){return 'circOut'},
		get circInOut(){return 'circInOut'},
		get bounceIn(){return 'bounceIn'},
		get bounceOut(){return 'bounceOut'},
		get bounceInOut(){return 'bounceInOut'},
		get backIn(){return 'backIn'},
		get backOut(){return 'backOut'},
		get backInOut(){return 'backInOut'},
		get linearNone(){return 'linearNone'}
	};

	Object.defineProperty(Tween,'TimingFunction',{
		get: function(){
			return timingFunctionList;
		}
	});

	function makeHandler(target,context,complete){
		if(typeof complete=='function'){
			if(context==null){
				context=target;
			}
			var handler = new Laya.Handler(context,complete,null,true);
		}else{
			handler = null;
		}
		return handler;
	}

	function getLayaTimingFunctionByName(name){
		if(name in timingFunctionList){
			return Laya.Ease[name];
		}
		return laya.utils.Tween.easeNone;
	}

	return Tween;

});