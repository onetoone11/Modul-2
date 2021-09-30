// Assets

let health;

let money;

let earnedkey;

// LocalStorage

if(localStorage.health == undefined){
    health = 100;
}
else{
    health = Number(localStorage.health);
}

if(localStorage.money == undefined){
    money = 5;
}
else{
    money = Number(localStorage.money);
}

if(localStorage.earnedkey == undefined){
    earnedkey = 0;
}
else{
    earnedkey = Number(localStorage.earnedkey);
}


// playerBarIcons

document.querySelector('.pBolt').innerHTML = '<i class="fas fa-bolt bolt playerBarIcon"></i>   ' + health; 

document.querySelector('.pCoins').innerHTML = '<i class="fas fa-coins coins playerBarIcon"></i>   ' + money; 

document.querySelector('.pKey').innerHTML = '<i class="fas fa-key key playerBarIcon"></i>   ' + earnedkey;






let sprite = document.querySelector('#sprite');
let backgroundMap = document.querySelector('#backgroundMap');

let btnWalkIn = document.querySelector('.btn-walkIn');

let hide = document.querySelector('.hide');

let show = document.querySelector('.show');

let log = document.querySelector('.conversation-log');


let lisa = document.querySelector('.lisa');
let patrick = document.querySelector('.patrick');
let bob = document.querySelector('.bob');
let mandy = document.querySelector('.mandy');
let player = document.querySelector('.player');
let monster = document.querySelector('.monster');

let pPlayer = document.querySelector('.pPlayer');
let pWorker = document.querySelector('.pWorker');

let placeH1 = document.querySelector('.place');

let placeH2 = document.querySelector('.placeH2');

let placeH5 = document.querySelector('.placeH5');

let yNBtns = document.querySelector('.yNBtns');

let playerBar = document.querySelector('.playerBar');



let questRandom = document.querySelector('#questRandom');


let questTitle = document.querySelector('.questTitle');

let questNameTitle = document.querySelector('.questNameTitle');

let attemptsLeft = document.querySelector('.attemptsLeft');

let attempts = document.querySelector('#attempts');

let questRandomButtons = document.querySelector('.questRandomButtons');




let questInformation = document.querySelector('.questInformation');




let gameOver = document.querySelector('.gameOver');

let winner = document.querySelector('.winner');

let restart = document.querySelector('.restart');

let gameEndText = document.querySelector('.gameEndText');


// Chest

let chestTitle = document.querySelector('.chestTitle');

let chestSuccessP = document.querySelector('.chestSuccessP');

let chestFailureP = document.querySelector('.chestFailureP');

let chestFailureBtn = document.querySelector('.chestFailureBtn');

let chestSuccessBtnOpen = document.querySelector('.chestSuccessBtnOpen');

let chestSuccessBtnNo = document.querySelector('.chestSuccessBtnNo');

let chestSuccessBtn = document.querySelector('.chestSuccessBtn');

let lockedChest = document.querySelector('.lockedChest');

let unlockedChest = document.querySelector('.unlockedChest');

let coin = document.querySelector('.coinAnimation');

let chestDiv = document.querySelector('.chest');


// Monster

let monsterDiv = document.querySelector('.monsterDiv');

let monsterTitle = document.querySelector('.monsterTitle');

let monsterP = document.querySelector('.monsterP');

let monsterBtn = document.querySelector('.monsterBtn');

let monsterFightBtn = document.querySelector('.monsterFightBtn');

let monsterGiveUp = document.querySelector('.monsterGiveUp');

let swordImg = document.querySelector('.swordImg');






// sprite.style.backgroundColor = "green";

const grinderContent = {

    building: 'grinder',
    workerName: 'Patrick',
    workerImg: 'img/patrickGrinder.png',
    id: 1

};

const houseContent = {
    
    building: 'house',
    workerName: 'Lisa',
    workerImg: 'img/lisaHouse.png',
    id: 2

}

const fishHouseContent = {

    building: 'fishHouse',
    workerName: 'Bob',
    workerImg: 'img/bobFishHouse.png',
    id: 3

}

const barnContent = {

    building: 'barn',
    workerName: 'Mandy',
    workerImg: 'img/mandyBarn.png',
    id: 4

}

const playerContent = {

    playerName: 'You',
    playerImg: 'img/player.png',
    id: 5

}

const monsterContent = {

    playerName: 'Monster',
    playerImg: 'img/monster.png',
    id: 6

}


