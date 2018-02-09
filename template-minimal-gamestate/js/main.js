"use strict";

function make_main_game_state( game )
{
    function preload() {
       
    }
    
    
    var text;
    var count;
    
    function create() {
       count = 0;
       
       text = game.add.text(gam.world.centerX, game.world.centerY, "You have 0 dollars!" {
       		font: "48px Arial",
       		fill: "#ff0044",
       		align: "center"
       	});
       	
       	text.anchor.setTo(0.5, 0.5);
       		
       	
    }
    
    function update() {
    
    	game.input.onDown.addOnce(updateText, this);

    }
    
    function updateText(){
    	
    	count++;
    	
    	text.setText("You have " + count + " dollars!");
    	
    }
    
    return { "preload": preload, "create": create, "update": update };
}


window.onload = function() {
    // You might want to start with a template that uses GameStates:
    //     https://github.com/photonstorm/phaser/tree/v2.6.2/resources/Project%20Templates/Basic
    
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game' );
    
    game.state.add( "main", make_main_game_state( game ) );
    
    game.state.start( "main" );
};
