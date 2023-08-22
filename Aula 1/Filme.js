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

    const filme1 = new Filme('Vingadores: Ultimato',2019,'Ação',182);
    filme1.mostrarDetalhes();
    filme1.assistirFilme();
    filme1.avaliarFilme(9.5);
    filme1.mostrarDetalhes();

    const filme2 = new Filme('Harry Potter e a Câmara Secreta',2002,'Fantasia',161)
    filme2.mostrarDetalhes();
    filme2.assistirFilme();
    filme2.avaliarFilme(7);
    filme2.mostrarDetalhes();

    const filme3 = new Filme('One Piece Film: Red',2022,'Aventura',115)
    filme3.mostrarDetalhes();
    filme3.assistirFilme();
    filme3.avaliarFilme(4.5);
    filme3.mostrarDetalhes();