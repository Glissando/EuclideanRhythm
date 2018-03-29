BasicApp.Info = function(){
	//play settings
	this.tempo = 120;
	this.instrument = "piano";
	//text
	this.rythm = null; //The rythm object
	this.interval = null; //Text object for vector interval notation e.g. (3,3,2)
	this.binary = null; // Text object for binary sequence notation e.g. [10010010]
	this.music = null; //Text object for musicology notation e.g. [x..x..x.]
	//Polygon data
	this.radius = 100;	//Radius at which the polygon is drawn from
	this.drawRadius = 15; //radius of the polygon's verticies

	this.polyCenter = new Phaser.Point(app.width/2, 150); //The polygon's center
	this.backButton = null;
};

BasicApp.Info.prototype = {

	init: function(rythm){
			this.rythm = rythm;
	},

	create: function(){
		this.polyCenter = new Phaser.Point(app.width/2, 150);

		var style = { font: '32pt Arial', fill: 'white', align: 'left', wordWrap: false };
		this.interval = this.add.text(200,400, this.rythm.interval(), style);
		this.binary = this.add.text(200,600, this.rythm.text(), style);
		this.music = this.add.text(700,600, this.rythm.music(), style);

		this.backButton = this.game.add.button(20,540, 'back', this.back, this);

		graphics.clear();
		graphics.width = this.game.width;
		graphics.height = this.game.height;

		this.drawPolygon(this.rythm, this.polyCenter);
		this.addKeys();
		this.addPointers();
	},

	update: function(){
			//graphics.width = this.game.width;
			//graphics.height = this.game.height;
	},

	render: function(){
	},

	shutdown: function(){
		graphics.clear();

		this.backButton.destroy();
		this.backButton = null;

		this.interval.destroy();
		this.interval = null;

		this.binary.destroy();
		this.binary = null;

		this.music.destroy();
		this.music = null;

		this.clearEvents();
	},

	drawPolygon: function(rythm, center){
		var verts = rythm.polygon();
		var vertPos = [];

		graphics.lineStyle(2, 0xffffff, 1);
		//Calculate vertex positions
		for(var i=0;i<verts.length;i++){
			vertPos.push([center.x + this.radius*verts[i][0],center.y + this.radius*verts[i][1]]);
			console.log("x: " + vertPos[i][0] + " y: " + vertPos[i][1]);
		}


		//Draw edges
		for(var i=0;i<verts.length;i++){
			graphics.beginFill(0xffffff);
			graphics.lineStyle(2, 0xffffff);
			graphics.moveTo(vertPos[i][0],vertPos[i][1]);
			graphics.lineTo(vertPos[(i+1)%verts.length][0],vertPos[(i+1)%verts.length][1]);
			graphics.endFill();
		}

		//Draw verticies
		for(var i=0;i<verts.length;i++){
			graphics.beginFill(0xffffff);
			graphics.drawCircle(vertPos[i][0],vertPos[i][1],this.drawRadius);
			graphics.endFill();
			//Draw inner verticies for beats
			if(this.rythm.rythm[i]==1){
				graphics.beginFill(0x000000);
				graphics.drawCircle(vertPos[i][0],vertPos[i][1],this.drawRadius/1.25);
				graphics.endFill();
			}
		}
	},

	clearEvents: function(){
	},

	addPointers: function(){
	//	this.input.mousePointer.rightButton.onDown.add(this.rightClick, this);

		//this.input.mousePointer.leftButton.onDown.add(this.leftClick, this, 10);
		//this.input.mousePointer.leftButton.onDown.add(this.draw, this, 0, this.houses, this.sites);
	},

	addKeys: function(){
		//Reset keys
		this.input.keyboard.reset();
	},

	back: function(){
		this.state.start("Input", false);
	}
};
