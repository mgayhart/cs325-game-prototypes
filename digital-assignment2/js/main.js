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
    	game.load.image('circle', 'assets/circle.png');

    }
    
    var money;
    var eggs;
    var text;
    var text2;
    var button;
    var i;
    
    function create() {
        
        money = 10;
        eggs = 0;
    
        text = game.add.text(game.world.centerX , game.world.centerY - 150 , "You have 0 dollars!", {
        	font: "25px Arial",
        	fill: "#ff0044",
        	align: "center"
        });
        text2 = game.add.text(game.world.centerX + 50, game.world.centerY + 50, "You have 0 eggs!", {
        	font: "20px Arial",
        	fill: "#ff0044",
        	align: "center"
        });
        
        text.anchor.setTo(0.5, 0.5);
        text2.anchor.setTo(0.5, 0.5);
        
        button = game.add.button(game.world.centerX + 175, 400, 'circle', actionOnClick, this, 2, 1, 0);
        
    }
    
    function update() {
        game.time.events.loop(Phaser.Timer.SECOND * 3, eggPay, this);
        updateText();	
    }
    

    function eggPay(){
		
        money = money + eggs;
		
	}
    
    function updateText() {
    	
    	text.setText("You have " + money + " dollars!");
    
    }
    
    function actionOnClick(){
    	if(money - 10 >= 0){
    		money = money - 10;
    		eggs++;
    	}
    	updateText();
    	
    	text2.setText("You have " + eggs + " eggs!");
    	
    }
};
