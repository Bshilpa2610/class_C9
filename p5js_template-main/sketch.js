var but1,but2;
var input1,input2;
var n1,n2;

function setup() {
  createCanvas(400, 400);
  console.log("Hi there")

  input1=createInput();
  input1.position(5,50);

  input2=createInput();
  input2.position(200,50);

  but1=createButton("square");
  but1.position(5,100);

  but2=createButton("Add");
  but2.position(200,100);


}

function squ()
{
  console.log(n1*n1);
 
}


function add()
{
  console.log(n1+n2);
 
}

function draw() {
  background(220);
  n1=parseInt(input1.value());
  n2=parseInt(input2.value());

   but1.mousePressed(squ);
   but2.mousePressed(add);

  
}