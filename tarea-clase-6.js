/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
const $botonConfirmar = document.querySelector("#boton-confirmar")
const $botonCalcular = document.querySelector("#boton-calcular")

//PARTE 1: TAMAÑO DEL GRUPO FAMILIAR Y LISTA DE EDADES
const dancingJesus = document.createElement("img")
dancingJesus.src = 'img/jebusDance.gif';
document.querySelector('body').appendChild (dancingJesus)

$botonConfirmar.onclick = function(){
    let $grupoFamiliar = document.querySelector("#cantidad-grupo-familiar").value
    let grupoFamiliar = Number($grupoFamiliar)
    removerFamiliar()
        for  (let i = 1; i<=grupoFamiliar ; i++){
            
            agregarFamiliar(i)
            
            }
    
    document.querySelector("#boton-calcular").className = ('')

        
return false;
}

function removerFamiliar(){
    const $integrantes = document.querySelectorAll (".integrante")
    for (let i=0 ; i<$integrantes.length ; i++){
        $integrantes[i].remove()
    }
    
}
function agregarFamiliar (index){
    const $div = document.createElement ('div')
    $div.className = "integrante"
    const nodoMiembro = document.createElement ('li');
    nodoMiembro.textContent = "Edad del integrante del grupo familiar numero " + [index]
    let edadMiembro = document.createElement ('input')
    edadMiembro.type = "number"

    $div.appendChild (nodoMiembro);
    $div.appendChild (edadMiembro);
    const $integrantes = document.querySelector ("#integrantes")
    $integrantes.appendChild($div)

}

//PARTE 2: OBTENER LAS EDADES Y REALIZAR COMPARACIONES SOBRE ELLAS
$botonCalcular.onclick = function (){
    document.querySelector(".oculto").className=""
    const arrayEdades = obtenerEdades()
    console.log (arrayEdades)
    const mayorNumero = obtenerMayorNumero (arrayEdades)
    mostrarEdadMayor (mayorNumero)
    const menorNumero = obtenerMenorNumero(arrayEdades)
    mostrarEdadMenor (menorNumero)
    const numeroPromedio = obtenerNumeroPromedio(arrayEdades)
    mostrarNumeroPromedio(numeroPromedio)
    return false;
}

function ocultarBotonCalcular(){
    document.querySelector("#boton-calcular").className='oculto'
}

function ocultarAnalisis(){
    document.querySelecetor("#analisis").className='oculto'
}

function resetear(){
    removerFamiliar()
    ocultarBotonCalcular()
    ocultarAnalisis()
    
}

document.querySelector("#boton-reset").onclick = resetear

function obtenerEdades (){
    const $integrantes = document.querySelectorAll('.integrante input')
    const edades = []
     for (let i = 0; i<$integrantes.length ; i++){
            edades.push(Number($integrantes[i].value))
    }
    return edades;
 }

 function obtenerMenorNumero(edades){
     let menorNumero = edades [0]
     for (let i = 0; i<edades.length; i++){
         if (edades[i] < menorNumero){
             menorNumero = edades[i]
         }
     }
     return menorNumero
 }

 function mostrarEdadMenor (valor){
     document.querySelector("#menor-edad").textContent=valor;
 }
 function mostrarEdadMayor (valor){
     document.querySelector("#mayor-edad").textContent=valor;
 }

function mostrarNumeroPromedio (valor){
    document.querySelector("#edad-promedio").textContent=valor;
}

 function obtenerMayorNumero (edades){
     let mayorNumero = edades [0]
     for (let i=0 ; i<edades.length ; i++){
         if (edades [i]>mayorNumero){
             mayorNumero = edades [i]
         }
     }
     return mayorNumero
 }

 function obtenerNumeroPromedio (edades){
     let acumulaNumeros = 0
     let divisor = edades.length
     for (let i = 0; i<edades.length; i++){
         acumulaNumeros += edades[i]
     }
    numeroPromedio = acumulaNumeros / divisor
     return numeroPromedio
 }
//

/*  
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.
Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
