let capital = 1000
let periodoTempo = 5
let taxa = 0.125

let montante = capital*(1 + taxa)**periodoTempo

console.log("R$ " + montante.toFixed(2))