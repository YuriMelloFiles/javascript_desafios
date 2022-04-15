/*  1)Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo. */ 



function calcular_receita() {
    /* Criando variáveis */
    var receitas = [] ;
    var  despesas = [] ;
    let resp = ''
    let total_receitas = 0
    let total_despesas = 0
    var total = 0
    /* Inserindo os valores correspondentes da RECEITA*/
    while ( resp != 'n' && resp != 'N') {
        valor = 0 
        
        valor = parseFloat(prompt('Insira um valor de RECEITA : '))
        receitas.push(valor)   
        
        resp = prompt('Deseja continuar adicionando? s ou n?')
    
    }
    /* Redefinindo a variável para reutiliza-la */    
    resp = ''
    /* Inserindo os valores correspondentes da DESPESA*/
    while ( resp != 'n' && resp != 'N') {
        valor = 0 
        valor = parseFloat(prompt('Insira um valor de DESPESA : '))
        despesas.push(valor)      
        resp = prompt('Deseja continuar adicionando? s ou n?')
    
    }
    /* Calculando o somatório de todos os valores da RECEITA*/
    for(var i=0; i<receitas.length; i++){
        total_receitas += receitas[i]
       }
    /* Calculando o somatório de todos os valores da DESPESA*/
    for(var i=0; i<despesas.length; i++){
        total_despesas += despesas[i]
       }
    /* Calculando SALDO TOTAL */
    total = (total_receitas - total_despesas)
    
    /* Imprimindo os saldo */
    if (total > 0) {
        console.log(`Seu saldo foi positivo! Totalizando : R$ ${total.toFixed(2)}`)
    } else if (total == 0) {
        console.log(`Não houve saldo nem despesas. Totalizando : R$ ${total.toFixed(2)}`)
    } else  {
        console.log(`Seu saldo foi negativo! Totalizando : R$ ${total.toFixed(2)}`)
    }

}

