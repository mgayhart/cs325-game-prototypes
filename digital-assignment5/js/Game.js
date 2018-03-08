"use strict";

GameStates.makeGame = function( game, shared ) {
    var space;
    var i;
    var stars;
    var star;
    var blueStar;
    var blueStars;
    var shine;
    var ship;
    var cursors;
    var scoreString;
    var scoreText;
    var score;
    var stateText;
    var explosion;

    function quitGame() {

        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

        //  Then let's go back to the main menu.
        game.state.start('MainMenu');

    }
    
    return {
    
        create: function () {
        	//background
        	space = game.add.tileSprite(0, 0, 800, 600, 'space');
        	//Player's ship
        	ship = game.add.sprite(600, 500, 'ship');
            ship.anchor.setTo(0.5, 0.5);
            game.physics.startSystem(Phaser.Physics.ARCADE);
            game.physics.arcade.enable(ship);
            ship.body.collideWorldBounds = true;
            ship.body.setSize(50, 66, 12.5, 5.5);
            
        	
        	//Star groups "stars" being the red stars and "blueStars" being the good blue ones
        	stars = game.add.physicsGroup();
        	blueStars = game.add.physicsGroup();
        	
        	//Score!
        	score = 0;
        	scoreString = 'Score: ';
        	scoreText = game.add.text(10, 10, scoreString + score, {font: '34px Arial', fill: '#fff'});
        	
        	//State Text
        	stateText = game.add.text(game.world.centerX,game.world.centerY,' ', { font: '84px Arial', fill: '#fff' });
   	 		stateText.anchor.setTo(0.5, 0.5);
    		stateText.visible = false;
        	
        	//Timed events creating the various stars
        	game.time.events.repeat(Phaser.Timer.SECOND * 3.2, 100000, this.createBlueStar, this);
        	game.time.events.repeat(Phaser.Timer.SECOND, 1000000, this.createStar, this);
            game.time.events.repeat(Phaser.Timer.SECOND * 2, 1000000, this.createStar, this);
            game.time.events.repeat(Phaser.Timer.SECOND * 0.5, 1000000, this.createStar, this);
        
            //Keyboard input
            cursors = game.input.keyboard.createCursorKeys();
        },
    
        update: function () {
        	//move the background
        	space.tilePosition.y += 2;
        	//make sure the stars are killed if off screen
        	blueStars.forEach(this.blueCheckPos, this);
        	stars.forEach(this.checkPos, this);
        	score++;
        	scoreText.text = scoreString + score;
    		
    		//Allow for movement if the player is alive.
    		if(ship.alive){
    			ship.body.velocity.setTo(0,0);
    			
    			if(cursors.left.isDown){
    				ship.body.velocity.x = -200;
    			}
    			else if (cursors.right.isDown){
    				ship.body.velocity.x = 200;
    			}
    		}
    		
    		game.physics.arcade.overlap(ship, stars, this.starCollisionHandler, null, this);
    		game.physics.arcade.overlap(ship, blueStars, this.blueCollisionHandler, null, this);
            
        },
        
        checkPos: function (star){
        	if(star.x > 800){
        		star.kill();
        	}        
        },
        
        blueCheckPos: function(blueStar){
        	if(blueStar.x > 800){
        		blueStar.kill();
        	}
        },
        
        createStar: function (){
        	star = stars.create(game.world.randomX, -120, 'red');
        	star.body.velocity.y = 120;
        	game.physics.arcade.enable(star);
        	star.body.setCircle(8, 32, 32);
        	shine = star.animations.add('shine');
            star.animations.play('shine', 15, true);
        },
        
        createBlueStar: function(){
        	blueStar = blueStars.create(game.world.randomX, -120, 'blue');
        	game.physics.arcade.enable(blueStar);
        	blueStar.body.setCircle(20, 22, 22);
        	blueStar.body.velocity.y = 120;
        },
        
        starCollisionHandler: function(ship, star){
        	explosion = game.add.sprite(ship.body.x, ship.body.y, 'kaboom');
        	explosion.animations.add('kaboom');
        	explosion.animations.play('kaboom', 30, false, true);
        	ship.kill();
        	var finalScore = score;
        	
        	stateText.text=" GAME OVER \n Click to restart \n Score: " + finalScore;
        	stateText.visible = true;

        	//the "click to restart" handler
        	game.input.onTap.addOnce(this.restart,this);
        },
        
        blueCollisionHandler: function(ship, blueStar){
        	blueStar.kill();
        	score += 500;
        	scoreText.text = scoreString + score;
        },
        
        restart: function(){
        	//Restart
        	//Clear Score
        	score = 0;
        	//remove all stars
        	blueStars.removeAll();
        	stars.removeAll();
        	//bring back the player
        	ship.revive();
        	//Hide text
        	stateText.visible = false;
        }
    };
};
