img=" ";
ob=[];
function preload(){
    img=loadImage('dog_cat.jpg');
    
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    obj= ml5.objectDetector('cocossd',modeLoaded);
    document.getElementById("status").innerHTML = "status: dectando objeto"
}
function modeLoaded(){
    console.log("sim");
    status = true;
    obj.detect(img, gotResult);
}
function draw(){
    image(img, 0,0,640, 420);



    if (status !=""){
         for(var i =0; i < ob .length; i++){
            document.getElementById("status").innerHTML =" SIM ";
            per = floor(ob[i].confidence* 100);
            text(ob[i].label,ob[i].x,ob[i].y);
            noFill();
             rect(ob[i].x,ob[i].y, ob[i].width,ob[i].height);
             stroke("red")
    }
}
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    ob = results;
    }