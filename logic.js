const circle = "<img src=\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9Ijc1IiBjeT0iNzUiIHI9IjcwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEwIi8+Cjwvc3ZnPgo=\">"
const cross = "<img src=\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTcwIiBoZWlnaHQ9IjE2NiIgdmlld0JveD0iMCAwIDE3MCAxNjYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNzAiIGhlaWdodD0iMTY2IiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjAxIi8+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2QpIj4KPGxpbmUgeDE9IjguNDY0NDciIHkxPSIxNTQuNDY0IiB4Mj0iMTU4LjQ2NCIgeTI9IjQuNDY0NDciIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMTAiLz4KPC9nPgo8bGluZSB4MT0iMTUuNTM1NSIgeTE9IjQuNDY0NDciIHgyPSIxNjUuNTM2IiB5Mj0iMTU0LjQ2NCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxMCIvPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kIiB4PSIwLjkyODk0IiB5PSIwLjkyODkzMiIgd2lkdGg9IjE2NS4wNzEiIGhlaWdodD0iMTY1LjA3MSIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPgo8ZmVPZmZzZXQgZHk9IjQiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4yNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8L2RlZnM+Cjwvc3ZnPgo=\">";

// gets value of all the divs into an array, something like this [x,o,x,o,x,o,x,o,x]
function valuesOfDivs(){
   let arr = [];
   for(let i = 0; i < 9; i++){
   arr.push(document.getElementsByClassName("grid-item")[i].innerHTML);
   }
   return arr;
}


let arrOfElements = document.getElementsByClassName("grid-item");
let counter = 1;

// checks if someone has won
function isGameOver(arrOfDivs){
        if(arrOfDivs[0] === arrOfDivs[1] && arrOfDivs[1] === arrOfDivs[2] && arrOfDivs[0] == cross
        || arrOfDivs[3] === arrOfDivs[4] && arrOfDivs[4] === arrOfDivs[5] && arrOfDivs[3] == cross
        || arrOfDivs[6] === arrOfDivs[7] && arrOfDivs[7] === arrOfDivs[8] && arrOfDivs[6] == cross
        || arrOfDivs[0] === arrOfDivs[3] && arrOfDivs[3] === arrOfDivs[6] && arrOfDivs[0] == cross
        || arrOfDivs[0] === arrOfDivs[1] && arrOfDivs[1] === arrOfDivs[2] && arrOfDivs[0] == cross
        || arrOfDivs[1] === arrOfDivs[4] && arrOfDivs[4] === arrOfDivs[7] && arrOfDivs[1] == cross
        || arrOfDivs[2] === arrOfDivs[5] && arrOfDivs[5] === arrOfDivs[8] && arrOfDivs[2] == cross
        || arrOfDivs[0] === arrOfDivs[4] && arrOfDivs[4] === arrOfDivs[8] && arrOfDivs[0] == cross
        || arrOfDivs[2] === arrOfDivs[4] && arrOfDivs[4] === arrOfDivs[6] && arrOfDivs[2] == cross
        ){
        document.getElementById("paragraph").innerHTML = "X has won.";
        document.getElementById("paragraph").dataset.gameOver = "true";
    }
        if(arrOfDivs[0] === arrOfDivs[1] && arrOfDivs[1] === arrOfDivs[2] && arrOfDivs[0] == circle
        || arrOfDivs[3] === arrOfDivs[4] && arrOfDivs[4] === arrOfDivs[5] && arrOfDivs[3] == circle
        || arrOfDivs[6] === arrOfDivs[7] && arrOfDivs[7] === arrOfDivs[8] && arrOfDivs[6] == circle
        || arrOfDivs[0] === arrOfDivs[3] && arrOfDivs[3] === arrOfDivs[6] && arrOfDivs[0] == circle
        || arrOfDivs[0] === arrOfDivs[1] && arrOfDivs[1] === arrOfDivs[2] && arrOfDivs[0] == circle
        || arrOfDivs[1] === arrOfDivs[4] && arrOfDivs[4] === arrOfDivs[7] && arrOfDivs[1] == circle
        || arrOfDivs[2] === arrOfDivs[5] && arrOfDivs[5] === arrOfDivs[8] && arrOfDivs[2] == circle
        || arrOfDivs[0] === arrOfDivs[4] && arrOfDivs[4] === arrOfDivs[8] && arrOfDivs[0] == circle
        || arrOfDivs[2] === arrOfDivs[4] && arrOfDivs[4] === arrOfDivs[6] && arrOfDivs[2] == circle
        ){
        document.getElementById("paragraph").innerHTML = "O has won.";
        document.getElementById("paragraph").dataset.gameOver = "true";
        }
    if(counter === 10 && document.getElementById("paragraph").innerHTML == ""){
        document.getElementById("paragraph").innerHTML = "Draw";
        document.getElementById("paragraph").dataset.gameOver = "true";
    }
}

function finalFunc(i){
    return function(){
       if(document.getElementById("paragraph").dataset.gameOver != "true"){
        if(counter%2===0){
            document.getElementsByClassName("grid-item")[i].innerHTML = cross;
        }
        else{
            document.getElementsByClassName("grid-item")[i].innerHTML = circle;
        }
        counter++; 
        isGameOver(valuesOfDivs());
    }
    }
}


// adds event listener for the whole htmlCollection
for(let i = 0; i < arrOfElements.length; i++){
    arrOfElements[i].addEventListener("click", finalFunc(i), {once: true});
};