// Size

const w = window.innerWidth;
const h = window.innerHeight;

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
// function varChange(){
//     screenHeight = window.screen.height;
//     screenWidth = window.screen.width;
//     sprite.style.top = screenHeight*0.62 + 'px';
//     sprite.style.left = screenWidth*0.485 + 'px';
// }

// window.onresize = varChange;

let backgroundMapHeight = backgroundMap.offsetHeight;
let backgroundMapWidth = backgroundMap.offsetWidth;

// Padding

let backgroundMapPaddingTop = (screenHeight - backgroundMapHeight)/2;
backgroundMap.style.paddingTop = parseInt(backgroundMapPaddingTop/2) + 'px';

let logPaddingTop = (screenHeight - backgroundMapHeight)/2;
log.style.paddingTop = parseInt(logPaddingTop/2) + 'px';




// Position

let spriteBottomInnerPositionOfMap = parseInt(backgroundMap.style.paddingTop);
let spriteTopInnerPositionOfMap = spriteBottomInnerPositionOfMap + backgroundMapWidth -10;

let spriteLeftInnerPositionOfMap = (screenWidth - backgroundMapWidth)/2;
let spriteRightInnerPositionOfMap = spriteLeftInnerPositionOfMap + backgroundMapWidth -10;

    // Characters position

patrick.style.top = parseInt(screenHeight*0.61) + 'px';
patrick.style.left = parseInt(screenWidth*0.61) + 'px';

lisa.style.top = parseInt(screenHeight*0.61) + 'px';
lisa.style.left = parseInt(screenWidth*0.61) + 'px';

bob.style.top = parseInt(screenHeight*0.61) + 'px';
bob.style.left = parseInt(screenWidth*0.61) + 'px';

mandy.style.top = parseInt(screenHeight*0.61) + 'px';
mandy.style.left = parseInt(screenWidth*0.61) + 'px';

player.style.top = parseInt(screenHeight*0.61) + 'px';
player.style.left = parseInt(screenWidth*0.29) + 'px';

monster.style.top = parseInt(screenHeight*0.61) + 'px';
monster.style.left = parseInt(screenWidth*0.61) + 'px';

    // Character Text Position

pPlayer.style.top = parseInt(screenHeight*0.57) + 'px';
pPlayer.style.left = parseInt(screenWidth*0.37) + 'px';

pWorker.style.top = parseInt(screenHeight*0.57) + 'px';
pWorker.style.left = parseInt(screenWidth*0.61) + 'px';

placeH1.style.top = parseInt(screenHeight*0.1) + 'px';

placeH2.style.top = parseInt(screenHeight*0.15) + 'px';

placeH5.style.top = parseInt(screenHeight*0.33) + 'px';

yNBtns.style.top = parseInt(screenHeight*0.5) + 'px';


questTitle.style.top = parseInt(screenHeight*0.1) + 'px';
questNameTitle.style.top = parseInt(screenHeight*0.18) + 'px';

attemptsLeft.style.top = parseInt(screenHeight*0.3) + 'px';

attempts.style.top = parseInt(screenHeight*0.35) + 'px';

questRandomButtons.style.top = parseInt(screenHeight*0.5) + 'px';


questInformation.style.top = parseInt(screenHeight*0.1) + 'px'; 


gameOver.style.top = parseInt(screenHeight*0.15) + 'px';

winner.style.top = parseInt(screenHeight*0.15) + 'px';

restart.style.top = parseInt(screenHeight*0.6) + 'px';

gameEndText.style.top = parseInt(screenHeight*0.37) + 'px';





chestTitle.style.top = parseInt(screenHeight*0.10) + 'px';

chestSuccessP.style.top = parseInt(screenHeight*0.25) + 'px';

chestFailureP.style.top = parseInt(screenHeight*0.25) + 'px';

chestSuccessBtn.style.top = parseInt(screenHeight*0.4) + 'px';

chestFailureBtn.style.top = parseInt(screenHeight*0.4) + 'px';

unlockedChest.style.top = parseInt(screenHeight*0.53) + 'px';

lockedChest.style.top = parseInt(screenHeight*0.53) + 'px';




// Monster

monsterTitle.style.top = parseInt(screenHeight*0.1) + 'px';

monsterP.style.top = parseInt(screenHeight*0.3) + 'px';

monsterBtn.style.top = parseInt(screenHeight*0.5) + 'px';

