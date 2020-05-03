var value ,
    operator;
function setNum(a){
    document.getElementById('screen').value += a ;
}

document.getElementById('add').onclick = function (){
    var value = document.getElementById('screen').value ;
    operator = '+';
    document.getElementById('txt').value = value +" "+ operator +" ";
    document.getElementById('screen').value = " ";
}

document.getElementById('subtract').onclick = function (){
    var value = document.getElementById('screen').value ;
    operator = '-';
    document.getElementById('txt').value = value +" "+ operator +" ";
    document.getElementById('screen').value = " ";
}

document.getElementById('division').onclick = function (){
    var value = document.getElementById('screen').value ;
    operator = '/';
    document.getElementById('txt').value = value +" "+ operator +" ";
    document.getElementById('screen').value = " ";
}

document.getElementById('multiplication').onclick = function (){
    var value = document.getElementById('screen').value ;
    operator = '*';
    document.getElementById('txt').value = value +" "+ operator +" ";
    document.getElementById('screen').value = " ";
}

document.getElementById('square').onclick = function (){}

document.getElementById('sqrt').onclick = function (){}

document.getElementById('clear').onclick = function (){
    document.getElementById('screen').value = '';
    document.getElementById('txt').value = '';
}
