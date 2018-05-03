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
        game.load.tilemap('level1', 'assets/level1.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('background', 'assets/bg.png');
        game.load.image('soldier', 'assets/soldier.png');
    }
    var map;
    var background;
    var walls;
    var player;
    var cursors;
    var jumpTimer = 0;

    function create() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.gravity.y = 250;
        map = game.add.tilemap('level1');
        map.addTilesetImage('Jungle');

        background = map.createLayer('background');
        walls = map.createLayer('walls');

        player = game.add.sprite(16, 144, 'soldier');
        game.physics.enable(player, Phaser.Physics.ARCADE);
        player.body.collideWorldBounds = true;

        cursors = game.input.keyboard.createCursorKeys();
        game.camera.follow(player);
        walls.resizeWorld();
    }

    function update() {

    }
};
