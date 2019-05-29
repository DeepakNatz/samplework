var ctx = myCanvas.getContext("2d");


 var bug_x = 0;
 var bug_y = 0;
 var BugImg = new Image();
 BugImg.src = "assets/images/instruction _icon.png";         

 var melon_x = 0;
 var melon_y = 0;
 var MelonImg = new Image();
 MelonImg.src = "assets/images/bullet.png";  

 var score = 0;
 var melon_speed = 3;
 var FPS = 40;                       
 var time_remaining = 20;


 function restart_game() {
    
     time_remaining = 20;
     score = 0;
     melon_speed = 3;
     }

 function ImagesTouching(x1, y1, img1, x2, y2, img2) {
          
          if (x1 >= x2+img2.width || x1+img1.width <= x2) return false;   
          if (y1 >= y2+img2.height || y1+img1.height <= y2) return false; 
          return true;                                                   
          }


 function Do_a_Frame () {
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);                

    ctx.fillStyle= "purple";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 0, 20);                              


    bug_y = myCanvas.height - BugImg.height;                             
    ctx.drawImage(BugImg, bug_x, bug_y);                                

    ctx.fillText("Time Remaining: " + Math.round(time_remaining), 0, 45); 

    if (time_remaining <= 0) {                                           
          ctx.fillStyle= "red";
          ctx.font = "bold 50px Arial";                                  
          ctx.textAlign="center";
          ctx.fillText("Game Over", myCanvas.width / 2, myCanvas.height / 2);  
          ctx.font = "bold 20px Arial";
          ctx.fillText("Press S to play again", myCanvas.width / 2, (myCanvas.height / 2)+50);
          ctx.textAlign="left";
          }
    else {
          time_remaining = time_remaining - 1/FPS;                       

          melon_y = melon_y + melon_speed;                                

          if (melon_y > myCanvas.height) {                              
              melon_y= 0;                                               
              melon_x= Math.random() * (myCanvas.width - MelonImg.width); 
              }   
          }

    ctx.drawImage(MelonImg, melon_x, melon_y);                          

    if (ImagesTouching(bug_x, bug_y, BugImg, melon_x, melon_y, MelonImg)) {  
        score= score + 1;                                                    
        melon_speed = melon_speed + 0.5;                                    
        melon_x= -MelonImg.width;                                           
        }
    } 

 setInterval(Do_a_Frame, 1000/FPS);                                         


 function MyKeyDownHandler (MyEvent) { 
   if (MyEvent.keyCode == 37 && bug_x > 0) {bug_x = bug_x - 10;}                          
   if (MyEvent.keyCode == 39 && bug_x+BugImg.width < myCanvas.width) {bug_x = bug_x+10;} 
   if (MyEvent.keyCode == 83) restart_game();                                            
   MyEvent.preventDefault();
   }

 addEventListener("keydown", MyKeyDownHandler);                     

 //myCanvas.width = window.innerWidth - 20;                           
 //myCanvas.height = window.innerHeight - 20;        