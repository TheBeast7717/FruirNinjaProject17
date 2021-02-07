var sword, swordImage;
var fruit1Group, fruit2Group, fruit3Group, fruit4Group;
var fruit1Image, fruit2Image, fruit3Image, fruit4Image;
var obstacle1Group;
var bonus1Group;
var bonusLifeGroup , bonusLife2Group;
var obstacle1Image, obstacle2Image;
var gameOver, gameOverImage;
var life = 3;
var life1, life2, life3;
var lifeImage, lostLifeImage;
var fruitEnd;
var bonus1, bonus1Image;
var bonusLife , bonusLife2;
var background0, background0Image;
var restart, restartImage;
let score = 0;
let modeName = 0;
BEFOREPLAY = 0;
PLAY = 1;
END = 2;
WIN = 3;
var challengeMode , endlessMode;
var endlessModeImage , challengeModeImage;
var target = 1;




gameState = BEFOREPLAY;
var song, chopSound1, chopSound2, bombSound1, fruitOutSound, clickSound , bonus1Sound , lifeGainSound , victorySound , crowdSound;
var startButton, startButtonImage;







function preload() {
  swordImage = loadImage("Sword_Fruit_Niunja_1-removebg-preview 1.png");
  fruit1Image = loadImage("fruit1.png");
  fruit2Image = loadImage("fruit2.png");
  fruit3Image = loadImage("fruit3.png");
  fruit4Image = loadImage("fruit4.png");
  obstacle1Image = loadImage("Fruit_ninja_bombbb1-removebg-preview.png");
  obstacle2Image = loadImage("Fruit_ninja_bombbb_2-removebg-preview.png");
  gameOverImage = loadImage("Game over fruit ninja.jpg");
  lifeImage = loadImage("Life_images-removebg-preview.png");
  lostLifeImage = loadImage("Lost_life__2_-removebg-preview.png");
  background0Image = loadImage("Fruit ninja-background.jpg");
  restartImage = loadImage("Restart_image_2-removebg-preview.png");
  startButtonImage = loadImage("Start_Button1-removebg-preview2.png");
  bonus1Image = loadImage("Bonus1-items-illustration-removebg-preview.png");
  endlessModeImage = loadImage("Endless Mode pic.png");
  challengeModeImage = loadImage("Challenge Mode Image.png");
  song = loadSound("Fruit-Ninja-Theme-Song.mp3");
  chopSound1 = loadSound("Chop_Sound1.mp3");
  chopSound2 = loadSound("Chop_Sound2.mp3");
  bombSound1 = loadSound("BombTouching_1.mp3");
  fruitOutSound = loadSound("FruitOutLost1.mp3");
  clickSound = loadSound("MouseClick_1.mp3");
  fruitEndSound = loadSound("Fruit end sound.mp3");
  bonus1Sound = loadSound("Bonus touching Sound.mp3");
  lifeGainSound =  loadSound("Life gain Sound.mp3");
  victorySound = loadSound("Badass Victory.wav");
  crowdSound = loadSound("Victory crowd reverb.wav")
  
}