swordImg.style.top = parseInt(screenHeight*0.5) + 'px';












btnWalkIn.style.top = screenHeight*0.09 + 'px';
btnWalkIn.style.left = screenWidth*0.31 + 'px';


// questRandom.style.top = parseInt(screenHeight*0.10) + 'px';


    // Buildings Position

let grinder = [screenHeight*0.44, screenHeight*0.565, screenWidth*0.46, screenWidth*0.52, "grinder"];

let house = [screenHeight*0.31, screenHeight*0.43, screenWidth*0.365, screenWidth*0.425, "house"];

let fish = [screenHeight*0.56, screenHeight*0.69, screenWidth*0.63, screenWidth*0.69, "fishHouse"];

let barn = [screenHeight*0.56, screenHeight*0.69, screenWidth*0.32, screenWidth*0.38, "barn"]; 


// ...

let grinderQuests = ['', ''];

grinderQuests[0] = ['Keyquest', 'Someone dropped all the keys downstairs, can you please help me find them all, by complete a quest.'];
grinderQuests[1] = ['Treequest', 'A tree just fell, can you help me move it, by complete a quest?'];




let award = ['key', 'money', 'energy'];

let randomAward = Math.floor(Math.random()*3);

let randomAmount = Math.floor(Math.random()*5 + 1);

// window load

window.addEventListener('load', () => {
    sprite.style.position = 'absolute';
    sprite.style.top = screenHeight*0.61 + 'px';
    sprite.style.left = screenWidth*0.48 + 'px';
    log.style.display = 'none';
});

// Sprite, Move

let spriteSpeed = 5;

window.addEventListener('keydown', (event) => {
    buttons();

    gamePosition((grinder[0]),(grinder[1]),(grinder[2]), (grinder[3]), (grinder[4]));
    gamePosition((house[0]), (house[1]), (house[2]), (house[3]), (house[4]));
    gamePosition((fish[0]), (fish[1]), (fish[2]), (fish[3]), (fish[4]));
    gamePosition((barn[0]), (barn[1]), (barn[2]), (barn[3]), (barn[4]));

    if(event.key == 'ArrowDown' && parseInt(sprite.style.top) < spriteTopInnerPositionOfMap){
        sprite.style.top = parseInt(sprite.style.top) + spriteSpeed + 'px';
    }
    if(event.key == 'ArrowUp' && parseInt(sprite.style.top) > spriteBottomInnerPositionOfMap){
        sprite.style.top = parseInt(sprite.style.top) - spriteSpeed + 'px';
    }
    if(event.key == 'ArrowRight' && parseInt(sprite.style.left) < spriteRightInnerPositionOfMap){
        sprite.style.left = parseInt(sprite.style.left) + spriteSpeed + 'px';
    }
    if(event.key == 'ArrowLeft' && parseInt(sprite.style.left) > spriteLeftInnerPositionOfMap){
        sprite.style.left = parseInt(sprite.style.left) - spriteSpeed + 'px';
    }
    if(health < 10){
        exhausted();
    }
    if(money < 5){
        broke();
    }
    if(money > 100){
        rich();
    }
}); 

window.addEventListener('click', (event) => {
    
    if(health < 10){
        exhausted();
    }
    if(money < 5){
        broke();
    }
    if(money > 100){
        rich();
    } 
});



let buttonsTrueFalse = false;
buttons();

function gamePosition(h1, h2, b1, b2, building){

    h1 = Math.floor(h1);
    h2 = Math.floor(h2);
    b1 = Math.floor(b1);
    b2 = Math.floor(b2);

    if(parseInt(sprite.style.left) > b1 && parseInt(sprite.style.left) < b2 && parseInt(sprite.style.top) > h1 && parseInt(sprite.style.top) < h2){
        buttonsTrueFalse = true;
        btnWalkIn.style.display = "block";
        
        btnWalkIn.id = `${building}`;
    }
    else {
        buttonsTrueFalse = false;
    }

}

function buttons(){

    if(buttonsTrueFalse == true){
        btnWalkIn.style.display = "block";
    }
    else if(buttonsTrueFalse == false){
        btnWalkIn.style.display = "none";
    }

}

