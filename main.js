let cuadrosDisponibles = ["happier than ever", "across the spiderverse", "currents", "to pimp a butterfly"]
console.log(cuadrosDisponibles)

let precios = [20000, 15000, 18000, 23000]
let cuadro
let total = 0

let carrito = []
console.log(carrito)

let exit = true
console.log(exit)

let nuevoCuadro
console.log(nuevoCuadro)

//metodos de pago
function pago (metodo){
    switch(metodo){
        case "credito":
            total = total + (total * 0.15)
            console.log(total)
            break
        case "transferencia":
            total = total - (total * 0.15)
            console.log(total)
            break
        case "efectivo":
            total = total - (total * 0.15)
            console.log(total)
            break
        case "mercado pago":
            // no cambia el precio
            break
        case "debito":
            // no cambia el precio
            break
        default:
            return [false, 0]
    }
    return [true, total]
}

// compara el cuadro que se ingresa en el prompt con los existentes
function comparaArray (nuevoCuadro) {
    let comparaString = false
    if(!isNaN(nuevoCuadro)&&Number(nuevoCuadro)<=4&&Number(nuevoCuadro)>0){
        comparaString = true
        nuevoCuadro = cuadrosDisponibles[nuevoCuadro-1]
    }else{
        for(let y=0;y<cuadrosDisponibles.length&&comparaString===false;y++){
            if(nuevoCuadro.toLowerCase() == cuadrosDisponibles[y]){
                comparaString=true
                console.log(comparaString)
            }
        }
    }
    return [comparaString, nuevoCuadro.toLowerCase()]
}

//suma de precios
function sumaPrecios (cuadro){
    total = total + cuadro
    console.log(total)
}

//agrega los cuadros elegidos existentes al array carrito
let respuesta
let metodo
for(let i=0;exit!=false;i++){
    nuevoCuadro = prompt("que cuadro desea agregar? \n 1- Happier than ever \n 2- Across the spiderverse \n 3- Currents \n 4- To pimp a butterfly")
    console.log(nuevoCuadro)
    respuesta = comparaArray(nuevoCuadro)
    if(respuesta[0]){
        carrito[i] = respuesta[1]
        console.log(carrito)
        sumaPrecios(Number(precios[i]))
    }else{
        alert("este cuadro no existe")
        i = i-1
    }
    exit = confirm("quiere seguir comprando?")
    console.log(exit)
}
// alert de los contenidos del carrito
alert("Su carrito contiene los cuadros: \n\n" + "- " + carrito.join("\n- "))
// alert del total del carrito
alert("total hasta ahora: " + total)
// pago
if(!exit){
    let pagoRealizado = false
    let respuestaPago
    while(!pagoRealizado){
        metodo = prompt("con que método de pago desea abonar? \n 1- transferencia \n 2- mercado pago \n 3- efectivo \n 4- débito \n 5- crédito")
        console.log(metodo)
        respuestaPago = pago(metodo)
        if(respuestaPago[0]===true){
            console.log(metodo)
            console.log(pago(metodo))
            pagoRealizado=true
            if(confirm("usted se encuentra por abonar " + respuestaPago[1] + " por el siguiente medio de pago: " + metodo)){
                alert("compra realizada con exito!")
                
            }
        }
    }
}


