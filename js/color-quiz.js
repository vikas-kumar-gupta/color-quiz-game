var colors = generateRandomColor(6);
var pickedColor = pickedColors();
var squares = document.querySelectorAll(".square");
var colorName = document.getElementById("colorName");
var upperDiv = document.getElementById("upperDiv");
var reset = document.getElementById("reset");
var message = document.getElementById("message");
var hard = document.getElementById("hard");
var easy = document.getElementById("easy");
var squareNum = 6;

colorName.textContent = pickedColor;

reset.addEventListener("click", function(){
    resetFun();
});

hard.addEventListener("click", function(){
    hardBtn();
});

easy.addEventListener("click", function(){
    easyBtn();
});

for(var i = 0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            message.textContent = "Correct!";
            reset.textContent = "PLAY AGAIN ?";
            message.style.backgroundColor = "red";
            upperDiv.style.backgroundColor = pickedColor;
            changeColor(pickedColor);
        }
        else{
            message.textContent = "Wrong!";
            this.classList.add("diappear");
            this.style.backgroundColor = "#232323   ";
        }
    });
}

function changeColor(color){
    for(var i =0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickedColors(){
    var randomNum = Math.floor(Math.random() * colors.length);
    return colors[randomNum];
}

function generateRandomColor(num){
    var arr = [];
    for(var i = 0; i<num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function resetFun(){
    colors = generateRandomColor(squareNum);
    pickedColor = pickedColors();
    colorName.textContent = pickedColor;
    for(var i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    upperDiv.style.backgroundColor = "steelblue";
    message.textContent = "";
    reset.textContent = "NEW GAME";
}

function hardBtn(){
    easy.classList.remove("selected");
    hard.classList.add("selected");
    message.textContent = "";
    upperDiv.style.backgroundColor = "steelblue";
    reset.textContent = "NEW GAME";
    squareNum= 6;
    colors = generateRandomColor(squareNum);
    pickedColor = pickedColors();
    colorName.textContent = pickedColor;
    for(var i = 0; i<squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
}

function easyBtn(){
    hard.classList.remove("selected");
    easy.classList.add("selected");
    reset.textContent = "NEW GAME";
    upperDiv.style.backgroundColor = "steelblue";
    message.textContent = "";
    squareNum= 3;
    colors = generateRandomColor(squareNum);
    pickedColor = pickedColors();
    colorName.textContent = pickedColor;
    for(var i = 0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
}