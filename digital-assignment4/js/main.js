"use strict";
//Author: Matthew Gayhart

window.onload = function() {
    
    var game = new Phaser.Game( 1200, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
    	game.load.image('pollo', 'assets/pollo.png');
    	game.load.image('chick', 'assets/chicken.png');
    	game.load.image('egg', 'assets/egg.png');
    	game.load.image('farm', 'assets/farm.png');
    	game.load.image('fineDine', 'assets/fineDine.png');
    	game.load.audio('money', 'assets/sounds/Cha_Ching.mp3');
    	game.load.image('background', 'assets/background.jpg');

    }
    
    //background variable
    var background;
    // Money sound variable
    var moneySound;
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
    
    //Variables for the amount of money each business produce
    var eggMoney;
    var chickenMoney;
    var farmMoney;
    var driveMoney;
    var fineMoney;
    
    //Multipliers for businesses that have over 100 owned
    var eggMult;
    var chickenMult;
    var farmMult;
    var driveMult;
    var fineMult;
    
    // Button variables for each business, used to purchase more businesses
    var eggButton;
    var chickenButton;
    var farmButton;
    var driveButton;
    var fineButton;
    
    function create() {
    
    	background = game.add.tileSprite(0,0,1200,600, 'background');
       
       //create the sound and begin decoding the file
       moneySound = game.add.audio('money');
       
       //create the counters for each of the businesses and for money 
        money = 10;
        eggs = 0;
        chicken = 0;
        farm = 0;
        drive = 0;
        fine = 0;
        
        //set the cost of each business
        eggCost = 10;
        chickenCost = 250;
        farmCost = 1000;
        driveCost = 10000;
        fineCost = 50000;
        
        
        //Set the times in seconds for each of the businesses to produce money
        eggTime = 1;
        chickenTime = 3;
        farmTime = 5;
        driveTime = 7;
        fineTime = 9;
        
        //Set Multipliers for the business earnings
        eggMult = 1;
        chickenMult = 1;
        farmMult = 1;
        driveMult = 1;
        fineMult = 1;
       
       //Set the variables that track the amount of money each business produces 
        eggMoney = eggs * eggMult * 1;
        chickenMoney = chicken * chickenMult * 100;
        farmMoney = farm * farmMult * 500;
        driveMoney = drive * driveMult * 1000;
        fineMoney = fine * fineMult * 10000;
        
        //text creations for the different counters used in the game
        moneyText = game.add.text(1050 , 25 , "You have 0 Dollars!", {
        	font: "25px Arial",
        	fill: "#3ec120",
        	align: "center"
        });
        eggText = game.add.text(110, game.world.centerY - 235, "You have " + eggs + " Eggs! They are producing $" + eggMoney + " every " + eggTime + " seconds.  1 Egg costs: " + eggCost + " dollars!", {
        	font: "20px Arial",
        	fill: "#ff0044",
        	align: "center"
        });
        
        chickenText = game.add.text(110, game.world.centerY - 115, "You have " + chicken + " Chickens! They are producing $" + chickenMoney + " every " + chickenTime + " seconds.  1 Chicken costs: " + chickenCost + " dollars!" , {
        	font: "20px Arial",
        	fill: "#ff0044",
        	align: "center"
        });
        
        farmText = game.add.text(110, game.world.centerY + 10, "You have " + farm + " Farms! They are producing $" + farmMoney + " every " + farmTime + " seconds.  1 Farm costs: " + farmCost + " dollars!", {
        	font: "20px Arial",
        	fill: "#ff0044",
        	align: "center"
        });
        
        driveText = game.add.text(110, game.world.centerY + 135, "You have " + drive + " Drive-Thru's! They are producing $" + driveMoney + " every " + driveTime + " seconds.  1 Drive-Thru costs: " + driveCost + " dollars!", {
        	font: "20px Arial",
        	fill: "#ff0044",
        	align: "center"
        });
        
        fineText = game.add.text(110, game.world.centerY + 260, "You have " + fine + " Fine Dining Restaurants! They are producing $" + fineMoney + " every " + fineTime + " seconds.  1 Restaurant costs: " + fineCost + " dollars!", {
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
        eggButton = game.add.button(0, 0, 'egg', eggAction, this, 2, 1, 0);
    	chickenButton = game.add.button(0, 130, 'chick', chickenAction, this, 2, 1, 0);
    	farmButton = game.add.button(0, 260, 'farm', farmAction, this, 2, 1, 0);
    	driveButton = game.add.button(0, 390, 'pollo', driveAction, this, 2, 1, 0);
    	fineButton = game.add.button(0, 520, 'fineDine', fineAction, this, 2, 1, 0);
    	
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
        money = money + eggMoney;
	}
	
	function chickenPay(){
		money = money + chickenMoney;
	}
    
    function farmPay(){
		money = money + farmMoney;
	}
	
	function drivePay(){
		money = money + driveMoney;
	}
	
	function finePay(){
		money = money + fineMoney;
	}
    
    function updateText() {
    	moneyText.setText("You have " + money + " Dollars!");
    }
    
    
    function eggAction(){
    	if(money - eggCost >= 0){
    		money = money - eggCost;
    		eggs++;
    		eggMoney = eggs * eggMult * 1; 
    		moneySound.play();
    	}
    	updateText();
    	eggText.setText("You have " + eggs + " Eggs! Your eggs are producing " + eggMoney + " every " + eggTime + " seconds.  1 Egg costs: " + eggCost + " dollars!");	
    }
    
    function chickenAction(){
    	if(money - chickenCost >= 0){
    		money = money - chickenCost;
    		chicken++;
    		chickenMoney = chicken * chickenMult * 100;
    		moneySound.play();
    	}
    	updateText();
    	chickenText.setText("You have " + chicken + " Chickens! They are producing $" + chickenMoney + " every " + chickenTime + " seconds.  1 Chicken costs: " + chickenCost + " dollars!");
    }
    
    function farmAction(){
    	if(money - farmCost >= 0){
    		money = money - farmCost;
    		farm++;
    		farmMoney = farm * farmMult * 500;
    		moneySound.play();
    	}
    	updateText();
    	farmText.setText("You have " + farm + " Farms! They are producing $" + farmMoney + " every " + farmTime + " seconds.  1 Farm costs: " + farmCost + " dollars!");
    }
    
    function driveAction(){
    	if(money - driveCost >= 0){
    		money = money - driveCost;
    		drive++;
    		driveMoney = drive * driveMult * 1000;
    		moneySound.play();
    	}
    	updateText();
    	driveText.setText("You have " + drive + " Drive-Thru's! They are producing $" + driveMoney + " every " + driveTime + " seconds.  1 Drive-Thru costs: " + driveCost + " dollars!");
    }
    
    function fineAction(){
    	if(money - fineCost >= 0){
    		money = money - fineCost;
    		fine++;
    		fineMoney = fine * fineMult * 10000;
    		moneySound.play();
    	}
    	updateText();
    	fineText.setText("You have " + fine + " Fine Dining Restaurants! They are producing $" + fineMoney + " every " + fineTime + " seconds.  1 Restaurant costs: " + fineCost + " dollars!");
    }
};
