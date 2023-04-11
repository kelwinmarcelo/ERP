
//   a função aqui é criar variáveis e armazenar nelas as referências para diferentes elementos do formulário HTML, usando o método document.querySelector() que busca o primeiro elemento no documento HTML que corresponde ao seletor CSS especificado como argumento.

// A primeira variável form armazena uma referência ao elemento form do HTML.
const form = document.querySelector('form');
const nomeProduto = document.querySelector('input[name="nome_produto"]');
// A segunda variável nomeProduto armazena uma referência ao elemento input que possui o atributo name com valor "nome_produto".
const tamanhoProduto = document.querySelector('select[name="tamanho_produto"]');
const categoriaProduto = document.querySelector('select[name="categoria_produto"]');
const fornecedorProduto = document.querySelector('select[name="fornecedor_produto"]');
const produtos = [];

nomeProduto.value = '';
tamanhoProduto.value = '';
categoriaProduto.value = '';
fornecedorProduto.value = '';

form.addEventListener('submit', function (event) {
    event.preventDefault();
    // O método trim() é usado para remover os espaços em branco que possam ter sido digitados antes ou depois do texto inserido no campo nomeProduto. Se o valor de um campo estiver vazio ou não tiver sido selecionado no caso dos campos select, o código irá exibir o alerta.
    if (nomeProduto.value.trim() === '' || tamanhoProduto.value === '' || categoriaProduto.value === '' || fornecedorProduto.value === '') {
        alert('Preencha todos os campos obrigatórios!');
        return;
    }
    // Abaixo é para criar um objeto produto que contém quatro propriedades (nome, tamanho, categoria e fornecedor). Cada uma dessas propriedades é definida com base nos valores que foram digitados anteriormente dos campos do formulário (nomeProduto, tamanhoProduto, categoriaProduto e fornecedorProduto) usando a propriedade value.
    const produto = {
        nome: nomeProduto.value,
        tamanho: tamanhoProduto.value,
        categoria: categoriaProduto.value,
        fornecedor: fornecedorProduto.value
    };
    // Agora é pra adicionar o objeto produto criado anteriormente no array produtos e exibir uma mensagem de sucesso ao usuário.
    produtos.push(produto);
    alert('Produto cadastrado!');

    // Limpar os campos do formulário
    nomeProduto.value = '';
    tamanhoProduto.value = '';
    categoriaProduto.value = '';
    fornecedorProduto.value = '';
});
console.log(produtos);