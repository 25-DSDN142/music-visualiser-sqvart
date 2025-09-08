
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  angleMode(RADIANS)
  
   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
   let bassmap = map(bass, 0, 100, 20, 120)
   let vocalmap = map(vocal, 0, 100, 30, 130)
// changes 

   //background 

   fill(50, 50, 240);
   rect(width / 2, height / 2, width, height);

   // vocal bar is red
   fill(200, 0, 0);
   circle(width / 2, height / 2, vocalmap * 3, vocalmap * 3 );
   fill(0);
   text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
   // drum bar is green
   fill(0, 200, 0);
   rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
   fill(0);
   text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
   // bass bar is blue
   fill(256)
   noStroke(256)
   circle(width / 2, height / 2, bassmap * 2, bassmap * 2);
   textAlign(CENTER);
   fill(0)
   text("bass", width / 2, height / 2);

    // bass bar 2
   noFill()
   stroke(256)
   circle(width / 2, height / 2, bassmap * 2.5, bassmap * 2.5);
   textAlign(CENTER);
   fill(0)
   text("bass", width / 2, height / 2);

   // other bar is white
   fill(200, 200, 200);
   rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
   fill(0);
   text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
   fill(255, 255, 0);
 
   // display "words"
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3);
}