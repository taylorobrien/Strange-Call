var P2Game = {};

var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game');

var score = 0;
var health = 100;

P2Game.Boot = function (game){

},

P2Game.Boot.prototype = {
	preload: function () {
		this.load.image('preloaderbar','assets/loader.png');

	},

	create: function (){
		this.game.stage.backgroundColor = '#abf';
		this.state.start('Preload');
	},

	update: function(){

	},
}



P2Game.Preload = function (game){

},

P2Game.Preload.prototype = {
	preload: function () {
		this.game.stage.backgroundColor = '#63B8FF';
		var preloaderbar = this.add.sprite(150,300, 'preloaderbar');
		this.game.add.text
		var style3 = {font: "30px Arial", fill:"#DC143C"};
		var scoringstuff = "Game is Loading....";
 		var winstatement = game.add.text(200,200,scoringstuff,style3);
		this.load.audio('forest',['assets/forest.mp3','assets/forest.ogg']);
		this.load.spritesheet('player', 'assets/girl-sprite.png',31, 48, 8); 
		this.load.image('background','assets/Park.jpg');
		this.load.image('cellphone','assets/cellphone.png');
		this.load.image('woodpost','assets/woodpost.png');
		this.load.tilemap('level1', 'assets/level1.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('level2', 'assets/level2.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.image('redbrick', 'assets/redbrick.png'); 
		this.load.image('flashlight', 'assets/flashlight.png'); 
		this.load.image('exitdoor', 'assets/exitdoor.png'); 
		this.load.image('background2','assets/background2.jpg');
		this.load.image('textsprite','assets/spritetext.png');
		this.load.image('ladder','assets/ladder.png');
		this.load.image('battery','assets/battery.png');
		this.load.image('dungeondoor','assets/dungeon-door.png');
		this.load.spritesheet('coin','assets/spinningcoin.png',32,32,8);
		this.load.spritesheet('sludge','assets/sludge1.png',71,28,6);

	},

	create: function (){

		this.state.start('StateA');

	},

	update: function(){

	},
}


P2Game.StateA = function (game) {

	this.player;
	this.bg;
	this.phone;
	this.shake = false;

},

P2Game.StateA.prototype = {

preload: function () {
 

    },

    create: function () {

        //this.game.stage.backgroundColor = '#806000';
	this.bg = game.add.tileSprite(0, 0, 2000, 600, 'background');
	this.bg.scale.set(2,2);
	

	this.phone = this.game.add.sprite(580,450,'cellphone');
	this.game.physics.arcade.enable(this.phone);
	this.phone.scale.set(.03,.03);

	this.player = this.game.add.sprite(50,330,'player');
	//this.player = this.game.add.sprite(1900,50,'player');
	this.game.physics.arcade.enable(this.player);
	this.player.animations.add('idle', [0],1,true);
	this.player.animations.add('left', [0,1,2,3],4,true);
	this.player.animations.add('right', [4,5,6,7],4,true);
	this.player.animations.play('right');
	this.player.body.collideWorldBounds = true;
	this.player.scale.set(4.5,4.5);
	//this.game.camera.follow(this.player);
        this.cursors = this.input.keyboard.createCursorKeys();
	this.jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    },


    playerkill: function(){

        this.state.start('StateA');

},

    cameraShake: function() {
	this.game.world.setBounds(-20, -20, this.game.width+20,
this.game.height+2);
        var min = -20;
        var max = 20;
        this.game.camera.x+= Math.floor(Math.random() * (max - min + 1))
+ min;
        this.game.camera.y+= Math.floor(Math.random() * (max - min + 1))
+ min;
    },



    getphone: function(){
	this.phone.kill();
	this.shake = true;
	this.game.time.events.add(Phaser.Timer.SECOND * 1, this.nextstate, this);


},

    nextstate: function(){
	this.state.start('StateC');
	
},
   

    update: function () {

	this.game.physics.arcade.overlap(this.player,this.phone,this.getphone,null,this);

	if(this.shake == true){
		this.cameraShake();
	}
	
if (this.cursors.left.isDown)
    {
        this.player.body.velocity.x = -150;

        if (this.facing != 'left')
        {
            this.player.animations.play('left');
            this.facing = 'left';
        }
    }
else if (this.cursors.up.isDown && this.player.body.onFloor())
    {
        this.player.body.velocity.y = -200;

        if (this.facing != 'idle')
        {
            this.player.animations.play('idle');
            this.facing = 'idle';
        }
    }
    else if (this.cursors.right.isDown)
    {
        this.player.body.velocity.x = 150;
	        if (this.facing != 'right')
        {
            this.player.animations.play('right');
            this.facing = 'right';
        }


    }
     else
    {
        if (this.facing != 'idle')
        {
            this.player.animations.stop();
	    //this.player.body.velocity.y =200;
	    this.player.body.velocity.x = 0;
            this.facing = 'idle';
        }
    }



    },

    render: function () {

       

       // this.game.debug.text("State A", 32, 560);

    }

};


//  State C //////////////////////////////////////////////////////////

P2Game.StateC = function (game) {
	this.player;
	this.map;
	this.bg;
	this.layer;
	this.ladder1;
	this.coin;
	this.ladder2;
	this.sludge1;
	this.sludge2;
	this.ladder3;
	this.ladder4;
	this.dungeondoor;
	this.flashlight;
	this.getflash = false;
	this.scoringstuff = "";
	this.winstatement;

};

P2Game.StateC.prototype = {

    create: function () {

	this.bg = game.add.tileSprite(0, 0, 2000, 600, 'background2');
	//this.bg.scale.set(2,2);
	
	this.map = this.game.add.tilemap('level1');
	this.map.addTilesetImage('redbrick');
    	this.layer =this. map.createLayer('Tile Layer 1');
    	this.layer.resizeWorld();
 	this.map.setCollisionBetween(1, 12);
	
	this.game.physics.arcade.gravity.y = 200;

	this.ladder1 = this.game.add.sprite(425,100,'ladder');
	this.game.physics.arcade.enable(this.ladder1);
	this.ladder1.body.collideWorldBounds = true;
	this.ladder1.scale.set(.2,.5);

	this.ladder3 = this.game.add.sprite(1345,152,'ladder');
	this.game.physics.arcade.enable(this.ladder3);
	this.ladder3.body.collideWorldBounds = true;
	this.ladder3.scale.set(.2,.5);
	this.ladder3.body.allowGravity = false;

	this.ladder4 = this.game.add.sprite(1345,350,'ladder');
	this.game.physics.arcade.enable(this.ladder4);
	this.ladder4.body.collideWorldBounds = true;
	this.ladder4.scale.set(.2,.5);
	this.ladder4.body.allowGravity = false;

	this.ladder2 = this.game.add.sprite(550,400,'ladder');
	this.game.physics.arcade.enable(this.ladder2);
	this.ladder2.body.collideWorldBounds = true;
	this.ladder2.scale.set(.2,.5);

	this.flashlight = this.game.add.sprite(1850,555,'flashlight');
	this.game.physics.arcade.enable(this.flashlight);
	this.flashlight.body.collideWorldBounds = true;
	this.flashlight.scale.set(.2,.2);
	
	this.dungeondoor = this.game.add.sprite(1900,30,'dungeondoor');
	this.game.physics.arcade.enable(this.dungeondoor);
	this.dungeondoor.body.allowGravity = false;
	this.dungeondoor.scale.set(.3,.3);

	this.woodpost = this.game.add.sprite(1840,35,'woodpost');
	this.game.physics.arcade.enable(this.woodpost);
	this.woodpost.body.allowGravity = false;
	this.woodpost.scale.set(.6,.6);

	this.coin = this.game.add.sprite(425,60,'coin');
	this.game.physics.arcade.enable(this.coin);
	this.coin.body.allowGravity = false;
	this.coin.animations.add('spin',[0,1,2,3,4,5,6,7],8,true);
	this.coin.animations.play('spin');

	this.coin3 = this.game.add.sprite(1250,60,'coin');
	this.game.physics.arcade.enable(this.coin3);
	this.coin3.body.allowGravity = false;
	this.coin3.animations.add('spin',[0,1,2,3,4,5,6,7],8,true);
	this.coin3.animations.play('spin');

	this.coin2 = this.game.add.sprite(1250,200,'coin');
	this.game.physics.arcade.enable(this.coin2);
	this.coin2.body.allowGravity = false;
	this.coin2.animations.add('spin',[0,1,2,3,4,5,6,7],8,true);
	this.coin2.animations.play('spin');

	this.coin4 = this.game.add.sprite(1250,350,'coin');
	this.game.physics.arcade.enable(this.coin4);
	this.coin4.body.allowGravity = false;
	this.coin4.animations.add('spin',[0,1,2,3,4,5,6,7],8,true);
	this.coin4.animations.play('spin');


	this.coin5 = this.game.add.sprite(350,250,'coin');
	this.game.physics.arcade.enable(this.coin5);
	this.coin5.body.allowGravity = false;
	this.coin5.animations.add('spin',[0,1,2,3,4,5,6,7],8,true);
	this.coin5.animations.play('spin');

	this.coin6 = this.game.add.sprite(40,545,'coin');
	this.game.physics.arcade.enable(this.coin6);
	this.coin6.body.allowGravity = false;
	this.coin6.animations.add('spin',[0,1,2,3,4,5,6,7],8,true);
	this.coin6.animations.play('spin');

	this.coin7 = this.game.add.sprite(445,545,'coin');
	this.game.physics.arcade.enable(this.coin7);
	this.coin7.body.allowGravity = false;
	this.coin7.animations.add('spin',[0,1,2,3,4,5,6,7],8,true);
	this.coin7.animations.play('spin');
/*
	this.coin8 = this.game.add.sprite(350,250,'coin');
	this.game.physics.arcade.enable(this.coin8);
	this.coin8.body.allowGravity = false;
	this.coin8.animations.add('spin',[0,1,2,3,4,5,6,7],8,true);
	this.coin8.animations.play('spin');
*/
	this.sludge1 = this.game.add.sprite(100,275,'sludge');
	this.game.physics.arcade.enable(this.sludge1);
	//this.sludge1.body.allowGravity = false;
	this.sludge1.animations.add('spin',[0,1,2,3,4,5],6,true);
	this.sludge1.animations.play('spin');	
	this.sludge1.body.velocity.x = 60;
	this.sludge1.body.bounce.set(1);

	this.sludge2 = this.game.add.sprite(500,555,'sludge');
	this.game.physics.arcade.enable(this.sludge2);
	this.sludge2.animations.add('spin',[0,1,2,3,4,5],6,true);
	this.sludge2.animations.play('spin');	
	this.sludge2.body.velocity.x = 60;
	this.sludge2.body.bounce.set(1);

	this.player = this.game.add.sprite(50,50,'player');
	//this.player = this.game.add.sprite(1900,50,'player');
	this.game.physics.arcade.enable(this.player);
	this.player.animations.add('idle', [0],1,true);
	this.player.animations.add('left', [0,1,2,3],4,true);
	this.player.animations.add('right', [4,5,6,7],4,true);
	this.player.animations.play('right');
	this.player.body.collideWorldBounds = true;
	//this.player.scale.set(4.5,4.5);
	this.game.camera.follow(this.player);
        this.cursors = this.input.keyboard.createCursorKeys();
	this.jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    },

    climb: function(){
	if(this.cursors.up.isDown){
		this.player.body.velocity.y = -100;
	}
	

},

    scoreone: function(body1, body2){
	score = score + 1;
	body2.kill();
	
},

   minushealth: function(){
	health --;

},	

   nextstate: function(){
	if(this.getflash == true){
		this.state.start('StateD');
	}
	
},


   getflashlight: function(body1,body2){
	this.getflash = true;
	body2.kill();

},

    
    update: function () {
	this.game.physics.arcade.overlap(this.player,this.ladder1,this.climb,null,this);
	this.game.physics.arcade.overlap(this.player,this.flashlight,this.getflashlight,null,this);
	this.game.physics.arcade.overlap(this.player,this.ladder2,this.climb,null,this);
	this.game.physics.arcade.overlap(this.player,this.ladder3,this.climb,null,this);
	this.game.physics.arcade.overlap(this.player,this.ladder4,this.climb,null,this);
	this.game.physics.arcade.overlap(this.player,this.coin,this.scoreone,null,this);
	this.game.physics.arcade.overlap(this.player,this.coin2,this.scoreone,null,this);
	this.game.physics.arcade.overlap(this.player,this.coin3,this.scoreone,null,this);
	this.game.physics.arcade.overlap(this.player,this.coin4,this.scoreone,null,this);
	this.game.physics.arcade.overlap(this.player,this.dungeondoor,this.nextstate, null, this);
	this.game.physics.arcade.overlap(this.player,this.coin5,this.scoreone,null,this);
	this.game.physics.arcade.overlap(this.player,this.coin6,this.scoreone,null,this);
	this.game.physics.arcade.overlap(this.player,this.coin7,this.scoreone,null,this);
	this.game.physics.arcade.overlap(this.player,this.sludge1,this.minushealth,null,this);
	this.game.physics.arcade.overlap(this.player,this.sludge2,this.minushealth,null,this);
	this.game.physics.arcade.collide(this.layer,this.ladder1);
	this.game.physics.arcade.collide(this.layer,this.flashlight);
	this.game.physics.arcade.collide(this.layer,this.sludge1);
	this.game.physics.arcade.collide(this.layer,this.sludge2);
	this.game.physics.arcade.collide(this.layer,this.ladder2);
	this.game.physics.arcade.collide(this.player,this.layer);
if (this.cursors.left.isDown)
    {
        this.player.body.velocity.x = -100;

        if (this.facing != 'left')
        {
            this.player.animations.play('left');
            this.facing = 'left';
        }
    }
else if (this.cursors.up.isDown && this.player.body.onFloor())
    {
        this.player.body.velocity.y = -200;

        if (this.facing != 'idle')
        {
            this.player.animations.play('idle');
            this.facing = 'idle';
        }
    }
    else if (this.cursors.right.isDown)
    {
        this.player.body.velocity.x = 100;
	        if (this.facing != 'right')
        {
            this.player.animations.play('right');
            this.facing = 'right';
        }


    }
     else
    {
        if (this.facing != 'idle')
        {
            this.player.animations.stop();
	    //this.player.body.velocity.y =200;
	    this.player.body.velocity.x = 0;
            this.facing = 'idle';
        }
    }

    },


    render: function () {
	this.game.debug.text("Score: " + score, 32, 35);
	this.game.debug.text("Health: " + health, 680,35);

    }

};
//////
P2Game.StateD = function (game) {
	this.player2;
	this.cursors;
	this.lightAngle = Math.PI/4;
	this.numberOfRays = 20;
	this.rayLength = 100;
	this.maskGraphics;
	this.bg;
	this.bitmap;
	this.walls;
	this.LIGHT_RADIUS = 100;
	this.battery1;
	this.battery2;
	this.battery3;
	this.sludge1;
	this.sludge2;
	this.sludge3;
	this.coin;
	this.coin2;
	this.coin3;
	this.coin4;
	this.coin5;
	this.coin6;
	this.coin7;
	this.coin8;
	this.coin9;
	this.coin10;
	this.coin11;


};

P2Game.StateD.prototype = {

    create: function () {

	this.game.stage.backgroundColor = '#00FFFF';
	this.bg = game.add.tileSprite(0, 0, 2000, 600, 'background2');
	this.bg.mask = this.maskGraphics;

	this.map = this.game.add.tilemap('level2');
	this.map.addTilesetImage('redbrick');
    	this.walls =this.map.createLayer('Tile Layer 1');
    	this.walls.resizeWorld();
 	this.map.setCollisionBetween(1, 12);

	this.game.physics.arcade.gravity.y = 200;

	this.ladder1 = this.game.add.sprite(325,500,'ladder');
	this.game.physics.arcade.enable(this.ladder1);
	this.ladder1.body.collideWorldBounds = true;
	this.ladder1.scale.set(.2,.5);

	this.battery1 = this.game.add.sprite(310,100,'battery');
	this.game.physics.arcade.enable(this.battery1);
	this.battery1.body.collideWorldBounds = true;
	this.battery1.scale.set(.015,.015);

	this.battery2 = this.game.add.sprite(880,100,'battery');
	this.game.physics.arcade.enable(this.battery2);
	this.battery2.body.collideWorldBounds = true;
	this.battery2.scale.set(.015,.015);
	this.battery2.body.allowGravity = false;

	this.battery3 = this.game.add.sprite(1880,150,'battery');
	this.game.physics.arcade.enable(this.battery3);
	this.battery3.body.collideWorldBounds = true;
	this.battery3.scale.set(.015,.015);

	this.coin = this.game.add.sprite(50,500,'coin');
	this.game.physics.arcade.enable(this.coin);
	this.coin.body.allowGravity = false;
	this.coin.animations.add('spin',[0,1,2,3,4,5,6,7],8,true);
	this.coin.animations.play('spin');

	this.coin3 = this.game.add.sprite(400,550,'coin');
	this.game.physics.arcade.enable(this.coin3);
	this.coin3.body.allowGravity = false;
	this.coin3.animations.add('spin',[0,1,2,3,4,5,6,7],8,true);
	this.coin3.animations.play('spin');

	this.coin2 = this.game.add.sprite(300,275,'coin');
	this.game.physics.arcade.enable(this.coin2);
	this.coin2.body.allowGravity = false;
	this.coin2.animations.add('spin',[0,1,2,3,4,5,6,7],8,true);
	this.coin2.animations.play('spin');

	this.coin4 = this.game.add.sprite(700,275,'coin');
	this.game.physics.arcade.enable(this.coin4);
	this.coin4.body.allowGravity = false;
	this.coin4.animations.add('spin',[0,1,2,3,4,5,6,7],8,true);
	this.coin4.animations.play('spin');


	this.coin5 = this.game.add.sprite(1050,330,'coin');
	this.game.physics.arcade.enable(this.coin5);
	this.coin5.body.allowGravity = false;
	this.coin5.animations.add('spin',[0,1,2,3,4,5,6,7],8,true);
	this.coin5.animations.play('spin');

	this.coin10 = this.game.add.sprite(620,80,'coin');
	this.game.physics.arcade.enable(this.coin10);
	this.coin10.body.allowGravity = false;
	this.coin10.animations.add('spin',[0,1,2,3,4,5,6,7],8,true);
	this.coin10.animations.play('spin');

	this.coin11 = this.game.add.sprite(780,100,'coin');
	this.game.physics.arcade.enable(this.coin11);
	this.coin11.body.allowGravity = false;
	this.coin11.animations.add('spin',[0,1,2,3,4,5,6,7],8,true);
	this.coin11.animations.play('spin');

	this.coin6 = this.game.add.sprite(1400,530,'coin');
	this.game.physics.arcade.enable(this.coin6);
	this.coin6.body.allowGravity = false;
	this.coin6.animations.add('spin',[0,1,2,3,4,5,6,7],8,true);
	this.coin6.animations.play('spin');

	this.coin7 = this.game.add.sprite(1300,110,'coin');
	this.game.physics.arcade.enable(this.coin7);
	this.coin7.body.allowGravity = false;
	this.coin7.animations.add('spin',[0,1,2,3,4,5,6,7],8,true);
	this.coin7.animations.play('spin');

	this.coin8 = this.game.add.sprite(1650,50,'coin');
	this.game.physics.arcade.enable(this.coin8);
	this.coin8.body.allowGravity = false;
	this.coin8.animations.add('spin',[0,1,2,3,4,5,6,7],8,true);
	this.coin8.animations.play('spin');

	this.coin9 = this.game.add.sprite(1820,50,'coin');
	this.game.physics.arcade.enable(this.coin9);
	this.coin9.body.allowGravity = false;
	this.coin9.animations.add('spin',[0,1,2,3,4,5,6,7],8,true);
	this.coin9.animations.play('spin');

	this.sludge1 = this.game.add.sprite(600,555,'sludge');
	this.game.physics.arcade.enable(this.sludge1);
	//this.sludge1.body.allowGravity = false;
	this.sludge1.animations.add('spin',[0,1,2,3,4,5],6,true);
	this.sludge1.animations.play('spin');	
	this.sludge1.body.velocity.x = 60;
	this.sludge1.body.bounce.set(1);

	this.sludge2 = this.game.add.sprite(1800,555,'sludge');
	this.game.physics.arcade.enable(this.sludge2);
	//this.sludge1.body.allowGravity = false;
	this.sludge2.animations.add('spin',[0,1,2,3,4,5],6,true);
	this.sludge2.animations.play('spin');	
	this.sludge2.body.velocity.x = 60;
	this.sludge2.body.bounce.set(1);

	this.sludge3 = this.game.add.sprite(1400,133,'sludge');
	this.game.physics.arcade.enable(this.sludge3);
	//this.sludge1.body.allowGravity = false;
	this.sludge3.animations.add('spin',[0,1,2,3,4,5],6,true);
	this.sludge3.animations.play('spin');	
	this.sludge3.body.velocity.x = 60;
	this.sludge3.body.bounce.set(1);

	this.exitdoor = this.game.add.sprite(1900,200,'exitdoor');
	this.game.physics.arcade.enable(this.exitdoor);
	this.exitdoor.body.collideWorldBounds = true;
	this.exitdoor.scale.set(.7,.7);

	this.shadowTexture = this.game.add.bitmapData(2100, this.game.height);

    // Create an object that will use the bitmap as a texture
	var lightSprite = this.game.add.image(0, 0, this.shadowTexture);

    // Set the blend mode to MULTIPLY. This will darken the colors of
    // everything below this sprite.
	lightSprite.blendMode = Phaser.blendModes.MULTIPLY;

    // Simulate a pointer click/tap input at the center of the stage
    // when the example begins running.
	//this.game.input.activePointer.x = this.game.width/2;
	//this.game.input.activePointer.y = this.game.height/2;


	//this.player = this.game.add.sprite(40,40,'player');
	this.player2 = this.game.add.sprite(50,50,'player');
	this.game.physics.arcade.enable(this.player2);
	this.player2.animations.add('idle', [0],1,true);
	this.player2.animations.add('left', [0,1,2,3],4,true);
	this.player2.animations.add('right', [4,5,6,7],4,true);
	this.player2.animations.play('right');
	this.player2.body.collideWorldBounds = true;
	//this.player.scale.set(4.5,4.5);
	this.game.camera.follow(this.player2);
        this.cursors = this.input.keyboard.createCursorKeys();
	this.jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

	this.game.time.events.repeat(Phaser.Timer.SECOND * 3, 1000, this.minusradius,this);
	

},

climb: function(){
	if(this.cursors.up.isDown){
		this.player.body.velocity.y = -100;
	}
	

},

minusradius: function(){
	if(this.LIGHT_RADIUS > 20){
		this.LIGHT_RADIUS --;
	}

},

updateShadowTexture: function(){
    //this.shadowTexture.context.fillStyle = 'rgb(00, 00, 00)';
    this.shadowTexture.context.fillStyle = 'rgb(00, 00, 00)';
    this.shadowTexture.context.fillRect(0, 0, 2100, this.game.height);

    // Draw circle of light
    this.shadowTexture.context.beginPath();
    this.shadowTexture.context.fillStyle = 'rgb(255, 255, 255)';
    this.shadowTexture.context.arc(this.player2.x+10, this.player2.y+10,
        this.LIGHT_RADIUS, 0, Math.PI*2);
    this.shadowTexture.context.fill();

    // This just tells the engine it should update the texture cache
    this.shadowTexture.dirty = true;


},

   pickbattery: function(body1,body2){
	body2.kill();
	this.LIGHT_RADIUS = 100;

},

   scoreone: function(body1,body2){
	body2.kill();
	score++;
},

   minushealth: function(){
	health--;
},

  leave: function(){
	this.state.start('End1');
},

    
    update: function () {
	this.updateShadowTexture();
	this.game.physics.arcade.collide(this.ladder1,this.walls);
	this.game.physics.arcade.collide(this.exitdoor,this.walls);
	this.game.physics.arcade.collide(this.sludge1,this.walls);
	this.game.physics.arcade.collide(this.sludge2,this.walls);
	this.game.physics.arcade.collide(this.sludge3,this.walls);
	this.game.physics.arcade.collide(this.battery1,this.walls);
	this.game.physics.arcade.collide(this.battery3,this.walls);
	this.game.physics.arcade.overlap(this.player2,this.exitdoor, this.leave,null,this);
	this.game.physics.arcade.overlap(this.player2,this.battery1, this.pickbattery,null,this);
	this.game.physics.arcade.overlap(this.player2,this.battery2, this.pickbattery,null,this);
	this.game.physics.arcade.overlap(this.player2,this.battery3, this.pickbattery,null,this);
	this.game.physics.arcade.overlap(this.player2,this.ladder1,this.climb,null,this);
	this.game.physics.arcade.collide(this.player2,this.walls);
	this.game.physics.arcade.overlap(this.player2,this.sludge1,this.minushealth,null,this);	
	this.game.physics.arcade.overlap(this.player2,this.sludge2,this.minushealth,null,this);
	this.game.physics.arcade.overlap(this.player2,this.sludge3,this.minushealth,null,this);
	this.game.physics.arcade.overlap(this.player2,this.coin,this.scoreone,null,this);
	this.game.physics.arcade.overlap(this.player2,this.coin2,this.scoreone,null,this);
	this.game.physics.arcade.overlap(this.player2,this.coin3,this.scoreone,null,this);
	this.game.physics.arcade.overlap(this.player2,this.coin4,this.scoreone,null,this);
	this.game.physics.arcade.overlap(this.player2,this.coin5,this.scoreone,null,this);
	this.game.physics.arcade.overlap(this.player2,this.coin6,this.scoreone,null,this);
	this.game.physics.arcade.overlap(this.player2,this.coin7,this.scoreone,null,this);
	this.game.physics.arcade.overlap(this.player2,this.coin8,this.scoreone,null,this);
	this.game.physics.arcade.overlap(this.player2,this.coin9,this.scoreone,null,this);
	this.game.physics.arcade.overlap(this.player2,this.coin10,this.scoreone,null,this);
	this.game.physics.arcade.overlap(this.player2,this.coin11,this.scoreone,null,this);
	

if (this.cursors.left.isDown)
    {
        this.player2.body.velocity.x = -100;

        if (this.facing != 'left')
        {
            this.player2.animations.play('left');
            this.facing = 'left';
        }
    }
else if (this.cursors.up.isDown && this.player2.body.onFloor())
    {
        this.player2.body.velocity.y = -200;

        if (this.facing != 'idle')
        {
            this.player2.animations.play('idle');
            this.facing = 'idle';
        }
    }
    else if (this.cursors.right.isDown)
    {
        this.player2.body.velocity.x = 100;
	        if (this.facing != 'right')
        {
            this.player2.animations.play('right');
            this.facing = 'right';
        }


    }
     else
    {
        if (this.facing != 'idle')
        {
            this.player2.animations.stop();
	    //this.player.body.velocity.y =200;
	    this.player2.body.velocity.x = 0;
            this.facing = 'idle';
        }
    }
},



    render: function () {

    	this.game.debug.text("Score: " + score, 32, 35);
	this.game.debug.text("Health: " + health, 680,35);

},

};


P2Game.End1 = function (game) {


    this.cursors;

    this.result = 'Move with cursors. Hit an object to change State';

};

P2Game.End1.prototype = {

    create: function () {

	this.game.stage.backgroundColor = '#00FFFF';
	

	var style3 = {font: "30px Arial", fill:"#DC143C"};
	var scoringstuff = "Good job! You made it out alive! Refresh to play again!";
 	var winstatement = game.add.text(50,200,scoringstuff,style3);
	

    },


    
    update: function () {


    },


    render: function () {

    }

};

game.state.add('Boot', P2Game.Boot);
game.state.add('End1', P2Game.End1);
game.state.add('StateA', P2Game.StateA);
game.state.add('Preload', P2Game.Preload);
game.state.add('StateC', P2Game.StateC);
game.state.add('StateD', P2Game.StateD);


game.state.start('Boot');

//http://images.clipartpanda.com/iphone-cell-phone-clipart-jcxEzM5yi.png
//http://akamai1.truition.com/images/catalog16754/folder105286/img10090527med.jpg
//http://www.mapcore.net/pics/mikey/sewer2.jpg
//http://images.all-free-download.com/images/graphiclarge/ladder_clip_art_23441.jpg
//http://s6.postimg.org/txkta657l/slime.png
//http://cliparts.co/cliparts/yik/rrG/yikrrGaMT.png
//http://image.ec21.com/image/tunadoors/oimg_GC07816291_CA07816358/Fire_Exit_Doors.jpg
//http://www.online-image-editor.com/
//http://gamemechanicexplorer.com/#lighting-1 - Mechanics for light
//http://www.bestprepperproducts.com/wp-content/uploads/2014/10/best_flashlight_for_emergency_kits.png
//http://thumbs.dreamstime.com/z/old-wooden-sign-background-message-32590914.jpg

//old game below

//http://greatleadersserve.com/wp-content/uploads/2012/08/iStock_000020378687XSmall.jpg
//http://imageshack.com/handle_redirect.php?ser=233&file=animations2222223.png
//http://cliparts.co/cliparts/8cz/nLb/8cznLbR7i.png
//http://previews.123rf.com/images/zentilia/zentilia1111/zentilia111100067/11503913-3d-rendering-of-blank-signs-pointing-in-opposite-directions-Stock-Photo.jpg
//http://img3.wikia.nocookie.net/__cb20130304122439/sonic/images/d/d3/Spikes_in_Sonic_the_Hedgehog_4.png
//http://www.wikihow.com/images/e/eb/594851-11.jpg
//http://static.giantbomb.com/uploads/original/12/126604/2430869-7835230262-starf.gif
//http://fc03.deviantart.net/fs70/f/2013/177/9/e/bina___rpg_sprites__request__by_lagoon_sadnes-d6atbky.png//http://felicemagazine.weebly.com/uploads/2/1/8/7/21874606/9978435_orig.png

//http://greatleadersserve.com/wp-content/uploads/2012/08/iStock_000020378687XSmall.jpg
//http://imageshack.com/handle_redirect.php?ser=233&file=animations2222223.png
//http://cliparts.co/cliparts/8cz/nLb/8cznLbR7i.png
//http://previews.123rf.com/images/zentilia/zentilia1111/zentilia111100067/11503913-3d-rendering-of-blank-signs-pointing-in-opposite-directions-Stock-Photo.jpg
//http://img3.wikia.nocookie.net/__cb20130304122439/sonic/images/d/d3/Spikes_in_Sonic_the_Hedgehog_4.png
//http://www.wikihow.com/images/e/eb/594851-11.jpg
//http://static.giantbomb.com/uploads/original/12/126604/2430869-7835230262-starf.gif
//http://fc03.deviantart.net/fs70/f/2013/177/9/e/bina___rpg_sprites__request__by_lagoon_sadnes-d6atbky.png//http://felicemagazine.weebly.com/uploads/2/1/8/7/21874606/9978435_orig.png





/*
	var mouseAngle = Math.atan2(this.player.y-game.input.y,this.player.x-game.input.x);
	this.maskGraphics.clear();
	this.maskGraphics.lineStyle(2, 0xffffff, 1);
	this.maskGraphics.beginFill(0xffff00);
	this.maskGraphics.moveTo(this.player.x,this.player.y);
	for(var i = 0; i<this.numberOfRays; i++){	
		var rayAngle = mouseAngle-(this.lightAngle/2)+(this.lightAngle/this.numberOfRays)*i
		var lastX = this.player.x;
		var lastY = this.player.y;
		for(var j= 1; j<=this.rayLength;j+=1){
	       		var landingX = Math.round(this.player.x-(2*j)*Math.cos(rayAngle));
          		var landingY = Math.round(this.player.y-(2*j)*Math.sin(rayAngle));
          		
			}
			this.maskGraphics.lineTo(lastX,lastY);
		}
		this.maskGraphics.lineTo(this.player.x, this.player.y);
		this.maskGraphics.endFill();
		this.bg.alpha = 0.5+Math.random()*0.5;
Try number 1*/

