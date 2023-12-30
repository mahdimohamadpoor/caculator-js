const buttons = document.querySelectorAll('button');
const screenDispaly = document.querySelector('.screen');

let caculation = []
let accummulativeCaculation 

function caculate(button){

const value = button.textContent;

if(value === "C"){
caculation = []
screenDispaly.textContent = '0'
}else if(value === '='){
    console.log(accummulativeCaculation)
    screenDispaly.textContent = eval(accummulativeCaculation)
}else{
    caculation.push(value)
    accummulativeCaculation=caculation.join('')
    screenDispaly.textContent = accummulativeCaculation
}}

buttons.forEach(button => button.addEventListener('click' ,() => caculate(button)))