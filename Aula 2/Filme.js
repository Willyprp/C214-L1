class Filme{
    constructor(titulo,ano,genero,duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistido = null;
        this.avaliacao = null;
    }
    mostrarDetalhes(){
        console.log(`O filme ${this.titulo} foi lançado no ano de ${this.ano} é do gênero ${this.genero} e possui duração de ${this.duracao} minutos`);
        if (this.assistido == true && this.avaliacao != null){
            console.log(`O usuário já assistiu o filme e o avaliou com uma nota de ${this.avaliacao}`)
        }
        else {
            console.log(`O usuário ainda não assistiu o filme ou ainda não o avaliou`)
        }
    }
    assistirFilme(){
        this.assistido = true;
    }
    avaliarFilme(nota){
        this.avaliacao = nota;
    }
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Seja bem vindo!");
const listaDeFilmes = [];

function exibirMenu() {
    console.log("O que deseja fazer?");
    console.log("1 - Adicionar um novo filme");
    console.log("2 - Marcar um filme como assistido");
    console.log("3 - Avaliar um filme");
    console.log("4 - Exibir a lista de filmes");
    console.log("5 - Sair do programa");

    rl.question("Escolha uma opção: ", function(answer) {
        const opcao = parseInt(answer.trim());

        switch (opcao) {
            case 1:
                rl.question("Entre com o título do filme: ", function(title) {
                    rl.question("Entre com o ano do filme: ", function(year) {
                        rl.question("Entre com o gênero do filme: ", function(genre) {
                            rl.question("Entre com a duração do filme (em minutos): ", function(duration) {
                                const novoFilme = new Filme(title,year,genre,duration);
                                listaDeFilmes.push(novoFilme)
                                console.log("Novo filme adicionado:");
                                console.log("Título:", title);
                                console.log("Ano:", year);
                                console.log("Gênero:", genre);
                                console.log("Duração:", duration, "minutos");
                                exibirMenu();
                            });
                        });
                    });
                });
                break;
            case 2:
                console.log("Lista de filmes:");
                console.log(listaDeFilmes);
                rl.question("Qual filme deseja marcar como assistido?", function(indice) {
                    const indiceLista = parseInt(indice.trim());
                    if (indiceLista >= 0 && indiceLista < listaDeFilmes.length) {
                        listaDeFilmes[indiceLista].assistirFilme();
                        console.log(`Filme "${listaDeFilmes[indiceLista].titulo}" marcado como assistido.`);
                    } 
                    else {
                        console.log("Índice inválido.");
                    }
                    exibirMenu();
                });
                break;
            case 3:
                console.log("Lista de filmes:");
                console.log(listaDeFilmes);
                rl.question("Qual filme deseja avaliar?", function(indice) {
                    const indiceLista = parseInt(indice.trim());
                    if (indiceLista >= 0 && indiceLista < listaDeFilmes.length) {
                        rl.question("Qual é a nota?", function(nota){
                            const notaFilme = parseFloat(nota);
                            if(notaFilme>=0 && notaFilme <=10){
                                listaDeFilmes[indiceLista].avaliarFilme(nota);
                                exibirMenu();
                            }
                            else {
                                console.log("Nota inválida.");
                                exibirMenu();
                            }
                            
                        });
                    } 
                    else {
                        console.log("Índice inválido.");
                        exibirMenu();
                    }
                    
                });
                break;
            case 4:
                console.log("Lista de filmes:")
                console.log(listaDeFilmes)
                exibirMenu();
                break;
            case 5:
                console.log("Saindo do programa!");
                rl.close();
                break;
            default:
                console.log("Opção inválida!");
                exibirMenu(); // Chamada recursiva em caso de opção inválida
        }
    });
}

exibirMenu(); // Iniciar a exibição do menu
