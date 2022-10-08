function Clock() {
    clockface(ctx, radius);
    numbers(ctx, radius);
    time(ctx, radius);
}

function clockface(ctx, radius) {
    var grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(0, 0, 15, 0, 2*Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
}

function numbers(ctx, radius) {
    var ang;
    var num =1;
    for ( let num=1; num < 13; num++){
        ctx.font = radius*0.15 + "px arial";
        ctx.textBaseline="middle";
        ctx.fillStyle = '#333';
        ctx.textAlign="center";
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius*0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius*0.85);
        ctx.rotate(-ang);
    }
    
}

function time(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    
    hour=hour%12;
    hand(ctx, (hour*Math.PI/6) + (minute*Math.PI/(6*60)) + (second*Math.PI/(360*60)), radius*0.5, radius*0.07);
    hand(ctx, (minute*Math.PI/30) + (second*Math.PI/(30*60)), radius*0.8, radius*0.07);
    hand(ctx, second*Math.PI/30, radius*0.9, radius*0.02);
}

function hand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}
setInterval(Clock, 1000);