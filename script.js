const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const cactus1 = document.getElementById("cactus1");
const menu=document.getElementById("menu");
//audios
const Clickaud=document.getElementById("Clickaud");
const Hoveraud=document.getElementById("Hoveraud");
const Hitaud=document.getElementById("Hitaud");
const Moveaud=document.getElementById("Moveaud");

var score=0;
var highscore=0;
var height=365;
var xpos=650;
var lost=false;
var animdu=2.0;
start();


function start()
{
    dino.style.top=height+"px";
    dino.style.left=xpos+"px";
}


function moveup()
{
    
    if(height>315)
    {
        height-=50;
    }else{
         

    }
   
 dino.style.top=height+"px";}
function  movedown(argument) 
{
    if(height<415)
    {
        height+=50;
    }else{
         

    }
    dino.style.top=height+"px";
    console.log(dino.style.top);}
function moveright(argument) 
{
    if(xpos<1200)
    {
        xpos+=50;
    }
    dino.style.left=xpos+"px";}
function moveleft(argument) 
{
    if(xpos>650)
    {
        xpos-=50;
    }
    dino.style.left=xpos+"px";}
function reset()
{
    score=0;
    height=365;
    xpos=650;
     dino.style.top=height+"px";
    dino.style.left=xpos+"px";
    lost=false;

}

let checkAlive = setInterval(function () {

    
    let dinoTop = parseInt(
        window.getComputedStyle(dino).getPropertyValue("top")
    );
    let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left")
    );
     let cactus1Left = parseInt(
        window.getComputedStyle(cactus1).getPropertyValue("left")
    );
    let dinoleft=parseInt(window.getComputedStyle(dino).getPropertyValue("left"));
    let cactustop=parseInt(window.getComputedStyle(cactus).getPropertyValue("top"));
    let cactus1top=parseInt(window.getComputedStyle(cactus1).getPropertyValue("top"));
    let cactuswidth=parseInt(window.getComputedStyle(cactus).getPropertyValue("width"));
    let cactus1width=parseInt(window.getComputedStyle(cactus1).getPropertyValue("width"));
    //check for collision
   
    if(lost==false)
    {
    if(dinoleft<=cactusLeft+cactuswidth&&dinoleft>=cactusLeft-cactuswidth&&cactustop==dinoTop)
    {
       lost=true;
       console.log("lost");
    }
    

    /////cactus 1 check
     if(dinoleft<=cactus1Left+cactus1width&&dinoleft>=cactus1Left-cactus1width&&cactus1top==dinoTop)
    {
        lost=true;
       console.log("lost");
    }
    if(lost)//function lost if lost 
    {
        lostf();
        if(score>highscore)
    {
        highscore=score;
    }
    }

    
    }
}, 5);

//this can repeat a function over some time set intervals
let scoreupdate=setInterval(function()
{
    if(!lost)
    {
    score+=1;
    }
    document.getElementById("sco").innerHTML = "SCORE-"+score;
    document.getElementById("Menuscore").innerHTML = "Your Score-"+score;
    document.getElementById("Menuhs").innerHTML = "High Score-"+highscore;
    
    document.getElementById("Highsco").innerHTML = "HighScore-"+highscore;

},1000);

const boxes = document.querySelectorAll('.Splash');

boxes.forEach(box => {
  box.style.backgroundColor = 'purple';
  box.style.width = '300px';
  box.style.zindex=0;
});


    
let updateLane=setInterval(function()
{
    var index=0;
    var index1=0;
   var cacy=315;
   var cac1y=315;

    let cacl=parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
     let cac1l=parseInt(window.getComputedStyle(cactus1).getPropertyValue("left"));
    if(cacl<=600)
    { 
        index=Math.floor(Math.random()*3);
        if(index==0)
        {
            cacy=315;
        }else if(index==1)
        {
            cacy=365;
        }else if(index==2)
        {
            cacy=415;
        }
        cactus.style.top=cacy+"px";
        //cactus.style.animationDuration=3-score*0.05+"s";
    }
     if(cac1l<=600)
    { 
        index1=Math.floor(Math.random()*3);
        if(index1==0)
        {
            cac1y=315;
        }else if(index1==1)
        {
            cac1y=365;
        }else if(index1==2)
        {
            cac1y=415;
        }
        cactus1.style.top=cac1y+"px";
        //cactus.style.animationDuration=3-score*0.05+"s";
    }
    
    
    
    
    console.log(cactus.style.animationDuration);
},10)
//checks for input
document.addEventListener("keydown", function (event) {
    var keyp= event.key;
   // score=score+1;
    console.log(keyp);
    Movef();
    if(keyp=="w")
    {
        moveup();
    }
    if(keyp=="s")
    {
        movedown();
    }
    if(keyp=="d")
    {
        moveright();
    }
    if(keyp=="a")
    {
        moveleft();
    }
    

});



function  play(argument)
{
    menu.style.opacity=0;
            reset();

            //pauses the animation

    document.getAnimations().forEach((anim) => 
    {

            anim.cancel();
            anim.play();
        
       
    });
    

}
function lostf(argument) 
{
    Hitf();
    menu.style.opacity=1;

        document.getAnimations().forEach((anim)=>{
            anim.pause();

        });
}

function clickf()
{
    Clickaud.play();
}
function Movef()
{
    Moveaud.play();
}
function Hoverf()
{
    Hoveraud.play();
}
function Hitf()
{
    Hitaud.play();
}
function Clearscore()
{
    highscore=0;
}
//b style="color: #262626; font-family: Poppins; font-size: x-large;"/b>