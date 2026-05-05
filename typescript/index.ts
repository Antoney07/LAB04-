// 1. CLASSE LIVRO

class Livro {
    public codigo: number;
    public titulo: string;
    public autor: string;
    public disponivel: boolean;

    // Cria um novo livro com os dados informados
    constructor(codigo: number, titulo: string, autor: string, disponivel: boolean) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = disponivel;
    }
}


// 2. CLASSE BIBLIOTECA

class Biblioteca {
    // Guarda os livros da biblioteca. Privado então só dá pra mudar por dentro da classe.
    private acervo: Livro[] = []; 

    // Adiciona um novo livro.
    public adicionarLivro(livro: Livro): void {
        this.acervo.push(livro);
        console.log(`[Sucesso] Livro '${livro.titulo}' adicionado ao acervo.`);
    }

    // Registra a saída de um livro pelo seu código
    public registrarEmprestimo(codigo: number): void {
        // Busca o livro
        const livro = this.acervo.find(l => l.codigo === codigo);

        // Verifica se o livro existe no sistema
        if (!livro) {
            console.error(`[Erro] Livro com código ${codigo} não encontrado.`);
            return;
        }

        // Verifica se o livro já foi emprestado para outra pessoa
        if (!livro.disponivel) {
            console.error(`[Erro] O livro '${livro.titulo}' já está emprestado no momento.`);
            return;
        }

        //Atualiza o status para indisponível
        livro.disponivel = false;
        console.log(`[Sucesso] Empréstimo do livro '${livro.titulo}' realizado!`);
    }

    // Checa se o livro está na biblioteca para ser emprestado
    public consultarDisponibilidade(codigo: number): boolean {
        const livro = this.acervo.find(l => l.codigo === codigo);

        if (!livro) {
            console.error(`[Erro] Consulta falhou. Livro com código ${codigo} não existe.`);
            return false;
        }

        return livro.disponivel;
    }
}


// 3. FUNÇÕES DE TESTE

function cadastrarLivros(biblioteca: Biblioteca): void {
    // Criando livros para teste
    const livro1 = new Livro(1, "O Código Da Vinci", "Dan Brown", true);
    const livro2 = new Livro(2, "O Programador Pragmático", "Andrew Hunt", true);
    const livro3 = new Livro(3, "Fundação", "Isaac Asimov", true);

    // Alimentando o sistema
    biblioteca.adicionarLivro(livro1);
    biblioteca.adicionarLivro(livro2);
    biblioteca.adicionarLivro(livro3);
}

function registrarEmprestimoTeste(biblioteca: Biblioteca): void {
    console.log("\n-> Tentando emprestar o livro 2:");
    biblioteca.registrarEmprestimo(2); 

    console.log("\n-> Tentando emprestar o livro 2 NOVAMENTE (já está com outro usuário):");
    biblioteca.registrarEmprestimo(2); 

    console.log("\n-> Tentando emprestar um livro que não existe no sistema (código 99):");
    biblioteca.registrarEmprestimo(99); 
}

function consultarDisponibilidadeTeste(biblioteca: Biblioteca): void {
    console.log("\n-> Consultando livro 1 (Nunca foi emprestado):");
    const disp1 = biblioteca.consultarDisponibilidade(1);
    console.log(`O livro 1 está disponível? ${disp1 ? "Sim" : "Não"}`);

    console.log("\n-> Consultando livro 2 (Foi emprestado no teste anterior):");
    const disp2 = biblioteca.consultarDisponibilidade(2);
    console.log(`O livro 2 está disponível? ${disp2 ? "Sim" : "Não"}`);
}

// 4. EXECUTANDO A APLICAÇÃO

console.log("=== INICIANDO SISTEMA DA BIBLIOTECA ===");
const minhaBiblioteca = new Biblioteca();

console.log("\n=== CADASTRANDO ACERVO ===");
cadastrarLivros(minhaBiblioteca);

console.log("\n=== REGISTRANDO EMPRÉSTIMOS ===");
registrarEmprestimoTeste(minhaBiblioteca);

console.log("\n=== CONSULTANDO DISPONIBILIDADE ===");
consultarDisponibilidadeTeste(minhaBiblioteca);