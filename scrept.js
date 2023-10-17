let n1;
let n2;
let operaçao;
alert("calculadora basica");
n1 = prompt("digite um numero");
n2 = prompt ("digite outro numero");
alert("+ = mais  - = menos, / = divisao, * = multiplicaçao");
operaçao = prompt("escolha uma das 4 operaçao a calculadora vai fazer");
if (operaçao == "+" ) {
let resultadomais = Number(n1) + Number(n2);
alert(`resultado = ${resultadomais}`);
}
if ( operaçao == "-"){
    let resultadomenos = Number(n1) - Number(n2);
alert(`resultado = ${resultadomenos}`);
}
if (operaçao == "/"){
    let resultadodivisao = Number(n1) / Number(n2) ;
alert(`resultado = ${resultadomenos}`);
}
if(operaçao =="*"){
  let resultadomulti = Number(n1) * Number(n2);
alert(`resulatdo = ${resultadomulti}`);
}