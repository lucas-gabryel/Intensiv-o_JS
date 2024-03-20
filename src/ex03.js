let input = Number(prompt('Insira algum tipo de dado!')) // todo prompt é interpretado como string

let type = String(typeof input) 

if (type === "number") {
    alert('O dado que você inseriu é um número')
} else {
    alert('O dado que você inseriu não é um número.')
}