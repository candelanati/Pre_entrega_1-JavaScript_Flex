let cuadrosDisponibles = ["happier than ever", "across the spiderverse", "currents", "to pimp a butterfly"]
console.log(cuadrosDisponibles)

let metodosPago =["transferencia","mercado pago","efectivo","débito","crédito"]

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
        case "5":    
            total = total + (total * 0.15)
            console.log(total)
            break
        case "transferencia":
        case "1":
            total = total - (total * 0.15)
            console.log(total)
            break
        case "efectivo":
        case "3":
            total = total - (total * 0.15)
            console.log(total)
            break
        case "mercado pago":
        case "2":
            // no cambia el precio
            break
        case "debito":
        case "4":
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
    let cuadroRepetido = false
    if(!isNaN(nuevoCuadro)&&Number(nuevoCuadro)<=4&&Number(nuevoCuadro)>0){
        comparaString = true
        nuevoCuadro = cuadrosDisponibles[nuevoCuadro-1]
        //chequea que el nuevo cuadro no haya sido agregado anteriormente al carrito (imput numerico)
        for(let a=0;a<carrito.length&&!cuadroRepetido;a++){
            if(nuevoCuadro.toLowerCase() == carrito[a]){
                cuadroRepetido=true
                console.log(cuadroRepetido)
            }
        }
    }else{
        //chequea que el nuevo cuadro no haya sido agregado anteriormente al carrito (imput string)
        for(let a=0;a<carrito.length&&!cuadroRepetido;a++){
            if(nuevoCuadro.toLowerCase() == carrito[a]){
                cuadroRepetido=true
                console.log(cuadroRepetido)
            }
        }
        //chequea que el cuadro exista
        for(let y=0;y<cuadrosDisponibles.length&&comparaString===false;y++){
            if(nuevoCuadro.toLowerCase() == cuadrosDisponibles[y]){
                comparaString=true
                console.log(comparaString)
            }
        }
    }

    return [comparaString, nuevoCuadro.toLowerCase(), cuadroRepetido]
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
    if(respuesta[0]&&!respuesta[2]){
        carrito[i] = respuesta[1]
        console.log(carrito)
        sumaPrecios(Number(precios[i]))
    }else if(respuesta[2]){
        alert("este cuadro ya fue agregado al carrito, seleccione otro")
        i=i-1
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
        metodo = prompt("con que método de pago desea abonar? \n 1- transferencia (-15%) \n 2- mercado pago \n 3- efectivo (-15%) \n 4- débito \n 5- crédito (+15%)")
        console.log(metodo)
        respuestaPago = pago(metodo)
        if(respuestaPago[0]===true){
            console.log(metodo)
            console.log(pago(metodo))
            pagoRealizado=true
            //si es numero pasa la variable metodo a su equivalente, ej: 1 = "transferencia"
            if(!isNaN(metodo)&&Number(metodo)>=1&&Number(metodo)<=5){
                let numeroRespuestaPago = Number(metodo)
                console.log(numeroRespuestaPago)
                metodo = metodosPago[numeroRespuestaPago-1]
                console.log(metodo)
            }
            if(confirm("usted se encuentra por abonar: " + respuestaPago[1] + "\npor el siguiente medio de pago: " + metodo)){
                alert("compra realizada con exito!")
            }else{
                if(confirm("desea retirarse sin completar su pedido?")){
                    //el pago no esta realizado pero se activa para salir del while
                    pagoRealizado=true
                }else{
                    alert("debe ingresar un metodo de pago")
                    pagoRealizado=false
                }
            }
        }else{
            if(confirm("desea retirarse sin completar su pedido?")){
                pagoRealizado=true
            }else{
                //el pago no esta realizado pero se activa para salir del while
                alert("debe ingresar un metodo de pago")
            }
        }
    }
}