function hideContent(){

    if(hide.style.display == "none" && show.style.display == "block"){
        hide.style.display = "block";
        show.style.display = "none";
        player.style.display = "none";
        patrick.style.display = "none";
        lisa.style.display = "none";
        bob.style.display = "none";
        mandy.style.display = "none";
        log.style.display = 'none';
        playerBar.style.backgroundColor = "#384d00";  

    }
    else{
        hide.style.display = "none";
        show.style.display = "block";
        log.style.display = 'block';
        let a = btnWalkIn.id;

        playerBar.style.backgroundColor = 'transparent';

        conversationLog(a);

        btnWalkIn.id = '';
    }

    
}


function conversationLog(place){


    // let b = `${place}Content`

    // b = grinderContent

    // alert(b);
    // alert(place);
    // alert(grinderContent.building);

    if(place == grinderContent.building){

        patrick.style.display = "block";
        player.style.display = 'block';
        pWorker.innerHTML = grinderContent.workerName;
        pPlayer.innerHTML = playerContent.playerName;
        placeH1.innerHTML = grinderContent.building.toUpperCase();

        playerBar.style.backgroundColor = 'transparent';

        let randomQuest = Math.floor(Math.random()*2);
        
        placeH2.innerHTML = grinderQuests[randomQuest][0];
        placeH5.innerHTML = grinderQuests[randomQuest][1];

    }
    else if(place == houseContent.building){

        lisa.style.display = 'block';
        player.style.display = 'block';
        pWorker.innerHTML = houseContent.workerName;
        pPlayer.innerHTML = playerContent.playerName;
        placeH1.innerHTML = houseContent.building.toUpperCase();

        playerBar.style.backgroundColor = 'transparent';

        let randomQuest = Math.floor(Math.random()*2);
        
        placeH2.innerHTML = grinderQuests[randomQuest][0];
        placeH5.innerHTML = grinderQuests[randomQuest][1];

    }
    else if(place == fishHouseContent.building){
        
        bob.style.display = 'block';
        player.style.display = 'block';
        pWorker.innerHTML = fishHouseContent.workerName;
        pPlayer.innerHTML = playerContent.playerName;
        placeH1.innerHTML = fishHouseContent.building.toUpperCase();

        playerBar.style.backgroundColor = 'transparent';

        let randomQuest = Math.floor(Math.random()*2);
        
        placeH2.innerHTML = grinderQuests[randomQuest][0];
        placeH5.innerHTML = grinderQuests[randomQuest][1];

    }
    else if(place == barnContent.building){

        mandy.style.display = 'block';
        player.style.display = 'block';
        pWorker.innerHTML = barnContent.workerName;
        pPlayer.innerHTML = playerContent.playerName;
        placeH1.innerHTML = barnContent.building.toUpperCase();

        playerBar.style.backgroundColor = 'transparent';

        let randomQuest = Math.floor(Math.random()*2);
        
        placeH2.innerHTML = grinderQuests[randomQuest][0];
        placeH5.innerHTML = grinderQuests[randomQuest][1];

    }
    
}



function acceptQuest(healthVal){

    coin.style.display = 'none';
    unlockedChest.style.display = 'none';
    chestFailureBtn.style.display = 'none';

    let randomChestMonster = Math.floor(Math.random()*15);

    if(randomChestMonster == 0){
        // Chest
        health -= healthVal;
        document.querySelector('.pBolt').innerHTML = `<i class="fas fa-bolt bolt playerBarIcon"></i>   ${health}`;
        localStorage.setItem('health', health);
        player.style.display = 'none';
        monster.style.display = 'none';
        chest();
        

    }
    else if(randomChestMonster == 1){
       // monster

       // Chest none
       unlockedChest.style.display = 'none';
       lockedChest.style.display = 'none';
       coin.style.display = 'none';
       chestFailureBtn.style.display = 'none';
       chestSuccessBtnOpen.style.display = 'none';
       chestSuccessBtnNo.style.display = 'none';
       chestSuccessP.style.display = 'none';
       chestFailureP.style.display = 'none';
       chestTitle.style.display = 'none';

       health -= healthVal;
        document.querySelector('.pBolt').innerHTML = `<i class="fas fa-bolt bolt playerBarIcon"></i>   ${health}`;
        localStorage.setItem('health', health);


       monsterI();

    }
    else{
        health -= healthVal;
        // alert(health);
        document.querySelector('.pBolt').innerHTML = `<i class="fas fa-bolt bolt playerBarIcon"></i>   ${health}`;
        localStorage.setItem('health', health);

        // Random quest

        playerBar.style.backgroundColor = 'transparent';

        show.style.display = 'none';

        log.style.display = 'block';

        questInformation.style.display = 'block';

        player.style.display = 'none';

        // Chest none
        unlockedChest.style.display = 'none';
        lockedChest.style.display = 'none';
        coin.style.display = 'none';
        chestFailureBtn.style.display = 'none';
        chestSuccessBtnOpen.style.display = 'none';
        chestSuccessBtnNo.style.display = 'none';
        chestSuccessP.style.display = 'none';
        chestFailureP.style.display = 'none';
        chestTitle.style.display = 'none';

        // Monster none
        monster.style.display = 'none';
        monsterDiv.style.display = 'none';
        monsterTitle.style.display = 'none';
        monsterP.style.display = 'none';
        monsterBtn.style.display = 'none';
        monsterFightBtn.style.display = 'none';
        monsterGiveUp.style.display = 'none';


        


    }
    
}


