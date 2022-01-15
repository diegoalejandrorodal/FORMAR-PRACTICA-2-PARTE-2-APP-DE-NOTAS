let funcionesDeTareas =  require("/.funcionesDeTareas") //requeri el archivo de funciones de tareas
let process = require("process") //requeri un proceso para poder utilizar el argv

let instruccion = process.argv[2]

console.log(instruccion) //muestro por consola las condiciones de las instrucciones del switch

/*switch (instruccion) {
    case "listar":
    funcionesDeTareas.leerJSON()
    break;
    case  undefined:
    console.log("Atencion, - Tienes que pasar  una accion.")
    break;
    default:
        console.log("No entiendo que quieres hacer.")
        break;
    }
*/

//this. me llama al archivo o objeto
//se puede utilizar un ciclo for dentro del condicional utilizando un console.log de lo que quiero mostrar por consola
//template de string ` `, de conocen con backstring. Se utiliza para no concatenar 
switch (instruccion) {
    case "listar":
        let tareas = funcionesDeTareas.leerJSON() // contiene la base de datos de tareas
        if(tareas.length === 0){ // Si el array de tareas está vacío
            console.log("La lista de tareas está vacia")
        }else{ // Si en el array de tareas hay por lo menos una
            console.log("-----------------")
            console.log("LISTADO DE TAREAS")
            console.log("-----------------")
            for (let i = 0; i < tareas.length; i++){
                console.log(`Título: ${tareas[i].titulo} -/- Estado: ${tareas[i].estado}`)
            }
        }
        break;
    case undefined :
        console.log("Atención - Tienes que pasar una acción.")
        break;
    default:
        console.log("No entiendo qué quieres hacer.")
    break;
}
