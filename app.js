// The Javscript file behind this website.

// Referencing the text
var inputText = document.querySelector("#txt-input") //Referencing the text area

var checkButton = document.querySelector("#btn");

var outputText = document.querySelector("#txt-output");


// var factor = document.querySelector("#factor-num")

// Type conversaion
checkButton.addEventListener("click", checkPrime)

// Making the function
function checkPrime(){
    var num = Number(inputText.value)
    // console.log("The value of num " + num)
    var i = 1;
    var count = 0;
    for(i = 0; i <= num; i++){
        if (num % i == 0){
            count++
        }
    }

    if (count <= 2){
        outputText.innerHTML = "Prime Number"
    }
    else if (count > 2){
        outputText.innerHTML  = "Not a prime number"
    }
    else{
        outputText.innerHTML = "Something went wrong"
    }
}