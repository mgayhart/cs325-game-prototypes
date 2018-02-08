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
        // Load an image and call it 'logo'.
        game.load.image( 'ship', 'assets/spaceship.png'); 
        game.load.image('space', 'assets/space-background.jpg');
        //Load Music
        game.load.audio('music', ['assets/audio/Dum-Dee-Dum.mp3','assets/audio/Dum-Dee-Dum.ogg']);
    }
    
    var bouncy;
    var background;
    var song;
    
    function create() {
    	// Create a Background using the 'space' image.
    	background = game.add.tileSprite(0,0,800,600, 'space');
    	// Play music
    	song = game.add.audio('music');
    	song.play();
        // Create a sprite at the center of the screen using the 'logo' image.
        bouncy = game.add.sprite( game.world.centerX, game.world.centerY, 'ship' );
        // Anchor the sprite at its center, as opposed to its top-left corner.
        // so it will be truly centered.
        bouncy.anchor.setTo( 0.5, 0.5 );
        
        // Turn on the arcade physics engine for this sprite.
        game.physics.enable( bouncy, Phaser.Physics.ARCADE );
        // Make it bounce off of the world bounds.
        bouncy.body.collideWorldBounds = true;
        
        // Add some text using a CSS style.
        // Center it in X, and position its top 15 pixels from the top of the world.
        var style = { font: "25px Verdana", fill: "#9999ff", align: "center" };
        var text = game.add.text( game.world.centerX, 15, "Take the ship for a ride", style );
        text.anchor.setTo( 0.5, 0.0 );
        game.input.onDown.add(changeVolume, this);
    }
    function changeVolume(pointer) {

    if (pointer.y < 300)
    {
        music.pause();
    }
    else
    {
        music.resume();
    }

}
    function update() {
        // Accelerate the 'logo' sprite towards the cursor,
        // accelerating at 500 pixels/second and moving no faster than 500 pixels/second
        // in X or Y.
        // This function returns the rotation angle that makes it visually match its
        // new trajectory.
        bouncy.rotation = game.physics.arcade.accelerateToPointer( bouncy, game.input.activePointer, 500, 500, 500 );
    }
    function render() {
    game.debug.soundInfo(music, 20, 32);
}

};
