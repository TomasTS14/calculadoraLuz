function calcular_potencia() {
    let potencia = document.getElementById("potencia").value;
    let potencia_precio = document.getElementById("potencia_precio").value;
    let dias_facturados = document.getElementById("dias_facturados").value;

    let resultado = potencia * potencia_precio * dias_facturados;
    console.log(resultado);
    return Math.round(resultado * 100) / 100;
}

function calcular_consumo_estable() {
    let kw_total = document.getElementById("kw_total").value;
    let kw_precio = document.getElementById("kw_precio").value;
    let resultado = kw_total * kw_precio;
    console.log(resultado);
    return Math.round(resultado * 100) / 100;
}

function calcular_consumo_8h() {
    let kw_total = document.getElementById("kw_total").value;
    let kw_precio_90percent = document.getElementById("kw_precio_opcional").value;
    let kw_precio_10percent = document.getElementById("kw_precio_opcional2").value;
    let kw_90percent = Math.round((kw_total * 0.9) * 100) / 100;
    let kw_10percent = Math.round((kw_total * 0.1) * 100) / 100;
    let resultado = Math.round(((kw_90percent * kw_precio_90percent) + (kw_10percent * kw_precio_10percent)) * 100) / 100;
    return resultado;
}

function calcular_alquiler() {

    let alquiler_precio = document.getElementById("alquiler_precio").value;
    let alquiler_meses = document.getElementById("alquiler_meses").value;
    let resultado = alquiler_meses * alquiler_precio;
    console.log(resultado);
    return Math.round(resultado * 100) / 100;

}

function calcular_estable() {
    document.getElementById("potencia_resultado").innerHTML = calcular_potencia();
    document.getElementById("consumo").innerHTML = calcular_consumo_estable();
    let ime = Math.round(document.getElementById("impuesto_electrico").value * 100) / 100;
    document.getElementById("ime").innerHTML = ime;
    document.getElementById("alquiler").innerHTML = calcular_alquiler();
    let resultado = calcular_potencia() + calcular_consumo_estable() + ime + calcular_alquiler();
    document.getElementById("precio_sin_iva_estable").innerHTML = Math.round(resultado * 100) / 100;
    document.getElementById("precio_con_iva_estable").innerHTML = Math.round((resultado + resultado * 0.1) * 100) / 100;
}

function calcular_8h() {
    document.getElementById("potencia_resultado_8h").innerHTML = calcular_potencia();
    document.getElementById("consumo_8h").innerHTML = calcular_consumo_estable();
    let ime = Math.round(document.getElementById("impuesto_electrico").value * 100) / 100;
    document.getElementById("alquiler_8h").innerHTML = calcular_alquiler();
    let resultado = calcular_potencia() + calcular_consumo_8h() + ime + calcular_alquiler();
    document.getElementById("precio_sin_iva_8h").innerHTML = Math.round(resultado * 100) / 100;
    document.getElementById("precio_con_iva_8h").innerHTML = Math.round((resultado + resultado * 0.1) * 100) / 100;

}

function calcular_ahorro() {
    let precio_cliente = document.getElementById("precio_cliente").value;
    let coste_estable = document.getElementById("precio_con_iva_estable").value;
    let coste_8h = document.getElementById("precio_con_iva_8h").value;
    let ahorro_estable = precio_cliente - coste_estable;
    let ahorro_8h = precio_cliente - coste_8h;
    let ahorro_text = `ahorraria ${ahorro_estable} con el plan estable y ${ahorro_8h} con el de 8h`;
    document.getElementById("ahorro_text").innerHTML = ahorro_text;
}

const boton_calculo = document.getElementById("calcular_boton");
const boton_ahorro = document.getElementById("ahorro_boton");

boton_calculo.addEventListener('click', calcular_estable);
boton_calculo.addEventListener('click', calcular_8h);
boton_ahorro.addEventListener('click', calcular_ahorro);


