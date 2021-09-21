// Assets

// let audio = new Audio("img/wii.mp3");
// audio.play();

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


sprite.style.backgroundColor = "green";

// Size

const w = window.innerWidth;
const h = window.innerHeight;

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


    // Grinder Position

let grinder = [screenHeight*0.44, screenHeight*0.565, screenWidth*0.46, screenWidth*0.52, "Grinder"];

let house = [screenHeight*0.31, screenHeight*0.43, screenWidth*0.365, screenWidth*0.425, "House"];

let fish = [screenHeight*0.56, screenHeight*0.69, screenWidth*0.63, screenWidth*0.69, "FishHouse"];

let barn = [screenHeight*0.56, screenHeight*0.69, screenWidth*0.32, screenWidth*0.38, "Barn"]; 



// Sprite, Position

window.addEventListener('load', () => {
    sprite.style.position = 'absolute';
    sprite.style.top = screenHeight*0.62 + 'px';
    sprite.style.left = screenWidth*0.485 + 'px';
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
    hide.style.display = "none";
    show.style.display = "block";


    let a = btnWalkIn.id;

    conversationLog(a);

    btnWalkIn.id = '';
}


function conversationLog(place){

    if(place == grinderContent.building){
        
        patrick.style.display = "block";
    }
    
}


const grinderContent = {

    building: 'Grinder',
    workerName: 'Patrick',
    workerImg: 'img/patrickGrinder.png',
    id: 1

};

const houseContent = {
    
    building: 'House',
    workerName: 'Lisa',
    workerImg: 'img/lisaHouse.png',
    id: 2

}

const fishHouseContent = {

    building: 'FishHouse',
    workerName: 'Bob',
    workerImg: 'img/bobFishHouse.png',
    id: 3

}

const barnContent = {

    building: 'Barn',
    workerName: 'Mandy',
    workerImg: 'img/mandyBarn.png',
    id: 4

}














