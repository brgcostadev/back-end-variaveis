let montante = 90000
let capital = 60000
let periodoTempo = 24

let taxaJuros = ((montante/capital)**(1/periodoTempo) - 1) * 100

console.log(taxaJuros.toFixed(3) + "% ao mês")