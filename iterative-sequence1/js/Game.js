"use strict";

GameStates.makeGame = function( game, shared ) {
    var background;
    var word = "teeth";
    var out = "";
    var bmd;
    var enterKey;
   	
    
    function quitGame() {

        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

        //  Then let's go back to the main menu.
        game.state.start('MainMenu');

    }
    
    return {
    
        create: function () {
    		//Add background, NEED TO EDIT THE IMAGE STILL!!
    		background = game.add.tileSprite(0,0,800,600, 'background');
    		
    		//Bitmap Data, for the first area of text.
            bmd = game.make.bitmapData(800, 200);
            bmd.context.font = '64px Arial';
            bmd.context.fillStyle = '#ffffff';
            bmd.context.fillText(word, 64, 64);
            bmd.addToWorld();
            //Create an enter key, so as to end the input.
            enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
            enterKey.onDown.add(this.solved, this);
            //Stop the spacebar from scrolling the browser
            game.input.keyboard.addKeyCapture(32);
            
            //Call Key Press and allow input, so user can answer riddles.
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
        },
        
        solved(){
        	if(out === word){
        		console.log("YOU DID IT");
        		out = "";
        	}
        	else{
        		console.log("Not Quite, bud");
        	}
        }
    };
};
