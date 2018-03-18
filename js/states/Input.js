BasicApp.Input = function(app){
	this.binary = [];
	this.tempo = 120;
	this.binaryText = null;
};

BasicApp.Input.prototype = {

	create: function(){
		var style = { font: '32pt Arial', fill: 'white', align: 'left', wordWrap: false };
		this.binaryText = this.add.text(20,640, '', style);

		this.addKeys();
		this.addPointers();
	},

	update: function(){
			var pos = this.latticePosition(this.input.activePointer.x, this.input.activePointer.y);
			this.tooltip.setText("x: " + pos.x + " y: " + pos.y);
			graphics.width = this.game.width;
			graphics.height = this.game.height;
	},

	render: function(){
		//this.draw(this.houses, this.sites);
	},

	shutdown: function(){
		this.clearEvents();
	},

	clearEvents: function(){
		this.input.mousePointer.rightButton.onDown.removeAll();
		this.input.mousePointer.leftButton.onDown.removeAll();

		this.run.onDown.removeAll();
		this.p.onDown.removeAll();
		this.h.onDown.removeAll();
		this.e.onDown.removeAll();
		this.r.onDown.removeAll();
		this.esc.onDown.removeAll();
	},

	addPointers: function(){
		this.input.mousePointer.rightButton.onDown.add(this.rightClick, this);

		this.input.mousePointer.leftButton.onDown.add(this.leftClick, this, 10);
		this.input.mousePointer.leftButton.onDown.add(this.draw, this, 0, this.houses, this.sites);
	},

	addKeys: function(){
		//Reset keys
		this.input.keyboard.reset();

		this.zero = this.input.keyboard.addKey(Phaser.Keyboard.ZERO);
		this.zero.onDown.add(this.zero, this, 0, this.binaryText);

		this.zeroNumpad = this.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_0);
		this.zeroNumpad.onDown.add(this.zero, this, 0, this.binaryText);

		this.one = this.input.keyboard.addKey(Phaser.Keyboard.ONE);
		this.one.onDown.add(this.one, this, 0, this.binaryText);

		this.oneNumpad = this.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_1);
		this.oneNumpad.onDown.add(this.one, this, 0, this.binaryText);

		this.del = this.input.keyboard.addKey(Phaser.Keyboard.DELETE);
		this.del.onDown.add(this.delete, this);
	},

	one: function(){
		this.binaryText.text += "1";
	},

	zero: function(){
		this.binaryText.text += "0";
	},

	delete: function(){
		this.binaryText.text = this.binaryText.test.substring(0,this.binaryText.text.length-1);
	}
};
