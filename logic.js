const cross = `<svg width=\"170\" height=\"166\" viewBox=\"0 0 170 166\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"170\" height=\"166\" fill=\"black\" fill-opacity=\"0.01\"></rect>\n<g filter=\"url(#filter0_d)\">\n<line x1=\"8.46447\" y1=\"154.464\" x2=\"158.464\" y2=\"4.46447\" stroke=\"black\" stroke-width=\"10\"></line>\n</g>\n<line x1=\"15.5355\" y1=\"4.46447\" x2=\"165.536\" y2=\"154.464\" stroke=\"black\" stroke-width=\"10\"></line>\n<defs>\n<filter id=\"filter0_d\" x=\"0.92894\" y=\"0.928932\" width=\"165.071\" height=\"165.071\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"></feColorMatrix>\n<feOffset dy=\"4\"></feOffset>\n<feGaussianBlur stdDeviation=\"2\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow\" result=\"shape\"></feBlend>\n</filter>\n</defs>\n</svg>\n`;
const circle = `<svg width=\"150\" height=\"150\" viewBox=\"0 0 150 150\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<circle cx=\"75\" cy=\"75\" r=\"70\" stroke=\"black\" stroke-width=\"10\"></circle>\n</svg>\n`;

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



