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
    
    var game = new Phaser.Game( 800, 600, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update } );
    
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
    
    function create() {
    	game.physics.startSystem(Phaser.Physics.ARCADE);
    
    	map = game.add.tilemap('map');
    	map.addTilesetImage('Jungle', 'Jungle');
    	map.setCollisionByExclusion([654, 370]);
    	
    	bgLayer = map.createLayer('Background');
    	wallsLayer = map.createLayer('Walls');
    	
    	player = game.add.sprite(32,32, 'soldier');
    	
    	
    	game.world.setBounds(0, 0, 5000, 5000);
    	game.camera.follow(player);
    	//wallsLayer.resizeWorld();
    	
    	//bg = game.add.tileSprite(0, 0, 800, 600, 'background');
    	//bg.fixedToCamera = true;
    }
    
    function update() {
		//game.physics.arcade.collide(player, wallsLayer);
    }
};
