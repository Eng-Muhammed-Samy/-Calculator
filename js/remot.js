var value ,
    operator;
function setNum(a){
    document.getElementById('screen').value += a ;
}

document.getElementById('add').onclick = function (){
    value = document.getElementById('screen').value ;
    operator = '+';
    document.getElementById('txt').value = value +" "+ operator +" ";
    document.getElementById('screen').value = " ";
}

document.getElementById('subtract').onclick = function (){
    value = document.getElementById('screen').value ;
    operator = '-';
    document.getElementById('txt').value = value +" "+ operator +" ";
    document.getElementById('screen').value = " ";
}

document.getElementById('division').onclick = function (){
    value = document.getElementById('screen').value ;
    operator = '/';
    document.getElementById('txt').value = value +" "+ operator +" ";
    document.getElementById('screen').value = " ";
}

document.getElementById('multiplication').onclick = function (){
    value = document.getElementById('screen').value ;
    operator = '*';
    document.getElementById('txt').value = value +" "+ operator +" ";
    document.getElementById('screen').value = " ";
}

document.getElementById('square').onclick = function (){
    value = document.getElementById('screen').value;
    document.getElementById('screen').value = Math.pow(value, 2);
}

document.getElementById('sqrt').onclick = function (){
    value = document.getElementById('screen').value;
    document.getElementById('screen').value = Math.sqrt(value);
}

document.getElementById('sum').onclick = function (){
    var num1 = parseInt(value);
    var num2 = parseInt(document.getElementById('screen').value); 
    
    switch(operator){
        case '+':
            document.getElementById('screen').value = num1 + num2 ;
            break;
        case '-':
            document.getElementById('screen').value = num1 - num2 ;
            break;
        case '*':
            document.getElementById('screen').value = num1 * num2 ;
            break;
        case '/':
            if(num2 == 0)
                document.getElementById('screen').value = '∞' ;
            else
                document.getElementById('screen').value = num1 / num2 ;
            break;
    }
}

document.getElementById('clear').onclick = function (){
    document.getElementById('screen').value = '';
    document.getElementById('txt').value = '';
}

document.getElementById('sin').onclick = function (){
    value = parseInt(document.getElementById('screen').value);
    var x = Math.sin(value *(Math.PI/180));
    document.getElementById('screen').value = x;
}

document.getElementById('cos').onclick = function (){
    var x = parseInt(document.getElementById('screen').value) ;
    if(x == 90){
        document.getElementById('screen').value = '0' ;
    }else{ 
        value = Math.cos(x*(Math.PI/180));
        document.getElementById('screen').value = value ;
    }
}

document.getElementById('tan').onclick = function (){
    var x = parseInt(document.getElementById('screen').value) ;
    if(x == 90){
        document.getElementById('screen').value = '∞' ;
    }else{ 
        value = Math.tan(x*(Math.PI/180));
        document.getElementById('screen').value = value ;
    }
}

document.getElementById('cot').onclick = function (){
    var x = parseInt(document.getElementById('screen').value) ;
    if(x == 90){
        document.getElementById('screen').value = '0' ;
    }else{ 
        value = Math.tan(x*(Math.PI/180));
        document.getElementById('screen').value = 1/value ;
    }
}

document.getElementById('Asin').onclick = function () {
    value = parseInt(document.getElementById('screen').value);
    var x = Math.asin(value);
    document.getElementById('screen').value  = x ;
}

document.getElementById('Acos').onclick = function () {
    value = parseInt(document.getElementById('screen').value);
    var x = Math.acos(value);
    document.getElementById('screen').value  = x ;
}

document.getElementById('Atan').onclick = function () {
    value = parseInt(document.getElementById('screen').value);
    var x = Math.atan(value);
    document.getElementById('screen').value  = x ;
}