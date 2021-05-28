let cross = "<img src=\"https://img-premium.flaticon.com/png/512/1828/1828774.png?token=exp=1622192902~hmac=1124793199dd6bec0c04a4f94965812a\">";
let circle = "<img src=\"https://image.flaticon.com/icons/png/512/33/33759.png\">";

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
            document.getElementsByClassName("grid-item")[i].innerHTML = "<img src=\"cross.svg\">";
           //https://img-premium.flaticon.com/png/512/1828/1828774.png?token=exp=1622192902~hmac=1124793199dd6bec0c04a4f94965812a
        }
        else{
            document.getElementsByClassName("grid-item")[i].innerHTML = "<img src=\"https://image.flaticon.com/icons/png/512/33/33759.png\">";
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



