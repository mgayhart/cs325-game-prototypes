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
    	
    };