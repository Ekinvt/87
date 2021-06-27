var canvas = new fabric.Canvas('myCanvas');
player_x = 0;
player_y = 10;
block_image_width = 50;
block_image_height = 100;
var player_object = "";
var block_image_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(50);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80') {
        
    }
    if (e.shiftKey == true && keyPressed == '77') {
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    
    if (keyPressed == '66') {
        new_image('player.png');
        console.log("B");
    }
    if (keyPressed == '89') {
        new_image('yellow_wall.png');
        console.log("y");
    }
    if (keyPressed == '68') {
        new_image('dark_green.png');
        console.log("d");
    }
    if (keyPressed == '85') {
        new_image('unique.png');
        console.log("u");
    }
    if (keyPressed == '67') {
        new_image('cloud.jpg');
        console.log("c");
    }
}