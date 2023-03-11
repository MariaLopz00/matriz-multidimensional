let matriz1 = [[1, 2, 4], [4, 5, 6], [7, 8, 9]]

let matriz2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

let nuevaMatriz = []



const calcular = () => {


    matriz1.map((mtriz1, index) => {

        let nuevoElemet = []

        matriz1.map((item, i) => {

            let suma = mtriz1[i] + matriz2[index][i];

            nuevoElemet.push(suma);

            document.getElementById('matriz1').innerHTML += `<td>${nuevoElemet[i]}</td> `;            
            
            // console.log(nuevoElemet)
   
        });

        nuevaMatriz.push(nuevoElemet)
    });

    // console.log(nuevaMatriz.length)


    // for(i=0; i< nuevaMatriz.length;i++){

    // //    console.log(nuevaMatriz[i])


    //     let tabla = `<td>${nuevaMatriz[i]}</td> `;

    //   document.getElementById('matriz1').innerHTML += tabla;
    

    // }


    // nuevaMatriz.forEach((fila, i) => {

    //     console.log(i)



    //     nuevaMatriz.forEach((columna, idx) => {

    //         // console.log(idx)

    //         let tabla = ` `;

    //         document.getElementById('matriz1').innerHTML += tabla;
    //     })

    // })


}



calcular();
// console.log(nuevaMatriz);


