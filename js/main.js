var P2Game = {};

var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game');


P2Game.Boot = function (game){

},

P2Game.Boot.prototype = {
	preload: function () {
		this.load.image('preloaderbar','assets/loader.png');

	},

	create: function (){
		this.game.stage.backgroundColor = '#gff';
		this.state.start('Preload');
	},

	update: function(){

	},
}



P2Game.Preload = function (game){

},

P2Game.Preload.prototype = {
	preload: function () {
		this.game.stage.backgroundColor = '#206040';
		var preloaderbar = this.add.sprite(this.game.world.centerX,this.game.world.centerY, 'preloaderbar');
		this.game.add.text
		var style3 = {font: "30px Arial", fill:"#DC143C"};
		var scoringstuff = "Game is Loading....";
 		var winstatement = game.add.text(50,200,scoringstuff,style3);
		this.load.audio('forest',['assets/forest.mp3','assets/forest.ogg']);
		this.load.spritesheet('player', 'assets/girl-sprite.png',31, 48, 8); 
		this.load.image('background','assets/Park.jpg');

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

},

P2Game.StateA.prototype = {

preload: function () {
 

    },

    create: function () {

        //this.game.stage.backgroundColor = '#806000';
	this.bg = game.add.tileSprite(0, 0, 2000, 600, 'background');
	this.bg.scale.set(2,2);
	
	//this.game.physics.arcade.gravity.y = 200;

	this.player = this.game.add.sprite(50,330,'player');
	//this.player = this.game.add.sprite(1900,50,'player');
	this.game.physics.arcade.enable(this.player);
	this.player.animations.add('idle', [0],1,true);
	this.player.animations.add('left', [0,1,2,3],4,true);
	this.player.animations.add('right', [4,5,6,7],4,true);
	this.player.animations.play('right');
	this.player.body.collideWorldBounds = true;
	this.player.scale.set(4.5,4.5);
	this.game.camera.follow(this.player);
        this.cursors = this.input.keyboard.createCursorKeys();
	this.jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    },


    playerkill: function(){

        this.state.start('StateC');

},


   

    update: function () {

	
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

       

       // this.game.debug.text("State A", 32, 560);

    }

};


//  State C //////////////////////////////////////////////////////////

P2Game.StateC = function (game) {

    this.player;

    this.cursors;

    this.result = 'Move with cursors. Hit an object to change State';

};

P2Game.StateC.prototype = {

    create: function () {

	this.game.stage.backgroundColor = '#00FFFF';
	

	var style3 = {font: "30px Arial", fill:"#DC143C"};
	var scoringstuff = "At least you tried? Refresh to play again!";
 	var winstatement = game.add.text(50,200,scoringstuff,style3);
	

    },


    
    update: function () {


    },


    render: function () {

    }

};
//////
P2Game.StateD = function (game) {

    this.player;

    this.cursors;

    this.result = 'Move with cursors. Hit an object to change State';

};

P2Game.StateD.prototype = {

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
game.state.add('StateA', P2Game.StateA);
game.state.add('Preload', P2Game.Preload);


game.state.start('Boot');

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

