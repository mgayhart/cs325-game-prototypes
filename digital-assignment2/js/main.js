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
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
    	game.load.image('circle', 'assets/circle.png');
    	game.load.image( 'logo', 'assets/phaser.png' );

    }
    
    var count;
    var text;
    var button;
    
    function create() {
        
        count = 0;
    
        text = game.add.text(game.world.centerX, game.world.centerY, "You have 0 dollars!", {
        	font: "65px Arial",
        	fill: "#ff0044",
        	align: "center"
        });
    
        text.anchor.setTo(0.5, 0.5);
        
        button = game.add.button(game.world.centerX -100, 400, 'circle', actionOnClick, this, 2, 1, 0);
        var a = game.add.sprite(game.world.centerX, game.world.centerY,'logo');
    }
    
    function update() {

		//game.input.onDown.addOnce(updateText, this);
			
    }
    
    function updateText() {
    	
    	count++;
    	
    	text.setText("You have " + count + " dollars!");
    
    }
    
    function actionOnClick(){
    	
    	count2++;
    	
    	text2.setText("You have " + count2 + " buttons!");
    	
    
    }
};
