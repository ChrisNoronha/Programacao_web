function matrizTransposta(A){

    let matrizStringTransposta = "";
    for (let i=0;i<A[i].length;i++){
        for (let j=0;j<A.length;j++){
            matrizStringTransposta += A[j][i] + ' ';
        }
        matrizStringTransposta += '\n';
    }
    console.log(matrizStringTransposta);
}

module.exports = {
    matrizTransposta
}