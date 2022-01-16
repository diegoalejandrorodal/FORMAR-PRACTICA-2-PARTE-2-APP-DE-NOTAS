let funcionesDeTareas = require("/.funcionesDeTareas")
let process = require("process")
let instruccion = process.argv[2]

console.log(instruccion)

switch (instruccion) {
    case "listar":
        let tareas = funcionesDeTareas.leerJSON()
        if (tareas.length === 0) {
            console.log("La lista de tareas está vacia")
        } else {
            console.log("-----------------")
            console.log("LISTADO DE TAREAS")
            console.log("-----------------")
            for (let i = 0; i < tareas.length; i++) {
                console.log(`Título: ${tareas[i].titulo} -/- Estado: ${tareas[i].estado}`)
            }
        }
        break;
    case undefined:
        console.log("Atención - Tienes que pasar una acción.")
        break;
    default:
        console.log("No entiendo qué quieres hacer.")
        break;
}
