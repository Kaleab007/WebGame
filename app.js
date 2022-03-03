
//obstacle.size

    maxHeight=20;
    minHeight=100;
    minWidth=10;
    maxWidth=20;
    minGap=200;
    maxGap=500;
var myObstacles=[];
function startGame () {
    gamearea.start();
    
}
function everyinterval(n){
    if(gamearea.frame);
}
//dimension.size
function obstacle()
this.height=Math.floor(minHeight+Math.random()*(maxHeight-minHeight+1));
this.width=Math.floor(maxWidth+Math.random()*(maxWidth-minWidth +1));
this.draw=function(){
    x=1200;
    y=gamearea.canvas.height-this.height;
    gamearea.context.fillRect(x,y,this.width,this.height)
}
//resolution area
var gamearea = {
    canvas:document.createElement ("canvas"),
    start:function () {
        this.canvas.height=1000;
        this.canvas.width=1000;
        //obstacle.intervals 
        document.body.insertBefore(this.canvas,document.body.childNodes[0]);
       this.frame=0;
        this.context=this.canvas.getContext("2d");
        this.interval=setInterval(this.updateGameArea,4);

     },
     updateGameArea: function(){
         gamearea.clear();
         if(everyinterval (150)){
             myObstacles.push(new obstacle());
         }
         for(i=0; i<myObstacles.length;i++){
         myObstacles[i].x=-1;
         myObstacles[i].draw()}
        }, 
clear:function (){
    gamearea.context.clearRect(0,0, this.canvas.width,this.canvas.width);
},
stop:function(){
}
}