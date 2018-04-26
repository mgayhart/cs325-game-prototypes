"use strict";

window.onload = function() {
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    var game = new Phaser.Game( 400, 300, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
       game.load.image('Jungle', 'assets/jungleTileset.png', 16, 16);
       game.load.tilemap('map', 'assets/map.json', null, Phaser.Tilemap.TILED_JSON);
       game.load.image('background', 'assets/bg.png');
       game.load.image('soldier', 'assets/soldier.png');
    }
    var map;
    var bgLayer;
    var wallsLayer;
    var player;
    var bg;
    var cursors;
    var jumpTimer = 0;
    
    function create() {
    	game.physics.startSystem(Phaser.Physics.ARCADE);
		game.physics.arcade.gravity.y = 250;
		
		
    	map = game.add.tilemap('map');
    	map.addTilesetImage('Jungle');
    	//map.setCollisionByExclusion([654, 370]);
    	map.setCollision([42]);
    	
    	bgLayer = map.createLayer('Background');
    	wallsLayer = map.createLayer('Walls');
    	
    	
    	
    	player = game.add.sprite(32,96, 'soldier');
    	game.physics.enable(player, Phaser.Physics.ARCADE);
    	
    	player.body.collideWorldBounds = true;
    	
    	cursors = game.input.keyboard.createCursorKeys();
    	
    	
    	
    	game.camera.follow(player);
    	wallsLayer.resizeWorld();
    	
    	//bg = game.add.tileSprite(0, 0, 800, 600, 'background');
    	//bg.fixedToCamera = true;
    }
    
    function update() {
		game.physics.arcade.collide(player, wallsLayer);
		
		player.body.velocity.x = 0;
		
		if(cursors.left.isDown){
			player.body.velocity.x = -150;
		}
		else if(cursors.right.isDown){
			player.body.velocity.x = 150;
		}
		if(cursors.up.isDown && player.body.onFloor() && game.time.now > jumpTimer){
			player.body.velocity.y = -200;
			jumpTimer = game.time.now + 750;
		}
    }
};
