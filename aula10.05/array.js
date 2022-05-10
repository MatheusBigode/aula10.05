frutas = ['uva', 'maçã', 'pera', 'laranja', 'bergamota', 'mimosa']

//console.log(frutas[0])
//console.log(frutas[1])
//console.log(frutas[2])

//console.log(frutas[frutas.legnth - 1])
//console.log(frutas[frutas.length - 2])

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}
for (let i = frutas.length - 1; i > 0; i--){
    console.log(frutas[i])
}
for (let i = 0; i < frutas.length; i++){
    console.log("Cálculo dos índices: " + (frutas.length-1) + " --- " + i)
    console.log(frutas[frutas.length - 1 - i])
}
