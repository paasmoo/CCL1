import { global } from "./global.js";

function move(event) {

    //Example Movement for the PacMan Game
    switch(event.key) {
        case "d":
            if (global.playerObject.xVelocity == 0)
                global.playerObject.switchCurrentSprites(27, 35);
            global.playerObject.xVelocity = 200;
            global.playerObject.yVelocity = 0;
            console.log("velocity set");
            break;
        case "a":
            if (global.playerObject.xVelocity == 0)
                global.playerObject.switchCurrentSprites(9, 17);
            global.playerObject.xVelocity = -200;
            global.playerObject.yVelocity = 0;
            break;
       /* case "w":
            global.playerObject.xVelocity = 0;
            global.playerObject.yVelocity = -100;
            global.playerObject.switchCurrentSprites(9, 11);
            break;
        case "s":
            global.playerObject.xVelocity = 0;
            global.playerObject.yVelocity = 100;
            global.playerObject.switchCurrentSprites(3, 5);
            break; */
    }
}

function stop() {

    //if you just want to move as long as the player presses a key
    global.playerObject.xVelocity = 0;
    global.playerObject.yVelocity = 0;
}

document.addEventListener("keypress", move);

//if you just want to move as long as the player presses a key:
document.addEventListener("keyup", stop);