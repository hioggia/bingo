gbx.define(function(){

	/* 使用checkUnlockState来判定是否可以直接播放音源

	SoundPlayer.checkUnlockState(function(result){
		if(!result){
			SoundPlayer.preloadBGM('bgm2.jpg');
			document.body.addEventListener('touchend',function bb(){
				SoundPlayer.playBGM('bgm2.jpg',0,158);
				document.body.removeEventListener('touchend',bb,false);
			},false);
		}else{
			SoundPlayer.playBGM('bgm2.jpg',0,158);
		}
	});*/
	
	var SoundPlayer = function(){

		if(!('AudioContext' in window) && !('webkitAudioContext' in window)){
			gbx.log('not support audio')
			return {
				checkUnlockState: function(callback){},
				setLoadedBuffer: function(url,audioBuffer){},
				preloadBGM: function(url){},
				volume: function(set){return 0},
				mute: function(set){return true},
				muteSE: function(set){return true},
				playBGM: function(url,loopStart,loopEnd){},
				stopBGM: function(){},
				setPlayingSoundMax: function(max){},
				playSE: function(url,callback){}
			};
		}

		var atx = new (window.AudioContext || window.webkitAudioContext)();
		var buffs = {}, playingBgm = null, playingSoundCount = 0, playingSoundMax = 5;
		var volume = 0.8, mute = false, muteSE = false;

		function loadUrl(url,callback){
			var xhr = new XMLHttpRequest();
			xhr.open('GET',url,true);
			xhr.responseType = 'arraybuffer';
			xhr.onload = function(){
				atx.decodeAudioData(xhr.response,function(buffer){
					buffs[url] = buffer;
					callback&&callback();
				});
			};
			xhr.send();
		}

		function createSource(url){
			var gain = atx.createGain();
			var src = atx.createBufferSource();
			src.connect(gain);
			src.buffer = buffs[url];
			gain.connect(atx.destination);
			gain.gain.value = volume;
			return {src:src,gain:gain.gain};
		}

		function swapBGM(url,loopStart,loopEnd){
			if(playingBgm!=null){
				var oldBgm = playingBgm;
				//oldBgm.gain.linearRampToValueAtTime(0,atx.currentTime+2);
				oldBgm.src.stop(atx.currentTime);
			}

			var newBgm = createSource(url);
			if(loopStart!=undefined && loopStart>0){

			}else{
				newBgm.src.loop = true;
				newBgm.src.loopStart = loopStart||0;
				newBgm.src.loopEnd = loopEnd||0;
			}
			
			//src.playbackRate.value=1;
			newBgm.src.start(atx.currentTime,0);
			/*if(oldBgm){
				newBgm.gain.value = 0;
				newBgm.gain.linearRampToValueAtTime(1,atx.currentTime+2);
			}*/
			playingBgm = newBgm;
		}

		return {
			checkUnlockState: function(callback){
				// create empty buffer and play it
				var buffer = atx.createBuffer(1, 1, 22050);
				var source = atx.createBufferSource();
				source.buffer = buffer;
				source.connect(atx.destination);
				source.start(0,0);

				// by checking the play state after some time, we know if we're really unlocked
				setTimeout(function() {
					if((source.playbackState === source.PLAYING_STATE || source.playbackState === source.FINISHED_STATE)) {
						callback(true);
					}else{
						callback(false);
					}
				}, 0);
			},
			setLoadedBuffer: function(url,audioBuffer){
				if(url in buffs){
					return;
				}
				buffs[url] = audioBuffer;
			},
			preloadBGM: function(url){
				if(url in buffs){
					//nothing todo
					return;
				}
				loadUrl(url);
			},
			volume: function(set){
				if(set!=undefined){
					volume = set;
					if(playingBgm!=null){
						playingBgm.gain.value = volume;
					}
				}else{
					return volume;
				}
			},
			mute: function(set){
				if(set!=undefined){
					mute = set;
					if(playingBgm!=null){
						playingBgm.src.stop(0);
					}
				}else{
					return mute;
				}
			},
			muteSE: function(set){
				if(set!=undefined){
					muteSE = set;
				}else{
					return muteSE;
				}
			},
			playBGM: function(url,loopStart,loopEnd){
				if(mute){
					return;
				}
				if(url in buffs){
					swapBGM(url,loopStart,loopEnd);
				}else{
					loadUrl(url,function(){
						swapBGM(url,loopStart,loopEnd);
					});
				}
			},
			stopBGM: function(){
				if(playingBgm!=null){
					playingBgm.src.stop(0);
				}
			},
			setPlayingSoundMax: function(max){
				playingSoundMax = max;
			},
			playSE: function(url,callback){
				if(muteSE){
					return;
				}
				if(playingSoundCount>playingSoundMax){
					return;
				}
				if(url in buffs){
					var src = createSource(url).src;
					playingSoundCount++;
					//src.onended = function(){playingSoundCount--}
					setTimeout(function(){
						playingSoundCount--;
						callback &&callback();
					},src.buffer.duration*1000);
					src.start(atx.currentTime,0);
				}else{
					loadUrl(url,function(){
						var src = createSource(url).src;
						playingSoundCount++;
						//src.onended = function(){playingSoundCount--}
						setTimeout(function(){
							playingSoundCount--;
							callback &&callback();
						},src.buffer.duration*1000);
						src.start(atx.currentTime,0);
					});
				}
			}
		};

	}();

	return SoundPlayer;

});