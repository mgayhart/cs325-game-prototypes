"use strict";

GameStates.makeGame = function( game, shared ) {
    var background;
    var word = "teeth";
    var out = "";
    var bmd;
   	
    
    function quitGame() {

        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

        //  Then let's go back to the main menu.
        game.state.start('MainMenu');

    }
    
    return {
    
        create: function () {
    		background = game.add.tileSprite(0,0,800,600, 'background');
            bmd = game.make.bitmapData(800, 200);
            bmd.context.font = '64px Arial';
            bmd.context.fillStyle = '#ffffff';
            bmd.context.fillText(word, 64, 64);
            bmd.addToWorld();
            
            game.input.keyboard.addCallbacks(this, null, null, this.keyPress);
        },
    
        update: function () {
    
          
        },
        
        keyPress: function(char){
        	bmd.cls();
        	if(char === 'enter'){
        		char = 'f';
        	}
        	var x = 64;
        	out = out + char;
        	
        	bmd.context.fillText(out, x, 64);
        	bmd.addToWorld();
        	this.yas;
        },
        
        yas: function(){
        	var b = "boi u did it";
        	bmd.context.fillText(b, 64, 64);
        }
    };
};
