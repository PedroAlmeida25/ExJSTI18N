function somar(){
    var num1;//Declarando uma variável 
    var num2;
    var res;
    //Coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o cálculo
    res = num1 + num2;
    document.getElementById("resultado").innerHTML = "A soma dos números é: " + res;
}//fim do método

function subtrair(){
    var num1;//Declarando uma variável 
    var num2;
    var res;
    //Coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o cálculo
    res = num1 - num2;
    document.getElementById("resultado").innerHTML = "A subtração dos números é: " + res;
}//fim do método

function multiplicar(){
    var num1;//Declarando uma variável 
    var num2;
    var res;
    //Coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o cálculo
    res = num1 * num2;
    document.getElementById("resultado").innerHTML = "A multiplicação dos números é: " + res;
}//fim do método

function dividir(){
    var num1;//Declarando uma variável 
    var num2;
    var res;
    //Coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o cálculo
    if(num2 <= 0){
        res = "Impossível dividir por número menores ou iguais a zero!";
    }else{
        res = num1 / num2;
    }
    //Faço a resposta
    document.getElementById("resultado").innerHTML = "A divisão dos números é: " + res;
}//fim do método

function tabuada(){
    var num1;
    var num2;

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);

    var resNum1 = "Tabuada do " + num1;
    var resNum2 = "Tabuada do " + num2;

    for(i = 0; i <= 10; i++){
        resNum1 += "\n" + num1 + " * " + i + " = " + (num1 * i);
        resNum2 += "\n" + num2 + " * " + i + " = " + (num2 * i);
    }

    document.getElementById("resultado").innerHTML = "\n" + resNum1 + "\n\n" + resNum2;
}//fim do método

function potencia(){
    var num1; 
    var pot;
    var resultado;

    num1 = parseInt(document.getElementById("tpNum").value);
    pot = parseInt(document.getElementById("tsNum").value);
    

    //Realizando a potência dos números
    
        resultado = Math.pow(num1,pot);
     
        
   document.getElementById("resultado").value="O resultado da potência é:" + resultado;
}//fim do método

function raizQuadrada(){
    var num1;
    var num2;
    
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);

    //Realizando a raiz dos números

    document.getElementById("resultado").value= "\n\nA raíz de: " + num1 + "é:" + Math.sqrt(num1)
    + "\n\nA raíz de" + num2 + "é:" + Math.sqrt(num2);
}

function numeros(){
    var num1;
    var seguinte = 0;

    if(num1=true){
        for(var i=0; i<10; i++){
        num1 = parseInt(document.getElementById("tpNum").value);
        seguinte += (num1 + i) + `, ` 
        }
    seguinte += (num1 + i);
    }

    document.getElementById("resultado").innerHTML = seguinte;
}