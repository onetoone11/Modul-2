// Assets

// let audio = new Audio("img/wii.mp3");
// audio.play();



let health;

if(localStorage.health === undefined){
    health = 100;
}
else{
    health = Number(localStorage.health);
}





// let mystorage = window.localStorage

// localStorage.setItem("health", health);

let sprite = document.querySelector('#sprite');
let backgroundMap = document.querySelector('#backgroundMap');


let test = document.querySelector('.test');
let test2 = document.querySelector('.test2');
let test3 = document.querySelector('.test3');
let test4 = document.querySelector('.test4');
let btnWalkIn = document.querySelector('.btn-walkIn');

let hide = document.querySelector('.hide');

let show = document.querySelector('.show');

let log = document.querySelector('.conversation-log');


let lisa = document.querySelector('.lisa');
let patrick = document.querySelector('.patrick');
let bob = document.querySelector('.bob');
let mandy = document.querySelector('.mandy');
let player = document.querySelector('.player');

let pPlayer = document.querySelector('.pPlayer');
let pWorker = document.querySelector('.pWorker');

let placeH1 = document.querySelector('.place');

let placeH2 = document.querySelector('.placeH2');

let placeH5 = document.querySelector('.placeH5');

let yNBtns = document.querySelector('.yNBtns');

let playerBar = document.querySelector('.playerBar');








let money = 5;

let key = 0;






sprite.style.backgroundColor = "green";

const stateMachine = {
    initial: "",
    states: {
        map1: [
            {grinderTrigger: "grinderContent", type: "trigger"},
            {houseTrigger: "houseContent", type: "trigger"},
            {fishHouseTrigger: "fishHouseContent", type: "trigger"},
            {barnTrigger: "barnContent", type: "trigger"}
        ],
        grinderContent: [
            {}
        ]
    }
}

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


// Size

const w = window.innerWidth;
const h = window.innerHeight;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


map1 = new Image();
patrick = new Image();
patrick.src = 'img/patrickGrinder.png'
map1.src = 'img/3.png';

function resizeWindow() {
    // canvas.width = Math.min(window.innerWidth,window.innerHeight);
    // canvas.height = Math.min(window.innerWidth,window.innerHeight);
    // let x = num => num*canvas.width/100;
    // let y = num => num*canvas.height/100;
    // ctx.drawImage(map1, 0, 0, map1.width,   map1.height, 0, 0, canvas.width, canvas.height);
    // ctx.fillRect(x(9), y(2), x(20), y(10));
}
window.onresize = resizeWindow;
resizeWindow();

const movement = {
    "ArrowDown": false,
    "ArrowUp": false,
    "ArrowLeft": false,
    "ArrowRight": false
}

window.addEventListener('keydown', (event) => {
    if(movement[event.key] !== undefined) {
        movement[event.key] = true;
    }
});

window.addEventListener('keyup', (event) => {
    if(movement[event.key] !== undefined) {
        movement[event.key] = false;
    }
});

function canvasCoordinates(x,y) {
    const offset = {x: canvas.getBoundingClientRect().x,y: canvas.getBoundingClientRect().y};

    return [x+offset.x,y+offset.y];
}

let pos_x = 0;
let pos_y = 0;
let oldPos_x = 0;
let oldPos_y = 0;

const modulo = (a,b) => a-b*Math.floor(a/b);

