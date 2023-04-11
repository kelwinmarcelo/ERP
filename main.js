
//   a função aqui é criar variáveis e armazenar nelas as referências para diferentes elementos do formulário HTML, usando o método document.querySelector() que busca o primeiro elemento no documento HTML que corresponde ao seletor CSS especificado como argumento.

// A primeira variável form armazena uma referência ao elemento form do HTML.
const form = document.querySelector('form');
const nomeProduto = document.querySelector('input[name="nome_produto"]');
// A segunda variável nomeProduto armazena uma referência ao elemento input que possui o atributo name com valor "nome_produto".
const tamanhoProduto = document.querySelector('select[name="tamanho_produto"]');
const categoriaProduto = document.querySelector('select[name="categoria_produto"]');
const fornecedorProduto = document.querySelector('select[name="fornecedor_produto"]');
const produtos = [];
const botaoCadastrarProduto = document.querySelector('#botaoCadastrarProduto');
const botaoCadastrarFornecedor = document.querySelector('#botaoCadastrarFornecedor');


nomeProduto.value = '';
tamanhoProduto.value = '';
categoriaProduto.value = '';
fornecedorProduto.value = '';

botaoCadastrarProduto.addEventListener('submit', function (event) {
    event.preventDefault();
    // O método trim() é usado para remover os espaços em branco que possam ter sido digitados antes ou depois do texto inserido no campo nomeProduto. Se o valor de um campo estiver vazio ou não tiver sido selecionado no caso dos campos select, o código irá exibir o alerta.
    if (nomeProduto.value.trim() === '' || tamanhoProduto.value === '' || categoriaProduto.value === '' || fornecedorProduto.value === '') {
        alert('Preencha todos os campos obrigatórios!');
        return;
    }

    // Preencher a lista suspensa de fornecedores
    const fornecedorSelect = document.querySelector('#fornecedor_produto');
    fornecedorSelect.innerHTML = '';
    fornecedores.forEach(function (fornecedor) {
        const option = document.createElement('option');
        option.value = fornecedor.nome;
        option.text = fornecedor.nome;
        fornecedorSelect.appendChild(option);
    });

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

//CADASTRO DE FORNECEDOR
const nomeFornecedor = document.querySelector('input[name="nome_fornecedor"]');
const enderecoFornecedor = document.querySelector('input[name="enderecoFornecedor"]');
const telefoneFornecedor = document.querySelector('input[name="telefoneFornecedor"]');
//const fornecedores = [];
let fornecedores = [];
// A diferença entre let e const é que let é usado para declarar variáveis que podem ser alteradas mais tarde no código, enquanto const é usado para declarar constantes que não podem ser alteradas após a sua atribuição inicial.

botaoCadastrarFornecedor.addEventListener('submit', function (event) {
    event.preventDefault();
    if (nomeFornecedor.value.trim() === '' || enderecoFornecedor.value.trim() === '' || telefoneFornecedor.value.trim() === '') {
        alert('Preencha todos os campos obrigatórios!');
        return;
    }

    const fornecedor = {
        nome: nomeFornecedor.value,
        endereco: enderecoFornecedor.value,
        telefone: telefoneFornecedor.value,
    };
    fornecedores.push(fornecedor);
    alert('Fornecedor cadastrado!');
});


console.log(produtos);
console.log(fornecedores);
