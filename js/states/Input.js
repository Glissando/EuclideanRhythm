BasicApp.Input = function(app){
	this.binary = [];
	this.binaryText = null;
	this.maxLength = 16;
	this.length = 0;
	this.generate = null;
	//keys
	this.one = null;
	this.oneNumpad = null;
	this.zero = null;
	this.zeroNumpad = null;
	this.del = null;
};

BasicApp.Input.prototype = {

	create: function(){
		var style = { font: '32pt Arial', fill: 'white', align: 'left', wordWrap: false };
		this.binaryText = this.add.text(200,100, '', style);

		this.generate = this.game.add.button(300,640, 'generate', this.generate, this);

		this.addKeys();
		this.addPointers();
	},

	update: function(){
	},

	render: function(){
		//this.draw(this.houses, this.sites);
	},

	shutdown: function(){
		this.length = 0;
		this.binaryText.setText('');
		this.binary = [];
		this.clearEvents();
	},

	clearEvents: function(){
		this.input.mousePointer.rightButton.onDown.removeAll();
		this.input.mousePointer.leftButton.onDown.removeAll();

		this.input.keyboard.reset();
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
		if(this.length < this.maxLength){
			this.binaryText.setText(this.binaryText.text+"1");
			this.binary.push(1);
			this.length++;
		}
	},

	zero: function(){
		if(this.length < this.maxLength){
			this.binaryText.setText(this.binaryText.text+"0");
			this.binary.push(0);
			this.length++;
		}
	},

	delete: function(){
		if(length>0){
			this.binaryText.setText(this.binaryText.text.substring(0,this.binaryText.text.length-1));
			this.binary.pop();
			this.length--;
		}
	},

	generate: function(){
		this.state.start("Info", false, false, new Rythm(this.binary));
	}
};
