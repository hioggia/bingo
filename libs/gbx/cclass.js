gbx.define(['gbx/class','gbx/hubs'],function(Class,hubs){

	var CommunicableClass = Class.extend({
		init: function(){
			this.__subscribes = [];
		},
		unsubscribe: function(){
			var args = Array.prototype.slice.call(arguments,0);
			for(var i=this.__subscribes.length-1;i>=0;i--){
				if(this.__subscribes[i][0]==args[0] && this.__subscribes[i][1]==args[1] && (!args[2] || this.__subscribes[i][2]==args[2])){
					hubs.unsubscribe.apply(hubs,this.__subscribes[i]);
					this.__subscribes.splice(i,0);
					break;
				}
			}
		},
		unsubscribeAll: function(){
			for(var i=0;i<this.__subscribes.length;i++){
				hubs.unsubscribe.apply(hubs,this.__subscribes[i]);
			}
			this.__subscribes = [];
		},
		subscribe: function(){
			var args = Array.prototype.slice.call(arguments,0);
			hubs.subscribe.apply(hubs,args);
			this.__subscribes.push(args);
		},
		publish: function(){
			var args = Array.prototype.slice.call(arguments,0);
			hubs.publish.apply(hubs,args);
		},
		end: function(){
			this.unsubscribeAll();
		}
	});

	return CommunicableClass;

});