function setup() {
  createCanvas(500,400);

  

  background0 = createSprite(250, 200);
  background0.addImage(background0Image);
  background0.scale = 0.5;
  background0.visible = true;


  //Creating Sword
  sword = createSprite(250, 270, 20, 20);
  sword.addImage(swordImage)
  sword.scale = 0.23;
  //sword.debug = true;
  sword.setCollider("rectangle",6,0,70,sword.height)  

  // Creating Groups
  fruit1Group = new Group();
  fruit2Group = new Group();
  fruit3Group = new Group();
  fruit4Group = new Group();
  obstacle1Group = new Group();
  bonus1Group =  new Group();
  bonusLifeGroup = new Group();
  bonusLife2Group = new Group();

  // Creating lifes
  life1 = createSprite(20, 20, 20, 20)
  life1.addImage("life1", lifeImage);
  life1.addImage("lost1", lostLifeImage);
  life1.scale = 0.1;
  life1.visible = false;

  life2 = createSprite(50, 20, 20, 20)
  life2.addImage("life2", lifeImage);
  life2.addImage("lost2", lostLifeImage);
  life2.scale = 0.1;
  life2.visible = false;

  life3 = createSprite(80, 20, 20, 20);
  life3.addImage("life3", lifeImage);
  life3.addImage("lost3", lostLifeImage);
  life3.scale = 0.1;
  life3.visible = false;

  // Creating game over 
  gameOver = createSprite(-600, 190, 20, 20);
  gameOver.addImage(gameOverImage);
  gameOver.scale = 0.9;
 

  //Restart Image
  restart = createSprite(-600, 190, 20, 20);
  restart.addImage(restartImage);



  //Creating the end line for fruits
  fruitEnd = createSprite(250, -50, 550, 10)
  fruitEnd.visible = false;

  startButton = createSprite(-250, 120, 20, 20);
  startButton.addImage(startButtonImage);
  
   // Creating the challenge mode
  challengeMode = createSprite(130,240,100,20);
  challengeMode.addImage(challengeModeImage);
  challengeMode.scale = 0.525;
  //challengeMode.debug = true;
  challengeMode.setCollider("rectangle",-25,-15,280,170)
  

  // Creating the endless mode
  endlessMode = createSprite(380,220,100,20);
  endlessMode.addImage(endlessModeImage);
  endlessMode.scale = 0.525;
 // endlessMode.debug = true;
  endlessMode.setCollider("rectangle",-35,26,305,180)
  
 
  // if(gameState===BEFOREPLAY){
  // target = Math.round(random(1,10));
  // }
  
  

}

