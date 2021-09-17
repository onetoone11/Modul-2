// Assets

let sprite = document.querySelector('#sprite');
let backgroundMap = document.querySelector('#backgroundMap');

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

// Position

let spriteBottomInnerPositionOfMap = parseInt(backgroundMap.style.paddingTop);
let spriteTopInnerPositionOfMap = spriteBottomInnerPositionOfMap + backgroundMapWidth -10;

let spriteLeftInnerPositionOfMap = (screenWidth - backgroundMapWidth)/2;
let spriteRightInnerPositionOfMap = spriteLeftInnerPositionOfMap + backgroundMapWidth -10;


// Sprite, Position

window.addEventListener('load', () => {
    sprite.style.position = 'absolute';
    sprite.style.top = screenHeight*0.62 + 'px';
    sprite.style.left = screenWidth*0.485 + 'px';
});

// Sprite, Move

let spriteSpeed = 5;

window.addEventListener('keydown', (event) => {

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






