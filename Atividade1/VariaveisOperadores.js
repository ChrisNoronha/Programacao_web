i=0
x=[5, 7, 5, 4]
y=[7,8,9,2]
z=[x[0]+y[0], x[1]-y[1], x[2]*y[2], x[3]/y[3]]
ope=['soma','subtração','multiplicação','divisão']

while(i<4) {
  console.log("O resultado da " + ope[i] + " entre " + x[i] +" e " + y[i] +" é " + z[i])
  i++}