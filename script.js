// Adding pixel to the css id character to move the character left
function moveLeft(){
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left -= 100;
    if(left>=0){
        character.style.left = left + "px";
    }
}

// Adding pixel to the css id character to move the character right
function moveRight(){
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left += 100;
    if(left<300){
        character.style.left = left + "px";
    };
}

// Making it controllable my keys
document.addEventListener("keydown", event => {
    if(event.key==="ArrowLeft"){moveLeft();}
    if(event.key==="ArrowRight"){moveRight();}
});

//Change block postion by random number  1-3
var block = document.getElementById("block");
var counter = 0;
block.addEventListener("animationiteration", () => {
    var random = Math.floor(Math.random() * 3);
    left = random * 100;
    console.log(random)
    block.style.left = left + "px";
    counter++;
});


//Hit detection and event when you die
setInterval(function(){
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
    if(characterLeft == blockLeft && blockTop<500 && blockTop>300){
        alert("Game Over. Score: " + counter);
        block.style.animation = "none";
    }
},1);

document.getElementById("left").addEventListener("touchstart",moveLeft);
document.getElementById("right").addEventListener("touchstart",moveRight);
