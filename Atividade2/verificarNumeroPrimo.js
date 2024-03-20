function verificarNumeroPrimo(numero){
  if(numero<0){
    return 'numero negativo';
  }
  if (numero%2===0 && numero!==2){
    return false;
  }
  if(numero==2 || numero ==3){
    return true;
  }
     if(numero==1 || numero==0){
    return false;
  }
  else{
    if(numero>>10){
      raiz=Math.sqrt(numero);
    }
    if(numero<<8){
      raiz=4;
    }
  
    for (var i=3;i<raiz;i+=2){
      if(numero%i==0){
        return false
      }
    }
    return true;
  }

}
console.log(verificarNumeroPrimo(0)); //false
console.log(verificarNumeroPrimo(1)); //false
console.log(verificarNumeroPrimo(2)); //true
console.log(verificarNumeroPrimo(3)); //true
console.log(verificarNumeroPrimo(7)); //true
console.log(verificarNumeroPrimo(83)); //true
console.log(verificarNumeroPrimo(100)); //false
console.log(verificarNumeroPrimo(991)); //true
console.log(verificarNumeroPrimo(104729)); //true
console.log(verificarNumeroPrimo(14348907)); //false


