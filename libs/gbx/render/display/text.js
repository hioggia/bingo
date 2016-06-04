gbx.define(['gbx/render/display/sprite'],function(Sprite){

	var Text = Sprite.extend({
		ctor: function(){
			this.__node = new laya.display.Text();
		},
		get align(){return this.__node.align},
		set align(v){this.__node.align=v},
		get alpha(){return this.__node.alpha},
		set alpha(v){this.__node.alpha=v},
		get asPassword(){return this.__node.asPassword},
		set asPassword(v){this.__node.asPassword=v},
		get bgColor(){return this.__node.bgColor},
		set bgColor(v){this.__node.bgColor=v},
		get bold(){return this.__node.bold},
		set bold(v){this.__node.bold=v},
		get borderColor(){return this.__node.borderColor},
		set borderColor(v){this.__node.borderColor=v},
		get color(){return this.__node.color},
		set color(v){this.__node.color=v},
		get font(){return this.__node.font},
		set font(v){this.__node.font=v},
		get fontSize(){return this.__node.fontSize},
		set fontSize(v){this.__node.fontSize=v},
		get italic(){return this.__node.italic},
		set italic(v){this.__node.italic=v},
		get leading(){return this.__node.leading},
		set leading(v){this.__node.leading=v},
		get maxScrollX(){return this.__node.maxScrollX},
		get maxScrollY(){return this.__node.maxScrollY},
		get overflow(){return this.__node.overflow},
		set overflow(v){this.__node.overflow=v},
		get scrollX(){return this.__node.scrollX},
		set scrollX(v){this.__node.scrollX=v},
		get scrollY(){return this.__node.scrollY},
		set scrollY(v){this.__node.scrollY=v},
		get padding(){return this.__node.padding},
		set padding(v){this.__node.padding=v},
		get stroke(){return this.__node.stroke},
		set stroke(v){this.__node.stroke=v},
		get strokeColor(){return this.__node.strokeColor},
		set strokeColor(v){this.__node.strokeColor=v},
		get text(){return this.__node.text},
		set text(v){this.__node.text=v},
		get textHeight(){return this.__node.textHeight},
		get textWidth(){return this.__node.textWidth},
		get valign(){return this.__node.valign},
		set valign(v){this.__node.valign=v},
		get wordWrap(){return this.__node.wordWrap},
		set wordWrap(v){this.__node.wordWrap=v},
		changeText: function(text){
			/*快速更改显示文本。不进行排版计算，效率较高。
			如果只更改文字内容，不更改文字样式，建议使用此接口，能提高效率。*/
			this.__node.changeText(text);
		}
	});

	var overflowSettingList = {
		get HIDDEN(){return laya.display.Text.HIDDEN},
		get SCROLL(){return laya.display.Text.SCROLL},
		get VISIBLE(){return laya.display.Text.VISIBLE}
	};

	Object.defineProperty(Text,'OVERFLOW',{
		get: function(){
			return overflowSettingList;
		}
	});

	return Text;

});
