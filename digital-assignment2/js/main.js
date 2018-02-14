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
    var moneyText;
    var eggText;
    var chickenText;
    var farmText;
    var driveText;
    var fineText;
    
    var money;
    var eggs;
    var chicken;
    var farm;
    var drive;
    var fine;
    
    var eggButton;
    var chickenButton;
    var farmButton;
    var driveButton;
    var fineButton;
    
    function create() {
       
       //create the counters for each of the businesses and for money 
        money = 10;
        eggs = 0;
        chicken = 0;
        farm = 0;
        drive = 0;
        fine = 0;
        
    //text creations for the different counters used in the game
        moneyText = game.add.text(game.world.centerX , game.world.centerY - 250 , "You have 0 Dollars!", {
        	font: "25px Arial",
        	fill: "#ff0044",
        	align: "center"
        });
        eggText = game.add.text(game.world.centerX - 150, game.world.centerY - 200, "You have 0 Eggs!", {
        	font: "20px Arial",
        	fill: "#ff0044",
        	align: "center"
        });
        
        chickenText = game.add.text(game.world.centerX - 150, game.world.centerY - 175, "You have " + chicken + " Chickens!", {
        	font: "20px Arial",
        	fill: "#ff0044",
        	align: "center"
        });
        
        farmText = game.add.text(game.world.centerX - 150, game.world.centerY - 150, "You have " + farm + " Farms!", {
        	font: "20px Arial",
        	fill: "#ff0044",
        	align: "center"
        });
        
        driveText = game.add.text(game.world.centerX - 150, game.world.centerY - 125, "You have " + drive + " Drive-Thru's!", {
        	font: "20px Arial",
        	fill: "#ff0044",
        	align: "center"
        });
        
        fineText = game.add.text(game.world.centerX - 150, game.world.centerY - 100, "You have " + fine + " Fine Dining Restaurants!", {
        	font: "20px Arial",
        	fill: "#ff0044",
        	align: "center"
        });
        
        moneyText.anchor.setTo(0.5, 0.5);
        eggText.anchor.setTo(0, 0.5);
        chickenText.anchor.setTo(0, 0.5);
        farmText.anchor.setTo(0, 0.5);
        driveText.anchor.setTo(0, 0.5);
        fineText.anchor.setTo(0, 0.5);
       
    //Button creations for each of the businesses 
        eggButton = game.add.button(game.world.centerX + 175, 400, 'circle', eggAction, this, 2, 1, 0);
    	chickenButton = game.add.button(game.world.centerX, game.world.centerY, 'circle', chickenAction, this, 2, 1, 0);
    	farmButton = game.add.button(game.world.centerX, game.world.centerY, 'circle', farmAction, this, 2, 1, 0);
    	driveButton = game.add.button(game.world.centerX, game.world.centerY, 'circle', driveAction, this, 2, 1, 0);
    	fineButton = game.add.button(game.world.centerX, game.world.centerY, 'circle', fineAction, this, 2, 1, 0);
    	
    	//money loops 
        game.time.events.loop(Phaser.Timer.SECOND, eggPay, this);
        game.time.events.loop(Phaser.Timer.SECOND * 5, chickenPay, this);
        game.time.events.loop(Phaser.Timer.SECOND, farmPay, this);
		game.time.events.loop(Phaser.Timer.SECOND, drivePay, this);
		game.time.events.loop(Phaser.Timer.SECOND, finePay, this);
        
    }
    
    function update() {
        updateText();	
    }
    

    function eggPay(){
        money = money + eggs;
	}
	
	function chickenPay(){
		money = money + (chicken * 100);
	}
    
    function farmPay(){
		money = money + (farm * 100);
	}
	
	function drivePay(){
		money = money + (drive * 100);
	}
	
	function finePay(){
		money = money + (fine * 100);
	}
    
    function updateText() {
    	moneyText.setText("You have " + money + " Dollars!");
    }
    
    
    function eggAction(){
    	if(money - 10 >= 0){
    		money = money - 10;
    		eggs++;
    	}
    	updateText();
    	eggText.setText("You have " + eggs + " Eggs!");	
    }
    
    function chickenAction(){
    	if(money - 1000 >= 0){
    		money = money - 1000;
    		chicken++;
    	}
    	updateText();
    	chickenText.setText("You have " + chicken + " Chickens!");
    }
    
    function farmAction(){
    	if(money - 1000 >= 0){
    		money = money - 1000;
    		farm++;
    	}
    	updateText();
    	farmText.setText("You have " + farm + " Farms!");
    }
    
    function driveAction(){
    	if(money - 1000 >= 0){
    		money = money - 1000;
    		drive++;
    	}
    	updateText();
    	driveText.setText("You have " + drive + " Drive-Thru's!");
    }
    
    function fineAction(){
    	if(money - 1000 >= 0){
    		money = money - 1000;
    		fine++;
    	}
    	updateText();
    	fineText.setText("You have " + fine + " Fine Dining Restaurants!");
    }
};
