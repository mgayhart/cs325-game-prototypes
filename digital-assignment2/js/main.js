"use strict";
//Author: Matthew Gayhart

window.onload = function() {
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
    	game.load.image('circle', 'assets/circle.png');

    }
    //Text variables used for printing information about each business
    var moneyText;
    var eggText;
    var chickenText;
    var farmText;
    var driveText;
    var fineText;
   
   //counters for the different businesses 
    var money;
    var eggs;
    var chicken;
    var farm;
    var drive;
    var fine;
    
    //Counters for the cost of each business
    var eggCost;
    var chickenCost;
    var farmCost;
    var driveCost;
    var fineCost;
    
    //Time Variables responsible for the amount of time that each business takes to make money
    var eggTime;
    var chickenTime;
    var farmTime;
    var driveTime;
    var fineTime;
    
    // Button variables for each business, used to purchase more businesses
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
        
        
        //Set the times in seconds for each of the businesses to produce money
        eggTime = 1;
        chickenTime = 3;
        farmTime = 5;
        driveTime = 7;
        fineTime = 9;
        
        //text creations for the different counters used in the game
        moneyText = game.add.text(game.world.centerX , game.world.centerY - 250 , "You have 0 Dollars!", {
        	font: "25px Arial",
        	fill: "#3ec120",
        	align: "center"
        });
        eggText = game.add.text(game.world.centerX - 150, game.world.centerY - 200, "You have " + eggs+ " Eggs!", {
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
        eggButton = game.add.button(game.world.centerX - 375, 0, 'circle', eggAction, this, 2, 1, 0);
    	chickenButton = game.add.button(25, 130, 'circle', chickenAction, this, 2, 1, 0);
    	farmButton = game.add.button(25, 260, 'circle', farmAction, this, 2, 1, 0);
    	driveButton = game.add.button(25, 390, 'circle', driveAction, this, 2, 1, 0);
    	fineButton = game.add.button(25, 520, 'circle', fineAction, this, 2, 1, 0);
    	
    	//money loops 
        game.time.events.loop(Phaser.Timer.SECOND * eggTime, eggPay, this);
        game.time.events.loop(Phaser.Timer.SECOND * chickenTime, chickenPay, this);
        game.time.events.loop(Phaser.Timer.SECOND * farmTime, farmPay, this);
		game.time.events.loop(Phaser.Timer.SECOND * driveTime, drivePay, this);
		game.time.events.loop(Phaser.Timer.SECOND * fineTime, finePay, this);
        
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
		money = money + (farm * 500);
	}
	
	function drivePay(){
		money = money + (drive * 1000);
	}
	
	function finePay(){
		money = money + (fine * 10000);
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
    	if(money - 250 >= 0){
    		money = money - 250;
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
    	if(money - 10000 >= 0){
    		money = money - 10000;
    		drive++;
    	}
    	updateText();
    	driveText.setText("You have " + drive + " Drive-Thru's!");
    }
    
    function fineAction(){
    	if(money - 50000 >= 0){
    		money = money - 50000;
    		fine++;
    	}
    	updateText();
    	fineText.setText("You have " + fine + " Fine Dining Restaurants!");
    }
};