function chest(){
    log.style.display = 'block';
    show.style.display = 'none';

    if(earnedkey == 0){
        chestTitle.style.display = 'block';
        chestFailureP.style.display = 'block';
        chestFailureBtn.style.display = 'block';
        lockedChest.style.display = 'block';
    }
    else if (earnedkey > 0){
        chestTitle.style.display = 'block';
        chestSuccessP.style.display = 'block';
        chestSuccessP.innerHTML = 'Congrats! You found a chest! Do you want to open it?';
        chestSuccessBtn.style.display = 'block';
        chestSuccessBtnOpen.style.display = 'inline';
        chestSuccessBtnNo.style.display = 'inline';
        lockedChest.style.display = 'block';
        unlockedChest.style.display = 'none';
    }

}

function openChest(){
    earnedkey -= 1;
    localStorage.setItem('earnedkey', earnedkey);

    document.querySelector('.pKey').innerHTML = `<i class="fas fa-key key playerBarIcon"></i>   ${earnedkey}`;

    let awardAmount = 10 * randomAmount;
    money += awardAmount;
    localStorage.setItem('money', money);
    document.querySelector('.pCoins').innerHTML = `<i class="fas fa-coins coins playerBarIcon"></i>   ${money}`;

    chestSuccessP.innerHTML = `Congrats! You found ${awardAmount} <i style="padding: 0;" class="fas fa-coins coins playerBarIcon"></i> in this chest!`;
    lockedChest.style.display = 'none';
    unlockedChest.style.display = 'block';
    chestSuccessBtn.style.display = 'none';
    chestFailureBtn.style.display = 'block';
    coin.style.display = 'block';

}

// else if(place == barnContent.building){

//     mandy.style.display = 'block';
//     player.style.display = 'block';
//     pWorker.innerHTML = barnContent.workerName;
//     pPlayer.innerHTML = playerContent.playerName;
//     placeH1.innerHTML = barnContent.building.toUpperCase();

//     playerBar.style.backgroundColor = 'transparent';

// }

function monsterI(){

    log.style.display = 'block';
    show.style.display = 'none';

    player.style.display = 'block';
    monster.style.display = 'block';

    monsterDiv.style.display = 'block';
    monsterTitle.style.display = 'block';
    monsterP.style.display = 'block';
    monsterP.innerHTML = 'Oh no! You met a monster! Do you want to fight or run away?'
    monsterBtn.style.display = 'block';
    monsterFightBtn.style.display = 'inline';
    monsterGiveUp.style.display = 'inline';

}

function fight(){

    let randomFightPlayer = Math.floor(Math.random()*3);
    let randomFightMonster = Math.floor(Math.random()*3);

    monsterGiveUp.style.display = 'none';
    monsterFightBtn.style.display = 'none';
    swordImg.style.display = 'block';


    if(randomFightPlayer > randomFightMonster ){
        fightPlayerWin();
    }
    else if(randomFightPlayer == randomFightMonster){
        fightPlayerE();
    }
    else if(randomFightPlayer < randomFightMonster){
        fightPlayerL();
    }

}

