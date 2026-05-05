Exercício 1 - Sistema de Gerenciamento de Biblioteca

Descrição:
Resolução do estudo de caso para o gerenciamento de uma biblioteca. O código foi desenvolvido em TypeScript, aplicando conceitos de Programação Orientada a Objetos (POO), como classes, construtores e o uso de encapsulamento (public e private).

Como executar o programa

Pelo terminal, navegue até a pasta onde o arquivo index.ts está salvo e execute o comando:

ts-node index.ts

Testes Realizados

Para demonstrar que as regras de negócio e os tratamentos de erro estão funcionando, criei algumas funções de teste no final do código. Ao executar o programa, ele realiza automaticamente as seguintes ações e imprime os resultados no terminal:

Teste de Cadastro: Instancia 3 livros diferentes e os adiciona ao acervo da biblioteca usando o método adicionarLivro.

Teste de Empréstimo com Sucesso: Chama o método registrarEmprestimo para o livro de código 2, o que altera seu status para indisponível.

Teste de Erro (Livro Indisponível): Tenta emprestar o livro de código 2 novamente. O sistema bloqueia a ação e exibe uma mensagem de erro informando que o livro já está emprestado.

Teste de Erro (Livro Inexistente): Tenta emprestar um livro usando um código fictício (99). O sistema identifica que ele não está no acervo e exibe um erro.

Teste de Consulta de Disponibilidade: Utiliza o método consultarDisponibilidade para checar o status do livro 1 (que deve retornar true/disponível) e do livro 2 (que deve retornar false/indisponível após o teste de empréstimo).
