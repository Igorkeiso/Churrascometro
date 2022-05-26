let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado =  document.getElementById("resultado")

function calcular() {
    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let quantidadeTotalCarne =  carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)
    let quantidadeTotalCerveja =  cervejaPP(duracao) * adultos 
    let quantidadeTotalBebidas =  bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas)

    resultado.innerHTML = `<p> ${quantidadeTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p> ${Math.ceil(quantidadeTotalCerveja / 355)} latas de Cerveja</p>`
    resultado.innerHTML += `<p> ${quantidadeTotalBebidas / 2000} Litros de Bebida</p>`
}

function carnePP (duracao) {
    let carne = 400
    if(duracao >= 6){
        return 650
    }else {
        return 400
    }
    
}

function cervejaPP (duracao) {
    let cerveja = 1200
    if(duracao >= 6){
        return 600
    }else {
        return 1200
    }
    
}

function bebidasPP (duracao) {
    let bebidas = 1000
    if(duracao >= 6){
        return 1500
    }else {
        return 1000
    }
    
}