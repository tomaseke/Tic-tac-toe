const circle = "<img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjM0Ljc2cHgiIGhlaWdodD0iMzQuNzZweCIgdmlld0JveD0iMCAwIDM0Ljc2IDM0Ljc2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNC43NiAzNC43NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQoJPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0xNy4zOCwzNC43NmMtOS41ODMsMC0xNy4zNzktNy43OTYtMTcuMzc5LTE3LjM4UzcuNzk3LDAsMTcuMzgsMHMxNy4zNzksNy43OTYsMTcuMzc5LDE3LjM4UzI2Ljk2MywzNC43NiwxNy4zOCwzNC43NnoNCgkJCSBNMTcuMzgsNi40OTVjLTYuMDAyLDAtMTAuODg1LDQuODgyLTEwLjg4NSwxMC44ODVzNC44ODMsMTAuODg1LDEwLjg4NSwxMC44ODVzMTAuODg1LTQuODgyLDEwLjg4NS0xMC44ODUNCgkJCVMyMy4zODIsNi40OTUsMTcuMzgsNi40OTV6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=\">"
const cross = "<img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjEyMy4wNXB4IiBoZWlnaHQ9IjEyMy4wNXB4IiB2aWV3Qm94PSIwIDAgMTIzLjA1IDEyMy4wNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTIzLjA1IDEyMy4wNTsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTEyMS4zMjUsMTAuOTI1bC04LjUtOC4zOTljLTIuMy0yLjMtNi4xLTIuMy04LjUsMGwtNDIuNCw0Mi4zOTlMMTguNzI2LDEuNzI2Yy0yLjMwMS0yLjMwMS02LjEwMS0yLjMwMS04LjUsMGwtOC41LDguNQ0KCQljLTIuMzAxLDIuMy0yLjMwMSw2LjEsMCw4LjVsNDMuMSw0My4xbC00Mi4zLDQyLjVjLTIuMywyLjMtMi4zLDYuMSwwLDguNWw4LjUsOC41YzIuMywyLjMsNi4xLDIuMyw4LjUsMGw0Mi4zOTktNDIuNGw0Mi40LDQyLjQNCgkJYzIuMywyLjMsNi4xLDIuMyw4LjUsMGw4LjUtOC41YzIuMy0yLjMsMi4zLTYuMSwwLTguNWwtNDIuNS00Mi40bDQyLjQtNDIuMzk5QzEyMy42MjUsMTcuMTI1LDEyMy42MjUsMTMuMzI1LDEyMS4zMjUsMTAuOTI1eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=\">";

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



