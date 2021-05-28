let cross = "<img src=\"cross.svg\">";
let circle = "<img src=\"circle.svg\">";

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
        }
    if(counter === 10 && document.getElementById("paragraph").innerHTML == ""){
        document.getElementById("paragraph").innerHTML = "Draw";
    }
}

function finalFunc(i){
    return function(){
       if(document.getElementById("paragraph").innerHTML != "X has won." && document.getElementById("paragraph").innerHTML != "O has won."){
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