function draw() {  
    ctx.imageSmoothingEnabled = true;
    canvas.width = Math.min(window.innerWidth,window.innerHeight);
    canvas.height = Math.min(window.innerWidth,window.innerHeight);

    let x = num => num*canvas.width/100;
    let y = num => num*canvas.height/100;

    
    
    ctx.drawImage(map1, 0, 0, map1.width,   map1.height, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(patrick, 0, 0, patrick.width,  patrick.height, x(90), 0, x(20), y(20));
    ctx.fillRect(x(9), y(2), x(20), y(10));
    if(movement.ArrowDown) {
        pos_y += 1;
    }
    if(movement.ArrowUp) {
        pos_y -= 1;
    }
    if(movement.ArrowLeft) {
        pos_x -= 1;
    }
    if(movement.ArrowRight) {
        pos_x += 1;
    }
    ctx.fillRect(pos_x-1,pos_y-1,pos_x,pos_y);
    window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);


















const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

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

    // Character Text Position

pPlayer.style.top = parseInt(screenHeight*0.57) + 'px';
pPlayer.style.left = parseInt(screenWidth*0.37) + 'px';

pWorker.style.top = parseInt(screenHeight*0.57) + 'px';
pWorker.style.left = parseInt(screenWidth*0.61) + 'px';

placeH1.style.top = parseInt(screenHeight*0.1) + 'px';

placeH2.style.top = parseInt(screenHeight*0.15) + 'px';

placeH5.style.top = parseInt(screenHeight*0.33) + 'px';

yNBtns.style.top = parseInt(screenHeight*0.5) + 'px';


    // Grinder Position

let grinder = [screenHeight*0.44, screenHeight*0.565, screenWidth*0.46, screenWidth*0.52, "grinder"];

let house = [screenHeight*0.31, screenHeight*0.43, screenWidth*0.365, screenWidth*0.425, "house"];

let fish = [screenHeight*0.56, screenHeight*0.69, screenWidth*0.63, screenWidth*0.69, "fishHouse"];

let barn = [screenHeight*0.56, screenHeight*0.69, screenWidth*0.32, screenWidth*0.38, "barn"]; 


// ...

let grinderQuests = ['', ''];

grinderQuests[0] = ['Keyquest', 'Someone dropped all the keys downstairs, can you please help me find them all?'];
grinderQuests[1] = ['Treequest', 'A tree just fell, can you help me move it?'];


// Sprite, Position

window.addEventListener('load', () => {
    sprite.style.position = 'absolute';
    sprite.style.top = screenHeight*0.62 + 'px';
    sprite.style.left = screenWidth*0.485 + 'px';
});

// Sprite, Move

let spriteSpeed = 5;


// const move = {
//     'ArrowDown': false,
//     'ArrowUp': false,
//     'ArrowRight': false,
//     'ArrowLeft': false
// }



// window.addEventListener('keydown', (event) => {
//     move[event.key] = true;

// });

// window.addEventListener('keyup', (event) => {
//     move[event.key] = false;

// });

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
    if(health < 20){
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
    
    if(health < 20){
        exhausted();
    }
    if(money < 5){
        broke();
    }
    if(money > 100){
        rich();
    }

  

    
});


btnWalkIn.style.top = screenHeight*0.09 + 'px';
btnWalkIn.style.left = screenWidth*0.31 + 'px';



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
        playerBar.style.backgroundColor = "#384d00";

        

    }
    else{
        hide.style.display = "none";
        show.style.display = "block";
        let a = btnWalkIn.id;

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
        
        // alert('Do you want to play a round of ' + grinderQuests[randomQuest][0] + ' ' + grinderQuests[randomQuest][1]);

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

    }
    else if(place == fishHouseContent.building){
        
        bob.style.display = 'block';
        player.style.display = 'block';
        pWorker.innerHTML = fishHouseContent.workerName;
        pPlayer.innerHTML = playerContent.playerName;
        placeH1.innerHTML = fishHouseContent.building.toUpperCase();

        playerBar.style.backgroundColor = 'transparent';

    }
    else if(place == barnContent.building){

        mandy.style.display = 'block';
        player.style.display = 'block';
        pWorker.innerHTML = barnContent.workerName;
        pPlayer.innerHTML = playerContent.playerName;
        placeH1.innerHTML = barnContent.building.toUpperCase();

        playerBar.style.backgroundColor = 'transparent';

    }
    
}



function takeHealth(healthVal){
    if(health <= 0 || health - healthVal < 0){
        alert("Du är för trött!");
    }
    else{
        health -= healthVal;
        alert(health);
        document.querySelector('.pBolt').innerHTML = `<i class="fas fa-bolt bolt playerBarIcon"></i>   ${health}`;
        localStorage.setItem('health', health);
    }
    
}



function takeMoney(price){
    if(money <= 0 || money - price < 0 ){
        alert('Du har inte råd!');
    }
    else{
        money -= price;
        alert(money);
        document.querySelector('.pCoins').innerHTML = `<i class="fas fa-coins coins playerBarIcon"></i>   ${money}`;
    }
}



function useKey(keys){
    if(key <= 0 || key - keys < 0){
        alert('Du har inte tillräckligt med nycklar');
    }
    else{
        key -= keys;
        alert(key);
        document.querySelector('.pKey').innerHTML = `<i class="fas fa-key key playerBarIcon"></i>   ${key}`;
    }
}


function exhausted(){
    alert("YOU ARE EXHAUSTED! Soon you will probably die... ")
}

function broke(){
    alert("YOU ARE BROKE!");
}

function rich(){
    alert("YOU ARE RICH");
}



document.querySelector('.pBolt').innerHTML = '<i class="fas fa-bolt bolt playerBarIcon"></i>   ' + health;
