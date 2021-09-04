const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hourTime;

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(30);
    
    if(hourTime>=12){
        text("Time : "+ hourTime%12 + " PM", 50,100);
    }else if(hourTime==0){
        text("Time : 12 AM",100,100);
    }else{
        text("Time : "+ hourTime%12 + " AM", 50,100);
    }

}

async function getBackgroundImg()
{

    // write code to fetch time from API
    var APIData = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata')
 
    //change the data in JSON format and store it in variable responseJSON
    var responseJSON = await APIData.json()
    

    
    //fetch datetime from responseJSON
    var TimeData = responseJSON.datetime

    
    

    // slice the datetime to extract hour
    hourTime = TimeData.slice(11,13)
    

    
    if(hourTime>=0 && hourTime<18 )
    {
        bg = "sunrise.png";
    }
    else{
        bg="sunset.png"
    }
    
    backgroundImg = loadImage(bg)
}
