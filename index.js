drumButtons = document.querySelectorAll(".drum");
for (var i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function() {
        keyPressed(this.innerHTML);
    });
}

document.addEventListener("keydown", function(event) {
    keyPressed(event.key);
});

function keyPressed(key) {
    makeSound(key);
    addAnimation(key);
}

function makeSound(key) {
    switch (key) {
        case "w":
            new Audio("sounds/crash.mp3").play();
            break;
        case "a":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        case "s":
            new Audio("sounds/snare.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "j":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "k":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "l":
            new Audio("sounds/tom-4.mp3").play();
            break;
    }
}

function addAnimation(key) {
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("." + key).classList.remove("pressed");
    }, 75);

}