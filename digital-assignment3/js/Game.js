"use strict";

GameStates.makeGame = function( game, shared ) {
    // Create your own variables.
    var bouncy = null;
    
    function quitGame() {

        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

        //  Then let's go back to the main menu.
        game.state.start('MainMenu');

    }
    
    return {
    
        create: function () {
    
            var star = game.add.sprite(300, 200, 'red');
            
            var shine = star.animations.add('shine');
            
            star.animations.play('shine', 15, true);
        },
    
        update: function () {
    
            
        }
    };
};