function draw() {
  background("white");
  
 // for(var l=0; l<5; l++) {
  //  var target = Math.floor(Math.random()*5);  
  //  alert(randomNumber)
//}
  
  //var target = Math.floor(random(100,109));
 // target = 120
  
  

 //  target = 1;
  
  if(mousePressedOver(startButton)&&gameState===BEFOREPLAY){
    target = Math.round(random(30,122))
  }
    
    
      
      
      
  
  
  

  
  
  // In endlessMode
  if(mousePressedOver(endlessMode)){
    startButton.x = 250;
    clickSound.play();
    endlessMode.x = -250;
    challengeMode.x = -250;
    modeName= 1 ;
    
  }
  
    // In ChallengeMode
  if(mousePressedOver(challengeMode)){
    startButton.x = 250;
    clickSound.play();
    endlessMode.x = -250;
    challengeMode.x = -250;
    modeName= 2 ;
    
  }
  
  
  
  
  
  // In the play state 
  if (mousePressedOver(startButton) && gameState === BEFOREPLAY) {
    startButton.visible = false;
    gameState = PLAY;
    clickSound.play();
    sword.scale = 0.23;
    
     song.play();
  song.setVolume(0.05);
    
    
    
  }


  // Touching Fruit1 (Orange)
  if (sword.isTouching(fruit1Group)) {
    fruit1Group.destroyEach();
    score = score + 1;
    chopSound1.play();
  }

  // Touching Fruit2 (Apple)
  if (sword.isTouching(fruit2Group)) {
    fruit2Group.destroyEach();
    score = score + 1;
    chopSound2.play();
  }

  // Touching Fruit3 (Pear)
  if (sword.isTouching(fruit3Group)) {
    fruit3Group.destroyEach();
    score = score + 1;
    chopSound1.play();
  }

  // Touching Fruit4 (Banana)
  if (sword.isTouching(fruit4Group)) {
    fruit4Group.destroyEach();
    score = score + 1;
    chopSound2.play();
  }

  // Touching Bomb
  if (sword.isTouching(obstacle1Group)) {
    gameState = END;
    bombSound1.play();
  }
  
  // Touching Bonus
  if(sword.isTouching(bonus1Group)){
     bonus1Group.destroyEach();
     score = score +10;
     bonus1Sound.play();
     
  }
  
  
  



  //  Restarting 
  if (mousePressedOver(restart) && gameState === END ||mousePressedOver(restart) && gameState === WIN ) {
    gameState = BEFOREPLAY;
    fruit1Group.destroyEach();
    fruit2Group.destroyEach();
    fruit3Group.destroyEach();
    fruit4Group.destroyEach();
    obstacle1Group.destroyEach();
    score = 0;
    gameOver.visible = false;
    restart.visible = false;

    life3.changeAnimation("life3", lifeImage);
    life2.changeAnimation("life2", lifeImage);
    life1.changeAnimation("life1", lifeImage);
    life = 3;

    // setting visibility for life 
    life1.visible = false;
    life2.visible = false;
    life3.visible = false;

    startButton.visible = true;
    //song.play();
    clickSound.play();

    // Positions for the modes
    challengeMode.x = 130;
    endlessMode.x = 380;

    startButton.x = -250;
    modeName = 0;
    




  }

  // Life lost for group 1(orange)
  if (fruit1Group.isTouching(fruitEnd) && life === 3) {
    fruit1Group.destroyEach();
    life3.changeAnimation("lost3", lostLifeImage)
    life = 2;
    fruitEndSound.play();
  }

  if (fruit1Group.isTouching(fruitEnd) && life === 2) {
    fruit1Group.destroyEach();
    life2.changeAnimation("lost2", lostLifeImage)
    life = 1;
    fruitEndSound.play();
  }

  if (fruit1Group.isTouching(fruitEnd) && life === 1) {
    fruit1Group.destroyEach();
    life1.changeAnimation("lost1", lostLifeImage)
    life = 0;
    fruitEndSound.play();
  }


  // Life lost for group 2(apple)
  if (fruit2Group.isTouching(fruitEnd) && life === 3) {
    fruit2Group.destroyEach();
    life3.changeAnimation("lost3", lostLifeImage)
    life = 2;
    fruitEndSound.play();
  }

  if (fruit2Group.isTouching(fruitEnd) && life === 2) {
    fruit2Group.destroyEach();
    life2.changeAnimation("lost2", lostLifeImage)
    life = 1;
    fruitEndSound.play();
  }

  if (fruit2Group.isTouching(fruitEnd) && life === 1) {
    fruit2Group.destroyEach();
    life1.changeAnimation("lost1", lostLifeImage)
    life = 0;
    fruitEndSound.play();
  }


  // Life lost for group 3(Pear)
  if (fruit3Group.isTouching(fruitEnd) && life === 3) {
    fruit3Group.destroyEach();
    life3.changeAnimation("lost3", lostLifeImage)
    life = 2;
    fruitEndSound.play();
  }

  if (fruit3Group.isTouching(fruitEnd) && life === 2) {
    fruit3Group.destroyEach();
    life2.changeAnimation("lost2", lostLifeImage)
    life = 1;
    fruitEndSound.play();
  }

  if (fruit3Group.isTouching(fruitEnd) && life === 1) {
    fruit3Group.destroyEach();
    life1.changeAnimation("lost1", lostLifeImage)
    life = 0;
    fruitEndSound.play();
  }


  // Life lost for group 4(Bananas)
  if (fruit4Group.isTouching(fruitEnd) && life === 3) {
    fruit4Group.destroyEach();
    life3.changeAnimation("lost3", lostLifeImage)
    life = 2;
    fruitEndSound.play();
  }

  if (fruit4Group.isTouching(fruitEnd) && life === 2) {
    fruit4Group.destroyEach();
    life2.changeAnimation("lost2", lostLifeImage)
    life = 1;
    fruitEndSound.play();
  }

  if (fruit4Group.isTouching(fruitEnd) && life === 1) {
    fruit4Group.destroyEach();
    life1.changeAnimation("lost1", lostLifeImage)
    life = 0;
    fruitEndSound.play();
  }

  // Ending game if life is equal to 0
  if (life === 0) {
    gameState = END;

  }

  // Setting Collider for sprites
  startButton.setCollider("rectangle",0,45,180,50)
  
  // Setting Milestone sound
  //if(score>0 &&score %10===0){
  //   bonus1Sound.play();
  //}
  
  // Touching Bounus life 1
  if(sword.isTouching(bonusLifeGroup)){
    bonusLifeGroup.destroyEach();
    life = life+1;
    life2.changeAnimation("life2",lifeImage);
    lifeGainSound.play();
    
  }
   
  // Touching Bonus Life 2
  if(sword.isTouching(bonusLife2Group)){
     bonusLife2Group.destroyEach();
    life = life +1;
    life3.changeAnimation("life3",lifeImage);
    lifeGainSound.play();
  }
  
  if(life===1){
    bonusLife2Group.destroyEach();
  }
  
  
  console.log(target);
  
  if((score>=target)&&gameState===PLAY){
    victorySound.play();
    crowdSound.play();
  }
  
  
    
  
  
  
  


  drawSprites();

  //text("Hello User",200,200);
  
  
  
  
  
  
  
  
  
  ///////////////////////////////////////////////////////////
  // In the Before Play state
  if (gameState === BEFOREPLAY) {

    textSize(32)
    fill("teal")
    text("Welcome to         Ninja", 100, 60)

    textSize(32)
    fill(193, 153, 0)
    text("Fruit", 275, 60);

    sword.x = 250;
    sword.y = 300;
    sword.visible = true;
    sword.scale = 0.3
    
    // No Inspection
     document.addEventListener('contextmenu', function(e) { e.preventDefault(); });
    
   
  
    
    
    
    
  }
  /////////////////////////////////////////////////////////////

  if ((gameState === PLAY)&&modeName===1) {
     
    

    //Displaying Score
    textSize(24);
    fill("")
    text("Score  " + score, 335, 35);
    noFill();
    rect(320, 4, 150, 50);

    // Calling Functions
    spawnFruit1();
    spawnFruit2();
    spawnFruit3();
    spawnFruit4();
    spawnObstacle1();
    spawnBonus();
    spawnBonusLife();
    spawnBonusLife2();
   

    // Movements for sword
    sword.x = mouseX;
    sword.y = mouseY;

    // setting visibility for life 
    life1.visible = true;
    life2.visible = true;
    life3.visible = true;
  }
  
  
  
  
  
  
  
  
  
/////////////////////////////////////////////////////////  
  
   if ((gameState === PLAY)&&modeName===2) {
    
     // Displaying Target
     textSize(20);
     fill(40,180,100);
     text("Target :  "+ target,10,60);

     
    //Displaying Score
    textSize(24);
    fill("")
    text("Score  " + score, 335, 35);
    noFill();
    rect(320, 4, 150, 50);

    // Calling Functions
    spawnFruit1();
    spawnFruit2();
    spawnFruit3();
    spawnFruit4();
    spawnObstacle1();
    spawnBonus();
    spawnBonusLife();
    spawnBonusLife2();
   

    // Movements for sword
    sword.x = mouseX;
    sword.y = mouseY;

    // setting visibility for life 
    life1.visible = true;
    life2.visible = true;
    life3.visible = true;

     restart.visible = false;
     
   
    
    
    
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //////////////////////////////////////////////////////////// 

  if (gameState === END) {
    song.stop();
    //Displaying Score
    textSize(24);
    fill("")
    text("Your Score :     " + score, 155, 35);
    noFill();
    rect(150, 4, 220, 50);


    fruit1Group.destroyEach();
    fruit2Group.destroyEach();
    fruit3Group.destroyEach();
    fruit4Group.destroyEach();
    obstacle1Group.destroyEach();
    bonus1Group.destroyEach();
    bonusLifeGroup.destroyEach();


    gameOver.visible = true;
    restart.visible = true;

    gameOver.x = 250;
    gameOver.y = 190;
    gameOver.scale = 0.9;

    restart.x = 250;
    restart.y = 330;
    restart.scale = 0.5;

    modeName = 0;

  }
  //////////////////////////////////////////////////////////// 

  if((modeName===1)&&gameState===BEFOREPLAY){
      fill(239, 255, 8);
      text("Endless Mode : ON",120,100);
      textSize(20);
      fill(255, 111, 8);
      text("How Long Can You Play ??",126 ,210)
  }
  
  if((modeName===2)&&gameState===BEFOREPLAY){
    fill(212, 44, 44);
    text("Challenge Mode !!  : ON",90,120);
    textSize(20);
    fill(255, 111, 8)
    text("Can You Beat It ??",170,210);
    
   
    
  }
 ///////////////////////////////////////////////////////// 
  if((score>=target)&&modeName===2){
    gameState = WIN;
    

  }
  
  
  
  
  if(gameState===WIN){
    modeName = 0;
    song.stop();
    
    fruit1Group.destroyEach();
    fruit2Group.destroyEach();
    fruit3Group.destroyEach();
    fruit4Group.destroyEach();
    obstacle1Group.destroyEach();
    bonus1Group.destroyEach();
    bonusLifeGroup.destroyEach();
    
    sword.visible = false;
    life1.visible = false;
    life2.visible = false;
    life3.visible = false;
   
    
    restart.x = 250;
    restart.y = 330;
    restart.scale = 0.5;
    restart.visible = true;
    
    
    textSize(70);
    fill(235, 211, 0)
    text("Congo🎉",120,80);
    
    textSize(60)
    text("🎇",30,70);
    text("🎇",30,140);
    
    
    
    
    textSize(74)
    fill(100,random(225),160 );
    text("You win🎊 ",100,150);
    
    
   
    
  
    
    
    
  }
  
  ///////////////////////////////////////////////////////
  
  
  
  
  
  
  
}

function spawnFruit1() {
  if (frameCount % 100 === 20) {
    fruit1 = createSprite(250, 400, 20, 20);
    fruit1.addImage(fruit1Image);
    fruit1.x = Math.round(random(20, 480))
    fruit1.scale = 0.2;
    fruit1.velocityY = -(6 + 2*score/14);
    fruit1.lifetime = 110;
    fruit1Group.add(fruit1);
  }
}

function spawnFruit2() {
  if (frameCount % 100 === 10) {
    fruit2 = createSprite(250, 400, 20, 20);
    fruit2.addImage(fruit2Image);
    fruit2.x = Math.round(random(20, 480))
    fruit2.scale = 0.2;
    fruit2.velocityY = -(8 + 2*score/11);
    fruit2.lifetime = 110;
    fruit2Group.add(fruit2);
  }
}

function spawnFruit3() {
  if (frameCount % 148 === 70) {
    fruit3 = createSprite(250, 400, 20, 20);
    fruit3.addImage(fruit3Image);
    fruit3.x = Math.round(random(20, 480))
    fruit3.scale = 0.2;
    fruit3.velocityY = -(6.6 + 2*score/15);
    fruit3.lifetime = 110;
    fruit3Group.add(fruit3);
  }
}

function spawnFruit4() {
  if (frameCount % 165 === 12) {
    fruit4 = createSprite(250, 400, 20, 20);
    fruit4.addImage(fruit4Image);
    fruit4.x = Math.round(random(50, 460))
    fruit4.scale = 0.2;
    fruit4.velocityY = -(5.89 + 2*score/100);
    fruit4.lifetime = 110;
    fruit4Group.add(fruit4);
  }
}

function spawnObstacle1() {
  if (frameCount % 225 === 205) {
    obstacle1 = createSprite(250, 400, 20, 20);
    obstacle1.scale = 0.1;
    obstacle1.x = Math.round(random(50, 460))
    obstacle1.velocityY = -(5.89 + 2*score/100);



    var randomNumber = Math.round(random(1, 2))

    switch (randomNumber) {
      case 1:
        obstacle1.addImage(obstacle1Image)
        obstacle1.scale = 0.15;
        obstacle1.setCollider("circle", -5, 80, 160);
        break;
      case 2:
        obstacle1.addImage(obstacle2Image)
        obstacle1.scale = 0.35;
        obstacle1.setCollider("circle", -45, 55, 60);
        break;
    }
    obstacle1.lifetime = 110;
    obstacle1Group.add(obstacle1);
  }
}

function spawnBonus(){
  if(frameCount %800 ===90){
    bonus1 = createSprite(200,400,20,20);
    bonus1.x = Math.round(random(40,360));
    bonus1.addImage(bonus1Image);
    bonus1.scale = 0.8
    bonus1.velocityY = -8;
    bonus1Group.add(bonus1);
    bonus1.setCollider("circle",90,40,40)
    bonus1.lifetime = 100;
  }
}

function spawnBonusLife(){
  if((frameCount% 750===0)&&life===1){
      bonusLife = createSprite(200,400,20,20);
      bonusLife.x = Math.round(random(40,360));
      bonusLife.velocityY = -7;
      bonusLife.addImage(lifeImage);
      bonusLife.scale = 0.15;
      bonusLifeGroup.add(bonusLife);
      bonusLife.lifetime = 70;
    
  }
}

function spawnBonusLife2(){
 if((frameCount%750===0)&&life===2){
   bonusLife2 = createSprite(200,400,20,20);
   bonusLife2.x = Math.round(random(40,360));
   bonusLife2.velocityY = -10;
   bonusLife2.addImage(lifeImage)
   bonusLife2.scale = 0.15;
   bonusLife2Group.add(bonusLife2)
 }
}




