/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/


function desafio_3(){

    const booksByCategory = [
        {
            category: "Riqueza",
            books: [
                {
                    title: "Os segredos da mente milionária",
                    author: "T. Harv Eker",
                },
                {
                    title: "O homem mais rico da Babilônia",
                    author: "George S. Clason",
                },
                {
                    title: "Pai rico, pai pobre",
                    author: "Robert T. Kiyosaki e Sharon L. Lechter",
                },
            ],
        },
        {
            category: "Inteligência Emocional",
            books: [
                {
                    title: "Você é Insubstituível",
                    author: "Augusto Cury",
                },
                {
                    title: "Ansiedade – Como enfrentar o mal do século",
                    author: "Augusto Cury",
                },
                {
                    title: "Os 7 hábitos das pessoas altamente eficazes",
                    author: "Stephen R. Covey",
                },
                {
                    title: "Jogada perigosa ",
                    author: "Robert Kiyosaki",
                },
            ],
        },
    ];
    
    
    /* Contando o número de categorias e o número de livros em cada categoria*/
    
    let Allcategories = 0
    let books = 0
    
    for (let content of booksByCategory){
        
        if (content.category != null){
            Allcategories += 1
    
        } 
        
        if (content.books != null){
            
            for (authorsAndTitle of content.books){
                books +=1
                
    
            }
            
            
    
        }
        
        
        
        console.log(`O total de livros na ${Allcategories}° categoria : ' ${content.category} ',  é : ${books}`)  
        books= 0
    }
    
    
    
    /*  Contar o número de autores */
    
    
    let authors = 0
    for (let content of booksByCategory){
            
        if (content.books != null){
            
            for (authorsAndTitle of content.books){
                
                let cont = authorsAndTitle.author != null ? authors+=1 : pass; 
                
    
            }
                   
    
        }       
        
    }
    
    console.log(`O total de autores é : ${authors}.`)
    
    
    /* Mostrar livros do autor Auguto Cury */ 
    
    
    for (let content of booksByCategory){
            
        if (content.books != null){
            
            for (authorsAndTitle of content.books){
                
                if (authorsAndTitle.author == "Augusto Cury"){
                    
                    console.log(`Este é um livro de Augusto Cury : ${authorsAndTitle.title} `)
                }  
                
            }             
    
        }       
        
    }
    
    
    /*Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.*/
    
    /*
    let answer = prompt("Digite o nome de um autor  : ")
    
    for (let content of booksByCategory){
            
        if (content.books != null){
            
            for (authorsAndTitle of content.books){
                
                if (authorsAndTitle.author == answer){
                    
                    console.log(`Este é um livro de ${answer} : ${authorsAndTitle.title} `)
                }  
                
            }             
    
        }       
        
    }
    
    */




}