function fightPlayerWin(){
    let wHealth = Math.floor(Math.random()*31);
    health += wHealth;
    localStorage.setItem('health', health);
    document.querySelector('.pBolt').innerHTML = `<i class="fas fa-bolt bolt playerBarIcon"></i>   ${health}`;

    let wMoney = Math.floor(Math.random()*10);
    money += wMoney;
    localStorage.setItem('money', money);
    document.querySelector('.pCoins').innerHTML = `<i class="fas fa-coins coins playerBarIcon"></i>   ${money}`;

    let wKey = Math.floor(Math.random()*2);
    earnedkey += wKey;
    localStorage.setItem('earnedkey', earnedkey);
    document.querySelector('.pKey').innerHTML = `<i class="fas fa-key key playerBarIcon"></i>   ${earnedkey}`;

    monsterP.innerHTML = `Congrats! You earned ${wHealth} energy, ${wMoney} coins and ${wKey} key`;

    setTimeout(function () {
        monsterTitle.style.display = 'none';
        monsterP.style.display = 'none';
        swordImg.style.display = 'none';
        acceptQuest(0);
    }, 3000);

}

function fightPlayerE() {
    let wHealth = Math.floor(Math.random()*15);
    health -= wHealth;
    localStorage.setItem('health', health);
    document.querySelector('.pBolt').innerHTML = `<i class="fas fa-bolt bolt playerBarIcon"></i>   ${health}`;

    let wMoney = Math.floor(Math.random()*5);
    money += wMoney;
    localStorage.setItem('money', money);
    document.querySelector('.pCoins').innerHTML = `<i class="fas fa-coins coins playerBarIcon"></i>   ${money}`;

    let wKey = Math.floor(Math.random()*2);
    earnedkey += wKey;
    localStorage.setItem('earnedkey', earnedkey);
    document.querySelector('.pKey').innerHTML = `<i class="fas fa-key key playerBarIcon"></i>   ${earnedkey}`;

    monsterP.innerHTML = `You lost ${wHealth} energy and earned ${wMoney} coins and ${wKey} key`;

    setTimeout(function () {
        monsterTitle.style.display = 'none';
        monsterP.style.display = 'none';
        swordImg.style.display = 'none';
        acceptQuest(0);
    }, 3000);
}

function fightPlayerL(){
    let wHealth = Math.floor(Math.random()*31);
    health -= wHealth;
    localStorage.setItem('health', health);
    document.querySelector('.pBolt').innerHTML = `<i class="fas fa-bolt bolt playerBarIcon"></i>   ${health}`;

    monsterP.innerHTML = `You lost against the Monster. You lost ${wHealth} energy.`;

    setTimeout(function () {
        monsterTitle.style.display = 'none';
        monsterP.style.display = 'none';
        swordImg.style.display = 'none';
        acceptQuest(0);
    }, 3000);
}

function run(){
    let rLost = Math.floor(Math.random()*31);
    health -= rLost;
    localStorage.setItem('health', health);
    document.querySelector('.pBolt').innerHTML = `<i class="fas fa-bolt bolt playerBarIcon"></i>   ${health}`;

    // Monster none
        monster.style.display = 'none';
        monsterDiv.style.display = 'none';
        monsterTitle.style.display = 'none';
        monsterP.style.display = 'none';
        monsterBtn.style.display = 'none';
        monsterFightBtn.style.display = 'none';
        monsterGiveUp.style.display = 'none';

        player.style.display = 'none';

    acceptQuest(0);

}






function restartGame(){
    location.reload();
    localStorage.clear();
}

function exhausted(){
    // alert("YOU ARE EXHAUSTED!");

        // Monster none
        monster.style.display = 'none';
        monsterDiv.style.display = 'none';
        monsterTitle.style.display = 'none';
        monsterP.style.display = 'none';
        monsterBtn.style.display = 'none';
        monsterFightBtn.style.display = 'none';
        monsterGiveUp.style.display = 'none';

    log.style.display = 'block';
    hide.style.display = 'none';
    playerBar.style.display = 'none';
    gameOver.style.display = 'block';
    restart.style.display = 'block';
    gameEndText.style.display = 'block';
    questInformation.style.display = 'none';
    chestDiv.style.display = 'none';
    player.style.display = 'none';

    gameEndText.innerHTML = `You are exhausted! You need to rest. During your journey you earned 
    ${money} coins and ${earnedkey} keys`;


}

function broke(){
    // alert("YOU ARE BROKE!");

    log.style.display = 'block';
    hide.style.display = 'none';
    playerBar.style.display = 'none';
    gameOver.style.display = 'block';
    restart.style.display = 'block';
    gameEndText.style.display = 'block';
    questInformation.style.display = 'none';
    chestDiv.style.display = 'none';

    gameEndText.innerHTML = `You are broke! During your journey you earned 
    ${earnedkey} keys and your health was ${health} hp`;


}

