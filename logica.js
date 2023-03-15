let users= ['Deelyn_ksks','furanko-suma','bel_g','churrascoViolento','blito','sofii'];

//punto 2
//a ultimo valor del arreglo
console.log(users.at(-1));

//b obtener la posicion de un elemento
let valor=  users.findIndex(element=>element=='bel_g');
console.log(valor);

//c agregar elementos al array
let newElemen= users.push('Metry','montesit00','IndieDev');
console.log(newElemen);

//d imprimir valor del arreglo por cada item
users.forEach((element,item)=>{
    console.log(`Usuario: ${element}`);
});

//e otros ejemplos de como recorrer un arreeglo
for(i=0;i<users.length;i++){
    console.log(`Usuario: ${users[i]}`)
}

for(let valor of users ){
    console.log(`Usuario: ${valor}`)
}

//3
const students= 'Agustin,Rocio,Pablo,Lataro,Nahir';

//a convertir una cadena de string en un arreglo
let array= [];
array.push(students);
console.log(array)

//b convertir un array en string
let caracter= array.toString();
console.log(caracter)

//c  recorreia la cadena de caracteres y lo almacenaria en un arreglo