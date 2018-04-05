"use strict";

GameStates.makeMainMenu = function( game, shared ) {

	var music = null;
	var playButton = null;
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
    		
    		 text = game.add.text(32, 32, '"Welcome to a game of riddles! If you can answer all of the riddles you will escape,\n if you answer incorrectly, but three times you will not.\n Type your answer and press enter, \nIf you get the riddle correct you will see a new riddle, \nMake too many mistakes and your game is over. \nGood luck, click below to begin..."', { font: "15px Arial", fill: "#19de65" });

    		
        },
    
        update: function () {
    
            //	Do some nice funky main menu effect here
    
        }
        
    };
};
