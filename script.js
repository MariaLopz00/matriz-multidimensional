let matriz1 = [[1, 2, 4], [4, 5, 6], [7, 8, 9]]

let matriz2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]



let nuevaMatriz1= [];

//primera matriz
 let id1= [];
 let acu1= 0;

 //segunda matriz
 let id2= [];
 let acu2= 100;

 let iguales= false;


const valorSelect = () => {

    //!valores del select matriz 1
    
    let filaM1 = document.getElementById('filaM1').value
    let columnaM1 = document.getElementById('columnaM1').value
    
    //!valores del select matriz 2
    
    let filaM2 = document.getElementById('filaM2').value
    let columnaM2 = document.getElementById('columnaM2').value
    
    

    //? verificacion de las dimenciones de las matrices

    if (filaM1 == filaM2 && columnaM1 == columnaM2) {

        iguales= true;


        //? crear tabla matriz 1

        let tabla= '<table style="background-color: #2FD84E">'
   
        for (let i = 0; i < filaM1; i++) {

            let nuevoArray= []
    
            tabla+='<tr>'

            for (let j = 0; j < columnaM1; j++) {

                acu1++
                
                tabla+=`<td> <input type="number" value= "0" id="${acu1}" class="form-control" placeholder="0" style="border-color: red; border-width: 2px;"></td>`
        
                nuevoArray.push(acu1);
  
            }
            
            id1.push(nuevoArray)

            tabla+='</tr>'
        }
        tabla+= '</table>';


         //? crear tarjeta que contiene la tabla

         let card1 = `<div class="card-body" style="background-color: #2FD84E" >

               <h5 class="card-title">Matriz de ${filaM1} x ${columnaM1} dimenciones</h5>
    
                ${tabla}

                </div>`

        document.getElementById('card1').innerHTML = card1;

        //!---------------------------------------

        //? crear tabla Matriz 2

        let tabla2= '<table  style="background-color: #2FD84E" ">'
   
        for (let i = 0; i < filaM2; i++) {

            let nuevoArray2= []
    
            tabla2+='<tr>'

            for (let j = 0; j < columnaM2; j++) {

                acu2++
                
                
                tabla2+=`<td> <input type="number" value= "0" id="${acu2}" class="form-control" placeholder="0" style="border-color: red; border-width: 2px;"></td>`
 
                          
                nuevoArray2.push(acu2);
    
                
            }
            
            id2.push(nuevoArray2);

           

            tabla2+='</tr>'
        }
    
        tabla2+= '</table>'; 

        //? crear tarjeta que contiene la tabla
        let card2 = ` <div class="card-body" style="background-color: #2FD84E"  >

         <h5 class="card-title">Matriz de ${filaM2} x ${columnaM2} dimenciones</h5>

         ${tabla2}
       
         </div>`

        document.getElementById('card2').innerHTML = card2;

        let gif_gato = ` 
             

        <div class=" align-items-center" style="text-align:center">
            <strong>Complete los campos...</strong>
        </div>
        
       
        <img src="gif-gato.gif" alt="" style="width: 200px;height: 150px; margin-left: 550px; margin-top: 10px;">
        `
     document.getElementById('imagen').innerHTML = gif_gato



    }


}



const valorInput= ()=>{


    //!Matriz 1

    let filaM1 = document.getElementById('filaM1').value
    let columnaM1 = document.getElementById('columnaM1').value
    let primeraMatriz=[]

    //?recorre fila x culumas para obetener el elemento del input
    for(let i = 0; i <filaM1; i++) {

        let arrayM1= []

        for (let j = 0; j < columnaM1; j++) {

                
             
            arrayM1.push(parseInt(document.getElementById(id1[i][j]).value));
           
               

        }

        primeraMatriz.push(arrayM1)
    } 

    //!matriz 2

    let filaM2 = document.getElementById('filaM2').value
    let columnaM2 = document.getElementById('columnaM2').value
    let segundaMatriz=[]
    
    //?recorre fila x culumas para obetener el elemeto del input
    for(let i = 0; i <filaM2; i++) {
        
        let m2= []
        
        for (let j = 0; j < columnaM2; j++) {
 
            m2.push( parseInt(document.getElementById(id2[i][j]).value));

        }

        segundaMatriz.push(m2)
    } 
 
  
    //  console.log(primeraMatriz)
    // console.log(segundaMatriz)
    


    //? Armar la nueva matriz
    let nuevaMatriz = []
    

        primeraMatriz.map((mtriz1, index) => {
    
            let nuevoElemet = []
    
            primeraMatriz.map((item, i) => {

                nuevoElemet.push(parseInt(mtriz1[i] + segundaMatriz[index][i])) ;
                // console.log(segundaMatriz[index][i])

            });
    
            nuevaMatriz.push(nuevoElemet)
        });
    
    
        //?crear tabla para la nueva matriz
        let tabla= '<table  style=" margin: auto; " >'

            tabla+= '<h1 style="margin-left: 350px ;">Resultado</h1>'
    
                 for(i=0; i<filaM1;i++){
        
                     tabla+='<tr>'
        
                     for(j=0; j< columnaM1;j++){
        
                        tabla+=`<td><button style="width: 100px; background-color:#9B2FD8; border-color:  black; color: white; border-width: 2px;" type="button" class="btn btn">${nuevaMatriz[i][j]}</button></td>`

                     }
        
                     tabla+='</tr>'
        
                 }
        tabla+= '</table>'

        
        
       

        if(iguales==true){

            setTimeout(function () {
 
                let gif = ` 
             

                <div class=" align-items-center" style="text-align:center">
                    <strong>Loading...</strong>
                    <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                </div>
                
               
                <img src="calculando.gif" alt="" style="width: 200px;height: 150px; margin-left: 550px; margin-top: 10px;">
                `
             document.getElementById('imagen').innerHTML = gif
            }, 300);

            setTimeout(function () {
                document.getElementById('imagen').innerHTML = tabla;
                
            }, 3000);
        }
        
 
    
        
       
        
          
}









// calcular();


//codigo checkkkkk



// const calcular= ()=>{
//     let select1= document.getElementById('select1').value
//     let select2= document.getElementById('select2').value

//     let tabla= '<table>'
    
//         for(i=0;i<select1;i++){

//             let nuevoArray= []
    
//             tabla+= '<tr>'

//             for(j=0; j < select2;j++){
    
//                 acu1++
    
//                 tabla+= `<td><input type="number" id='${acu1}'  placeholder="0"></td>`
                
//                 nuevoArray.push(acu1)
//             }
//             id.push(nuevoArray);
//             console.log(id)

//             tabla+= '</tr>'
//         }
        
    
//     tabla+='</table>'

//     document.getElementById('aca').innerHTML=tabla

// }

// let nuevo=[]

// const tomarValor=()=>{
//     let select1= document.getElementById('select1').value
//     let select2= document.getElementById('select2').value



//    for(i= 0; i<select1;i++ ){

//      let element= []

//     for(j=0; j<select2; j++){

//        element.push(parseInt(document.getElementById(id[i][j]).value));

       
//     }

//     nuevo.push(element)

//     }

//     console.log(nuevo[1][0]) 
       
//     let tabla= '<table>'

//         for(i=0; i<select1;i++){

//             tabla+='<tr>'

//             for(j=0; j< select2;j++){

//                 tabla+=`<td><button type="button" class="btn btn-outline-danger">${nuevo[i][j]}</button></td>`

               

//             }

//             tabla+='</tr>'

//         }
//     tabla+= '</table>'

//   document.getElementById('matriz').innerHTML=tabla;

   


// }



