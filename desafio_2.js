/* Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32 */ 

/* Primeira maneira : usando duas funções */

function transformarCelsius() {

    let celsius = parseFloat(prompt('Digite o valor em ° Celsius :'))
    let fahrenheit =  (celsius * 9/5 + 32)   
    console.log(`O valor correspondente em Fahrenheit é : ${fahrenheit.toFixed(1)} ° `)
}

function transformarfahrenheit() {

    let fahrenheit = parseFloat(prompt('Digite o valor em ° Fahrenheit :'))
    let  celsius =  (fahrenheit - 32) * 5/9   
    console.log(`O valor correspondente em Celsius é : ${celsius.toFixed(1)} ° `)
}


/* Segunda maneira : usando uma função */

 
function transformarGraus() {
    alert('Para converter insira o número seguido de F caso for fahrenheit ou C caso for celsius. Ex: 50C ')
    graus = prompt('Insira um número:')
    let grausFahrenheit = graus.toUpperCase().includes('F')
    let grausCelsius = graus.toUpperCase().includes('C')

    if (!grausFahrenheit && !grausCelsius) {
        throw new Error('Grau não identificado')
    }

    /* convertendo de Fahrenheit para Celsius */
    let grauAtualizado = Number(graus.toUpperCase().replace('F',''));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let sinal = 'C'

    /* convertendo de Celsius para fahrenheit */
    
    if (grausCelsius) {
        
        grauAtualizado = Number(graus.toUpperCase().replace('C',''));
        formula = (celsius) =>  celsius * 9/5 + 32
        sinal = 'F' 

        
    }

    console.log(formula(grauAtualizado) + sinal) 
    
    
    
}
