BasicApp.Lemonade = function(app){
	this.sites = [];
	this.rythm = null;
	this.interval = null;
	this.binary = null;
	this.musicology = null;
	this.radius = 50;
	this.drawRadius = 10;
	this.polyCenter = new Phaser.Point(this.game.width/2, 100);
};

BasicApp.Lemonade.prototype = {

	create: function(rythm){
		this.rythm = rythm;

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
		this.tooltip.renderable = false;

		this.clearEvents();
	},

	draw: function(houses, sites){
		Logger.time("Draw screen time");
		graphics.clear();
	},

	drawPolygon: function(rythm, center){
		var verts = rythm.polygon();


		//Draw verticies
		for(var i=0;i<verts.length;i++){
			var x = center.x + this.radius*verts[i][0];
			var y = center.y + this.radius*verts[i][1];
			graphics.beginFill(0xffffff);
			graphics.drawCircle(x,y,this.drawRadius);
			graphics.endFill();

			graphics.beginFill(0xffffff);
			graphics.lineStyle(2, 0xffffff);

		}
1		//Draw edges
		for(var i=0;i<verts.length;i++){
			var x = center.x + this.radius*verts[i][0];
			var y = center.y + this.radius*verts[i][1];

			graphics.beginFill(0xffffff);
			graphics.lineStyle(2, 0xffffff);
			graphics.moveTo(x,y);
			graphics.lineTo(x,y);
			graphics.endFill();
		}
	},

	clearEvents: function(){
	},

	addPointers: function(){
		this.input.mousePointer.rightButton.onDown.add(this.rightClick, this);

		this.input.mousePointer.leftButton.onDown.add(this.leftClick, this, 10);
		this.input.mousePointer.leftButton.onDown.add(this.draw, this, 0, this.houses, this.sites);
	},

	addKeys: function(){
		//Reset keys
		this.input.keyboard.reset();
	},

	back: function(){
		this.state.start("Input", false);
	}
};