function rich(){
    // alert("YOU ARE RICH");

    log.style.display = 'block';
    hide.style.display = 'none';
    playerBar.style.display = 'none';
    winner.style.display = 'block';
    restart.style.display = 'block';
    gameEndText.style.display = 'block';
    questInformation.style.display = 'none';
    chestDiv.style.display = 'none';

    gameEndText.innerHTML = `Yay! You earned so much money that you now considers to be rich! During your 
    journey, you earned ${earnedkey} keys and your health was ${health} hp`;
}








// QuestRandom

function questRandomButton(buttonId){

    let randomNumber = Math.floor(Math.random()*10+1);
    // let a = 2;
    
    
    
    if(attempts.innerHTML > 0){
        if(buttonId == randomNumber){
            if(randomAward == 0){
                earnedkey += 1;
                localStorage.setItem('earnedkey', earnedkey);

                document.querySelector('.pKey').innerHTML = `<i class="fas fa-key key playerBarIcon"></i>   ${earnedkey}`;
                alert('Congrats! Your award is a ' + award[randomAward]);
                
                questRandomContentRestart();
                 
            }
            else if(randomAward == 1){
                let awardAmount = 10 * randomAmount;
                money += awardAmount;
                localStorage.setItem('money', money);

                document.querySelector('.pCoins').innerHTML = `<i class="fas fa-coins coins playerBarIcon"></i>   ${money}`;
                alert('Congrats! Your award is ' + awardAmount + ' ' + award[randomAward]);

                questRandomContentRestart();
                
            }
            else if(randomAward == 2){
                let awardAmount = 10 * randomAmount;
                health += awardAmount;
                localStorage.setItem('health', health);

                document.querySelector('.pBolt').innerHTML = `<i class="fas fa-bolt bolt playerBarIcon"></i>   ${health}`;
                alert('Congrats! Your award is ' + awardAmount + ' ' + award[randomAward]);

                questRandomContentRestart();
  
            }
        }
        else{
            document.querySelector('#slumpen'+ buttonId).style.display = 'none';
            attempts.innerHTML = attempts.innerHTML-1;
        }
    }
    else if(attempts.innerHTML < 1 && buttonId != randomNumber){
        alert('Quest is over! You did not win this time. Better luck next time!');
        questRandomContentRestart();
    }

}

function playQuestRandom(){

    attempts.innerHTML = 5;

    document.querySelector('.questInformation').style.display = 'none';

    playerBar.style.backgroundColor = 'transparent';

    questRandom.style.display = 'block';

    questRandomContentShow();

}


function questRandomContentRestart(){
    questTitle.style.display = 'none';
    questNameTitle.style.display = 'none';
    attemptsLeft.style.display = 'none';
    attempts.style.display = 'none';
    document.querySelector('#slumpen1').style.display = 'none';
    document.querySelector('#slumpen2').style.display = 'none';
    document.querySelector('#slumpen3').style.display = 'none';
    document.querySelector('#slumpen4').style.display = 'none';
    document.querySelector('#slumpen5').style.display = 'none';
    document.querySelector('#slumpen6').style.display = 'none';
    document.querySelector('#slumpen7').style.display = 'none';
    document.querySelector('#slumpen8').style.display = 'none';
    document.querySelector('#slumpen9').style.display = 'none';
    document.querySelector('#slumpen10').style.display = 'none';

    playerBar.style.backgroundColor = '#384d00';

    log.style.display = 'none';
    questRandom.style.display = 'none';
    hide.style.display = 'block';
}

function questRandomContentShow(){
    questTitle.style.display = 'block';
    questNameTitle.style.display = 'block';
    attemptsLeft.style.display = 'block';
    attempts.style.display = 'block';
    document.querySelector('#slumpen1').style.display = 'inline';
    document.querySelector('#slumpen2').style.display = 'inline';
    document.querySelector('#slumpen3').style.display = 'inline';
    document.querySelector('#slumpen4').style.display = 'inline';
    document.querySelector('#slumpen5').style.display = 'inline';
    document.querySelector('#slumpen6').style.display = 'inline';
    document.querySelector('#slumpen7').style.display = 'inline';
    document.querySelector('#slumpen8').style.display = 'inline';
    document.querySelector('#slumpen9').style.display = 'inline';
    document.querySelector('#slumpen10').style.display = 'inline';
}
