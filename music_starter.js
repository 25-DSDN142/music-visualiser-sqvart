
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
   angleMode(DEGREES)
   colorMode(HSB, 100)
  background(255)
  textFont('Arial'); // please use CSS safe fonts
  rectMode(CENTER)
  textAlign(CENTER)
  textSize(24);
  
   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
   let bar_pos_y = height / 2;
   let vocalWidth =map(vocal, 0, 100, 0, width / 2);
   let drumWidth  =map(drum, 0, 100, 0, width / 2);
   let bassWidth  =map(bass, 0, 100, 0, width / 2);
   let otherWidth =map(other, 0, 100, 0, width / 2);
   let otherRed =map(other, 0, 100, 30, 0);

   let lineY = height - 30;
   let angle = 0;
   let r = 150;
   
// changes 

   //center line for reference
   strokeWeight(1);
   stroke(0, 100, 0);
   line(width / 2, 0, width / 2, height);


   //other equaliser
   strokeCap(SQUARE);
   strokeWeight(10);
   stroke(otherRed, 70, 100);
   let otherMap =map(other, 0, 100, 0, 40)
   let lengthOfLine = 300;
   let LineStart = 10;
   let lineEnd = width - 10;

   for(var i =1; i <= otherMap; i++){
      var lineStep = i*10;
      line(LineStart, lineStep, lineEnd, lineStep);

   }

   // vocal bar is red
   noFill();
   stroke(0, 100, 0)
   strokeWeight(1)
   circle(bar_pos_x, height / 2 + 1 * bar_spacing, vocalWidth, bar_height);
   fill(0);
   text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
   // drum bar is green
   noFill();
   circle(bar_pos_x, bar_pos_y, drumWidth, bar_height);
   fill(0);
   text("drums", bar_pos_x, bar_pos_y);
 
   // bass bar is blue
   noFill();
   circle(bar_pos_x, height / 2 + 3 * bar_spacing, bassWidth, bar_height);
   fill(0);
   text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);

   // other bar is white
   noFill();
   circle(bar_pos_x, height / 2 + 4 * bar_spacing, otherWidth, bar_height);
   fill(0);
   text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
   fill(255, 255, 0);
 
   // display "words"
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3);

   
}