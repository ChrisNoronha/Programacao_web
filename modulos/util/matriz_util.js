function matriz(A){

    let matrizString = "";
    for (let i=0;i<A.length;i++){
        for (let j=0;j<A[i].length;j++){
            matrizString += A[i][j] + ' ';
        }
        matrizString += '\n';
    }
    console.log(matrizString);
}

module.exports = {
    matriz
}