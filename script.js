// let input = document.getElementById('inputBox');
// let buttons = document.querySelectorAll('button');

// let string = "";
// let arr = Array.from(buttons);
// arr.forEach(button=> {
//     button.addEventListener('click', (e) =>{
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'AC'){
//             string = "";
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'DEL'){
//             string = string.substring(0, string.length-1);
//             input.value = string;
//         }
//         else if(e.target.innerHTML == '%'){
//             string = eval(string.replace("%","/100"));
//             input.value = string;
//         }
//         else{
//             string += e.target.innerHTML;
//             input.value = string;
//         }
//     })
// })

// ----------------------------------------------------------------

const display = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");
const specialChars = ["%", "*", "/", "-", "+", "=",];
let output = "";

const calculate = (btnValue) =>{
    if(btnValue === "=" && output !== ""){
        // If output has '%', replace with '/100' before evaluating.
        output = eval(output.replace("%", "/100"));
    }else if(btnValue === "AC"){
        output = "";
    }else if(btnValue === "DEL"){
        // If DEL button is clicked, remove the last character from the output.
        output = output.toString().slice(0,-1);
    }else{
        // If output is empty and button is specialChars then return
        if(output === "" && specialChars.includes(btnValue)){
            return;
        }
        output += btnValue;
    }
    display.value = output;
};
// Add event listener to buttons, call calculate() on click.
buttons.forEach((button) =>{
    // Button click llistener calls calculate() with dataset value as argument.
    button.addEventListener("click",(e) =>{
        calculate(e.target.dataset.value);
    } );
});