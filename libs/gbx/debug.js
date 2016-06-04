gbx.define(function(){

	return {
		on: function(){
			window.onerror = function(msg,url,line,column,err){
				alert(msg+'\r'+url+'\r'+line+'\r'+column+'\r'+err);
			}
			gbx.log = function(){
				var args = Array.prototype.slice.call(arguments,0);
				console.log.apply(console,args);
			};
			gbx.assert = function(){
				var args = Array.prototype.slice.call(arguments,0);
				console.assert.apply(console,args);
			};
			Laya.Stat.show(0,0);
		}
	};
});