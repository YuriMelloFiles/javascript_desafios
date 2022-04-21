// 1. Declare uma variável de nome weight

var weight = 40

// 2. Que tipo de dado é a variável acima?

console.log(typeof weight) // Number

/* 3. Declare uma variável e atribua valores para cada um dos dados:
    *name : String  
    *age : Number (integer)
    *stars: Number (float)
    *isSubscribed : Boolean (boolean)
    

*/

const variaveis = {
    name:"String",  
    age: 12 ,
    stars: 5.4 ,
    isSubscribed : true
}

/* 4. A variável student abaixo é de que tipo de dados?

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem : 
        <name> de idade <age> pesa <weight> kg.
        Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto 

*/
let student = {
    name:"Marcos",  
    age: 13 ,
    stars: 5.4 ,
    isSubscribed : true
}

console.log(`${student.name} de idade ${student.age} pesa ${weight} kg.`)
// esta variável é do tipo objeto



/* 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor , ou seja,
 somente o Array vazio */

let students = []


/* 6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4.(Não
    copiar e colar o objeto, mas usar objeto criado e inserir ele no Array)
    */

students.push(student)

// 7. Coloque no console o valor da posição zero do Array acima

console.log(students[0])

// 8. Crie um novo student e coloque na posição 1 do Array students

let new_student = {
    name:"joão",  
    age: 30 ,
    stars: 7.4 ,
    isSubscribed : true
}

students.push(new_student)
console.log(students)


/* 9. Sem rodar o código, o que será impresso? lembre do Hosting.

    console.log(a)
    var a = 1
*/

// Será impresso 'undefined', pois a variável so foi definida após. 



