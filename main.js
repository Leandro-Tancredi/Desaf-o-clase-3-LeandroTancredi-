//  Programa para calcular el factorial de un número menor a 170, contraseña para acceder 12345  //

let pass= prompt("Ingrese su contraseña");

    while (pass!=12345) {
        console.log(pass);
            if (pass.toLowerCase()=="esc") {
                    alert("Programa terminado, presione f5 para reiniciar")
                }
                else {
                    pass=prompt("Ingrese su contraseña")
                };
        };
        alert("Acceso concedido, pulse aceptar para continuar");

let factorial= parseInt(prompt("Ingrese un número > 0 para calcular su factorial"));
let resultado=1;


    if (factorial<=170){
        for (let i = 1; i<=factorial; i++){
            resultado*=i;
            console.log(resultado);
        };
       alert(factorial + "! = " + resultado)
    }
    else{alert ("no es posible calcular su factorial")};
