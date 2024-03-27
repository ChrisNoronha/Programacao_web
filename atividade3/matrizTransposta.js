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



const A = [[1,2],[3,4],[5,6]];

matriz(A);
matrizTransposta(A);

