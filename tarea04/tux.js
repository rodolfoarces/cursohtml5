var cvs, ctx, posx = 0 , img;

funtion animacion(){
    ctx.clearRect(0,0,500,200);
    ctx.drawImage(img, posx, 0);
    posx += 1;
    setTimeout(animacion, 50);
}

window.onload = function() {
    img = new Image();
    img.src = './img/tux-0.png';
    cnv = document.getElementById("canvas");
    ctx = cnv.getContext("2d");
    animacion();
}
