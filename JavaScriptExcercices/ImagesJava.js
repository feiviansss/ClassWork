var Game;

function startGame() {
    Game = new component(30, 30, "smiley.gif", 10, 120, "image");
    GameArea.start();
}

var GameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = GameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function(canvasWidth, canvasHeight) {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.type == "image") {
            if (this.x >= canvasWidth - (this.width/2) || this.x <= 0) {
                this.speedX = -this.speedX;
            }
            if (this.y >= canvasHeight - (this.height/2) || this.y <= 0) {
                this.speedY = -this.speedY;
            }
        }
    }
}

function updateGameArea() {
    GameArea.clear();
    Game.newPos(GameArea.canvas.width, GameArea.canvas.height);
    Game.update();
}

function moveup() {
    Game.speedY -= 1;
}

function movedown() {
    Game.speedY += 1;
}

function moveleft() {
    Game.speedX -= 1;
}

function moveright() {
    Game.speedX += 1;
}