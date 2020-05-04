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