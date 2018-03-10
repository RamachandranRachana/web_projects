//get reastar button
var restart=document.querySelector('#b');
//get all squares
var squares=document.querySelectorAll('td');
//clear all squares
function clearBoard(){
  for (var i = 0; i <squares.length; i++) {
  squares[i].textContent='';
  }
}
//check square markers
function checkMarker(){
  if(this.textContent===''){
    this.textContent='X';
  }
  else if(this.textContent==='X')
  {
    this.textContent='O';
  }
  else {
    this.textContent='';
  }
}
//event listeners to all squares
restart.addEventListener('click',clearBoard);
for (var i = 0; i <squares.length; i++) {
squares[i].addEventListener('click',checkMarker)
}
