"use strict";

GameStates.makeGame = function( game, shared ) {
    var background;
    var riddles = [
    	"What has roots as nobody sees, Is taller than trees, Up, up it goes, And yet never grows?",
    	"Thirty white horses on a red hill, first they champ, then they stamp, then they stand still.",
    	"Voiceless it cries, Wingless flutters, Toothless bites, Mouthless mutters.",
    	"A box without hinges, key, or lid, Yet golden treasure inside is hid.",
    	"This thing all things devours: Birds, beasts, trees, flowers; Gnaws iron, bites steel; Grinds hard stones to meal; Slays king, ruins town, And beats high mountain down."
    	];
    var riddleNum = 0;
    var solutions = ["mountain", "teeth", "wind", "egg", "time"];
    var out = "";
    
    var text;
    var wordIndex = 0;
    var riddleIndex = 0;
    var wordDelay = 120;
    var line = [];
    
    var bmd;
    var bmdInput;
    var bmdComplete;
    var bmdFail;
    var enterKey;
    
    var strike = 0;
   	var stateText;
   	
   	var wind = null;
   	var mountain = null;
   	
   	var soft = null;
   	var scrumptious = null;
   	var tasty = null;
   	
   	
   	var x1;
   	var x2;
   	var x3;
    
    function quitGame() {

        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.
		text.destroy();
		bmd.destroy();
		strikes = 0;
        //  Then let's go back to the main menu.
        game.state.start('MainMenu');

    }
    
    return {
    
        create: function () {
    		//Add background, NEED TO EDIT THE IMAGE STILL!!
    		background = game.add.tileSprite(0,0,800,600, 'background');
    		
    		text = game.add.text(30,300,'', {font: "35px Arial", fill: "#ffffff", wordWrap: true, wordWrapWidth: 600});
    		this.nextRiddle();
    		
    		//Bitmap Data, for the riddle answers area of text.
            bmd = game.make.bitmapData(800, 600);
            bmd.context.font = '64px Arial';
            bmd.context.fillStyle = '#ffffff';
            bmd.addToWorld();
            
            
            //Create an enter key, so as to end the input.
            enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
            enterKey.onDown.add(this.solved, this);
            //Stop the spacebar from scrolling the browser
            game.input.keyboard.addKeyCapture(32);
            
            //Call Key Press and allow input, so user can answer riddles.
            game.input.keyboard.addCallbacks(this, null, null, this.keyPress);
            
            stateText = game.add.text(game.world.centerX,game.world.centerY,' ', { font: '50px Arial', fill: '#19de65' });
   	 		stateText.anchor.setTo(0.5, 0.5);
    		stateText.visible = false;
           
           
        },
    
        update: function () {
    
          
        },
        
        keyPress: function(char){
        	bmd.cls();
        	var x = 64;
        	out = out + char;
        	
        	bmd.context.fillText(out, x, 64);
        	bmd.addToWorld();
        },
        
        solved(){
        	if(out === solutions[riddleNum]){
        		console.log("Decent!");
        		out = "";
        		riddleNum++;
        		text.destroy();
        		text = game.add.text(30,300,'', {font: "35px Arial", fill: "#ffffff", wordWrap: true, wordWrapWidth: 600});
        		this.nextRiddle();
        	}
        	else{
        		//Play gollum clip[strike]
        		strike++;
        		if(strike === 1){
        			soft = game.add.audio('soft');
        			soft.play();
        			x1 = game.add.sprite(450, 0, 'strk');
        		}
        		if(strike === 2){
        			tasty = game.add.audio('tasty');
        			tasty.play();
        			x2 = game.add.sprite(525, 0, 'strk');
        		}
        		if(strike === 3){
        			x3 = game.add.sprite(600, 0, 'strk');
        			scrumptious = game.add.audio('scrumptious');
        			scrumptious.play();
        			text.destroy();
        			stateText.text=" You Lose, try again. \n Click to return to menu";
        			stateText.visible = true;

        			//the "click to menu" handler
        			game.input.onTap.addOnce(this.end ,this);
        			return;
        		}
        		out = "";
        	}
        },
        
        nextRiddle: function(){
        	if(riddleNum === riddles.length){
        		//Player won, go to win Scenario
        		text.destroy();
        		stateText.text=" You Win! \n Click to return to menu";
        		stateText.visible = true;

        		//the "click to menu" handler
        		game.input.onTap.addOnce(this.end,this);
        		return;
        	}
        	else{
        		if(riddleNum === 0){
        			mountain = game.add.audio('mountain');
           			mountain.play();
        		}
        		if(riddleNum === 2){
        			wind = game.add.audio('wind');
        			wind.play();	
        		}
        		line = riddles[riddleNum].split(' ');
        		wordIndex = 0;
        		game.time.events.repeat(wordDelay, line.length, this.nextWord, this);
        	}
        },
        
        nextWord: function(){
        	text.text = text.text.concat(line[wordIndex] + " ");
        	wordIndex++;
        	
        	if(wordIndex === line.length){
        	
        	}
        
        },
        
        end: function(){
        	quitGame();
        }
    };
};
