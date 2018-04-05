"use strict";

GameStates.makeMainMenu = function( game, shared ) {

	var music = null;
	var playButton = null;
	var content = ["Welcome to a game of riddles!",
		"if you can answer all of the riddles you will escape,",
		"if you answer incorrectly, but three times you will not.",
		"Type your answer and press enter,",
		"If you get the riddle correct you will see a new riddle,",
		"Make too many mistakes and your game is over.",
		"Good luck, click below to begin..."];
		
	var line = [];

	var wordIndex = 0;
	var lineIndex = 0;

	var wordDelay = 120;
	var lineDelay = 400;
	var text;
	    
    function startGame(pointer) {

        //	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
        music.stop();

        //	And start the actual game
        game.state.start('Game');

    }
    
    return {
    
        create: function () {
    
            //	We've already preloaded our assets, so let's kick right into the Main Menu itself.
            //	Here all we're doing is playing some music and adding a picture and button
            //	Naturally I expect you to do something significantly better :)
    
            music = game.add.audio('titleMusic');
            music.play();
    
            game.add.sprite(0, 0, 'titlePage');
    
            playButton = game.add.button( 303, 400, 'playButton', startGame, null, 'over', 'out', 'down');
    		
    		 text = game.add.text(32, 32, '', { font: "15px Arial", fill: "#19de65" });

    		this.nextLine();
        },
    
        update: function () {
    
            //	Do some nice funky main menu effect here
    
        },
        
        nextLine: function(){
        	if (lineIndex === content.length)
    	{
       	 //  We're finished
      	  return;
   	 	}

   	 	//  Split the current line on spaces, so one word per array element
    	line = content[lineIndex].split(' ');

    	//  Reset the word index to zero (the first word in the line)
    	wordIndex = 0;

    	//  Call the 'nextWord' function once for each word in the line (line.length)
    	game.time.events.repeat(wordDelay, line.length, this.nextWord(), this);
	
   	 	//  Advance to the next line
   	 	lineIndex++;
        },
        
        nextWord: function(){
        	//  Add the next word onto the text string, followed by a space
  		  text.text = text.text.concat(line[wordIndex] + " ");

    	//  Advance the word index to the next word in the line
   		 wordIndex++;

    	//  Last word?
   		 if (wordIndex === line.length)
   		 {
        	//  Add a carriage return
        	text.text = text.text.concat("\n");

        	//  Get the next line after the lineDelay amount of ms has elapsed
       	 game.time.events.add(lineDelay, this.nextLine(), this);
        }
    	}
        
    };
};
