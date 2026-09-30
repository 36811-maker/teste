
// ==========================================
// PINKCODE - AULAS, NÍVEIS E EXERCÍCIOS
// ==========================================

const niveis = [
    // ======================================
    // MÓDULO HTML
    // ======================================

    {
        id: 1,
        modulo: "HTML",
        titulo: "Introdução ao HTML",
        descricao: "Conheça a estrutura básica de uma página web.",
        conteudo: `
            <h3>O que é HTML?</h3>
            <p>HTML é uma linguagem de marcação utilizada para estruturar o conteúdo de páginas da internet. Com ela, podemos criar títulos, parágrafos, imagens, links e muito mais.</p>

            <h3>Estrutura básica</h3>
            <p>Todo documento HTML possui uma estrutura inicial que informa ao navegador como interpretar a página.</p>

            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="pt-BR"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Minha página&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Olá, mundo!&lt;/h1&gt;
    &lt;p&gt;Minha primeira página.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

            <h3>Principais elementos</h3>
            <ul>
                <li><code>&lt;html&gt;</code>: elemento raiz do documento.</li>
                <li><code>&lt;head&gt;</code>: contém informações da página.</li>
                <li><code>&lt;title&gt;</code>: define o título da aba.</li>
                <li><code>&lt;body&gt;</code>: contém o conteúdo visível.</li>
            </ul>
        `,
        ajuda: "Lembre-se: o conteúdo que aparece na página fica dentro da tag <body>. O título da aba fica dentro de <title>.",
        exercicios: [
            {
                pergunta: "Qual tag contém o conteúdo visível de uma página HTML?",
                resposta: ["body"],
                explicacao: "A tag <body> contém os elementos que aparecem na página."
            },
            {
                pergunta: "Escreva a declaração que indica que o documento utiliza HTML5.",
                resposta: ["<!doctype html>", "doctype html"],
                explicacao: "A declaração <!DOCTYPE html> informa ao navegador que o documento utiliza HTML5."
            }
        ]
    },

    {
        id: 2,
        modulo: "HTML",
        titulo: "Títulos e parágrafos",
        descricao: "Aprenda a organizar textos com tags HTML.",
        conteudo: `
            <h3>Organizando textos</h3>
            <p>O HTML oferece tags específicas para organizar textos, como títulos e parágrafos.</p>

            <h3>Títulos</h3>
            <p>As tags de título vão de <code>&lt;h1&gt;</code> até <code>&lt;h6&gt;</code>. O h1 representa o título principal, enquanto os demais representam níveis de subtítulo.</p>

            <pre><code>&lt;h1&gt;Título principal&lt;/h1&gt;
&lt;h2&gt;Subtítulo&lt;/h2&gt;
&lt;h3&gt;Outro subtítulo&lt;/h3&gt;</code></pre>

            <h3>Parágrafos</h3>
            <p>A tag <code>&lt;p&gt;</code> é utilizada para criar blocos de texto.</p>

            <pre><code>&lt;p&gt;Este é um parágrafo.&lt;/p&gt;</code></pre>

            <h3>Formatação de texto</h3>
            <ul>
                <li><code>&lt;strong&gt;</code>: destaca a importância do texto.</li>
                <li><code>&lt;em&gt;</code>: dá ênfase ao texto.</li>
                <li><code>&lt;br&gt;</code>: insere uma quebra de linha.</li>
            </ul>
        `,
        ajuda: "Para criar um título principal, utilize h1. Para um texto comum, utilize p.",
        exercicios: [
            {
                pergunta: "Qual tag é usada para criar o título principal de uma página?",
                resposta: ["<h1>", "h1"],
                explicacao: "A tag <h1> representa o título principal."
            },
            {
                pergunta: "Qual tag HTML é utilizada para criar um parágrafo?",
                resposta: ["<p>", "p"],
                explicacao: "A tag <p> cria um parágrafo."
            }
        ]
    },

    {
        id: 3,
        modulo: "HTML",
        titulo: "Links e imagens",
        descricao: "Adicione links e imagens às suas páginas.",
        conteudo: `
            <h3>Criando links</h3>
            <p>A tag <code>&lt;a&gt;</code> cria links para outras páginas, sites ou seções.</p>

            <pre><code>&lt;a href="https://example.com"&gt;
    Acessar site
&lt;/a&gt;</code></pre>

            <p>O atributo <code>href</code> indica o destino do link.</p>

            <h3>Adicionando imagens</h3>
            <p>A tag <code>&lt;img&gt;</code> permite inserir imagens na página.</p>

            <pre><code>&lt;img src="imagem.jpg" alt="Descrição da imagem"&gt;</code></pre>

            <ul>
                <li><code>src</code>: caminho da imagem.</li>
                <li><code>alt</code>: descrição alternativa da imagem.</li>
            </ul>

            <h3>Exemplo combinado</h3>
            <pre><code>&lt;a href="https://example.com"&gt;
    &lt;img src="foto.jpg" alt="Uma paisagem"&gt;
&lt;/a&gt;</code></pre>
        `,
        ajuda: "A tag a utiliza href para indicar o destino. A tag img utiliza src para indicar o caminho da imagem.",
        exercicios: [
            {
                pergunta: "Qual atributo define o destino de um link HTML?",
                resposta: ["href"],
                explicacao: "O atributo href define o endereço para o qual o link direciona."
            },
            {
                pergunta: "Qual tag é usada para inserir uma imagem em HTML?",
                resposta: ["<img>", "img"],
                explicacao: "A tag <img> insere uma imagem. O atributo src indica o arquivo."
            }
        ]
    },

    {
        id: 4,
        modulo: "HTML",
        titulo: "Listas e formulários",
        descricao: "Crie listas organizadas e formulários simples.",
        conteudo: `
            <h3>Listas</h3>
            <p>O HTML possui listas ordenadas e não ordenadas.</p>

            <pre><code>&lt;ul&gt;
    &lt;li&gt;Maçã&lt;/li&gt;
    &lt;li&gt;Banana&lt;/li&gt;
&lt;/ul&gt;

&lt;ol&gt;
    &lt;li&gt;Primeiro&lt;/li&gt;
    &lt;li&gt;Segundo&lt;/li&gt;
&lt;/ol&gt;</code></pre>

            <ul>
                <li><code>&lt;ul&gt;</code>: lista sem numeração.</li>
                <li><code>&lt;ol&gt;</code>: lista ordenada.</li>
                <li><code>&lt;li&gt;</code>: item da lista.</li>
            </ul>

            <h3>Formulários</h3>
            <p>Formulários permitem que o usuário envie informações.</p>

            <pre><code>&lt;form&gt;
    &lt;label for="nome"&gt;Nome:&lt;/label&gt;
    &lt;input id="nome" type="text"&gt;
    &lt;button type="submit"&gt;Enviar&lt;/button&gt;
&lt;/form&gt;</code></pre>

            <p>A tag <code>&lt;input&gt;</code> cria campos de entrada, enquanto <code>&lt;button&gt;</code> cria um botão.</p>
        `,
        ajuda: "Use ul para listas com marcadores, ol para listas numeradas e input para campos de formulário.",
        exercicios: [
            {
                pergunta: "Qual tag cria uma lista ordenada?",
                resposta: ["<ol>", "ol"],
                explicacao: "A tag <ol> cria uma lista ordenada."
            },
            {
                pergunta: "Qual tag é utilizada para criar um campo de entrada de dados?",
                resposta: ["<input>", "input"],
                explicacao: "A tag <input> permite que o usuário digite ou selecione informações."
            }
        ]
    },

    // ======================================
    // MÓDULO CSS
    // ======================================

    {
        id: 5,
        modulo: "CSS",
        titulo: "Introdução ao CSS",
        descricao: "Descubra como estilizar páginas HTML.",
        conteudo: `
            <h3>O que é CSS?</h3>
            <p>CSS é uma linguagem utilizada para definir a aparência de páginas web, incluindo cores, fontes, espaçamentos e posicionamento.</p>

            <h3>Como utilizar CSS?</h3>
            <p>O CSS pode ser escrito em um arquivo separado e conectado ao HTML através da tag link.</p>

            <pre><code>&lt;link rel="stylesheet" href="style.css"&gt;</code></pre>

            <h3>Estrutura de uma regra CSS</h3>
            <pre><code>p {
    color: pink;
    font-size: 18px;
}</code></pre>

            <ul>
                <li><code>p</code>: seletor.</li>
                <li><code>color</code>: propriedade.</li>
                <li><code>pink</code>: valor.</li>
            </ul>
        `,
        ajuda: "Uma regra CSS começa com um seletor, seguido de chaves que contêm propriedades e valores.",
        exercicios: [
            {
                pergunta: "Qual linguagem é utilizada para estilizar páginas HTML?",
                resposta: ["css"],
                explicacao: "CSS é responsável pela aparência visual das páginas."
            },
            {
                pergunta: "Qual propriedade CSS altera a cor do texto?",
                resposta: ["color"],
                explicacao: "A propriedade color define a cor do texto."
            }
        ]
    },

    {
        id: 6,
        modulo: "CSS",
        titulo: "Cores e fontes",
        descricao: "Personalize textos e cores do seu site.",
        conteudo: `
            <h3>Trabalhando com cores</h3>
            <p>O CSS permite definir cores usando nomes, códigos hexadecimais, RGB e outros formatos.</p>

            <pre><code>h1 {
    color: #e78bb5;
    background-color: #fff3f8;
}</code></pre>

            <h3>Fontes</h3>
            <p>A propriedade <code>font-family</code> define a família tipográfica.</p>

            <pre><code>p {
    font-family: Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
}</code></pre>

            <ul>
                <li><code>color</code>: cor do texto.</li>
                <li><code>background-color</code>: cor de fundo.</li>
                <li><code>font-size</code>: tamanho da fonte.</li>
                <li><code>font-weight</code>: espessura da fonte.</li>
            </ul>
        `,
        ajuda: "Lembre-se: color altera a cor do texto e background-color altera a cor de fundo.",
        exercicios: [
            {
                pergunta: "Qual propriedade altera a cor de fundo de um elemento?",
                resposta: ["background-color"],
                explicacao: "background-color define a cor de fundo."
            },
            {
                pergunta: "Qual propriedade define o tamanho da fonte?",
                resposta: ["font-size"],
                explicacao: "font-size controla o tamanho do texto."
            }
        ]
    },

    {
        id: 7,
        modulo: "CSS",
        titulo: "Box Model e espaçamentos",
        descricao: "Entenda margens, bordas e preenchimentos.",
        conteudo: `
            <h3>O que é o Box Model?</h3>
            <p>O Box Model descreve como o navegador organiza o espaço ocupado por cada elemento HTML.</p>

            <h3>Seus componentes</h3>
            <ul>
                <li><code>content</code>: conteúdo do elemento.</li>
                <li><code>padding</code>: espaço interno.</li>
                <li><code>border</code>: borda ao redor do elemento.</li>
                <li><code>margin</code>: espaço externo.</li>
            </ul>

            <pre><code>.card {
    width: 250px;
    padding: 20px;
    border: 2px solid pink;
    margin: 15px;
    box-sizing: border-box;
}</code></pre>

            <p>Utilizar <code>box-sizing: border-box</code> facilita o controle das dimensões dos elementos.</p>
        `,
        ajuda: "Padding é o espaço interno do elemento. Margin é o espaço externo, que separa um elemento de outros.",
        exercicios: [
            {
                pergunta: "Qual propriedade CSS define o espaço interno de um elemento?",
                resposta: ["padding"],
                explicacao: "padding controla o espaço entre o conteúdo e a borda."
            },
            {
                pergunta: "Qual propriedade cria espaço externo ao redor de um elemento?",
                resposta: ["margin"],
                explicacao: "margin cria espaço externo ao redor do elemento."
            }
        ]
    },

    {
        id: 8,
        modulo: "CSS",
        titulo: "Flexbox e responsividade",
        descricao: "Organize elementos e adapte seu site a diferentes telas.",
        conteudo: `
            <h3>O que é Flexbox?</h3>
            <p>Flexbox é um modelo de layout CSS que facilita o alinhamento e a distribuição dos elementos.</p>

            <pre><code>.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}</code></pre>

            <ul>
                <li><code>display: flex</code>: ativa o Flexbox.</li>
                <li><code>justify-content</code>: organiza os elementos no eixo principal.</li>
                <li><code>align-items</code>: alinha no eixo transversal.</li>
                <li><code>gap</code>: define o espaço entre os itens.</li>
            </ul>

            <h3>Responsividade</h3>
            <p>Media queries permitem alterar o estilo conforme o tamanho da tela.</p>

            <pre><code>@media (max-width: 600px) {
    .container {
        flex-direction: column;
    }
}</code></pre>
        `,
        ajuda: "Para ativar o Flexbox, utilize display: flex. Para adaptar o layout a telas menores, utilize @media.",
        exercicios: [
            {
                pergunta: "Qual valor da propriedade display ativa o Flexbox?",
                resposta: ["flex", "display: flex"],
                explicacao: "display: flex ativa o modelo Flexbox."
            },
            {
                pergunta: "Qual recurso CSS permite aplicar estilos de acordo com o tamanho da tela?",
                resposta: ["@media", "media query", "media"],
                explicacao: "Media queries permitem criar estilos específicos para diferentes tamanhos de tela."
            }
        ]
    },

    // ======================================
    // MÓDULO JAVASCRIPT
    // ======================================

    {
        id: 9,
        modulo: "JavaScript",
        titulo: "Introdução ao JavaScript",
        descricao: "Conheça a linguagem que adiciona interatividade aos sites.",
        conteudo: `
            <h3>O que é JavaScript?</h3>
            <p>JavaScript é uma linguagem de programação utilizada para criar interações, manipular elementos e desenvolver funcionalidades em páginas web.</p>

            <h3>Exibindo mensagens</h3>
            <pre><code>console.log("Olá, mundo!");
alert("Bem-vindo!");</code></pre>

            <h3>Variáveis</h3>
            <p>Variáveis armazenam informações que podem ser utilizadas durante a execução do programa.</p>

            <pre><code>let nome = "Emilly";
const idade = 16;

console.log(nome);</code></pre>

            <ul>
                <li><code>let</code>: declara uma variável que pode receber outro valor.</li>
                <li><code>const</code>: declara uma constante que não pode ser reatribuída.</li>
                <li><code>console.log()</code>: exibe informações no console.</li>
            </ul>
        `,
        ajuda: "Utilize let para variáveis que podem mudar e const para valores que não serão reatribuídos.",
        exercicios: [
            {
                pergunta: "Qual linguagem é utilizada para adicionar interatividade às páginas web?",
                resposta: ["javascript"],
                explicacao: "JavaScript permite adicionar interatividade e lógica às páginas web."
            },
            {
                pergunta: "Qual palavra-chave declara uma variável que pode receber outro valor?",
                resposta: ["let"],
                explicacao: "let declara uma variável que pode ser reatribuída."
            }
        ]
    },

    {
        id: 10,
        modulo: "JavaScript",
        titulo: "Condicionais e operadores",
        descricao: "Faça seu código tomar decisões.",
        conteudo: `
            <h3>Estruturas condicionais</h3>
            <p>As condicionais permitem executar diferentes trechos de código conforme uma condição.</p>

            <pre><code>let idade = 18;

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}</code></pre>

            <h3>Operadores</h3>
            <ul>
                <li><code>===</code>: igualdade estrita.</li>
                <li><code>!==</code>: diferença estrita.</li>
                <li><code>&gt;</code>: maior que.</li>
                <li><code>&lt;</code>: menor que.</li>
                <li><code>&&</code>: operador lógico E.</li>
                <li><code>||</code>: operador lógico OU.</li>
            </ul>

            <h3>Else if</h3>
            <pre><code>let nota = 8;

if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 6) {
    console.log("Aprovado");
} else {
    console.log("Precisa estudar");
}</code></pre>
        `,
        ajuda: "A estrutura if verifica uma condição. O else é executado quando a condição não é verdadeira.",
        exercicios: [
            {
                pergunta: "Qual palavra-chave inicia uma estrutura condicional em JavaScript?",
                resposta: ["if"],
                explicacao: "A palavra-chave if inicia uma condição."
            },
            {
                pergunta: "Qual operador representa igualdade estrita em JavaScript?",
                resposta: ["==="],
                explicacao: "O operador === compara valor e tipo."
            }
        ]
    },

    {
        id: 11,
        modulo: "JavaScript",
        titulo: "Funções e eventos",
        descricao: "Crie funções e responda às ações dos usuários.",
        conteudo: `
            <h3>O que são funções?</h3>
            <p>Funções são blocos de código que podem ser reutilizados para executar uma tarefa.</p>

            <pre><code>function saudacao() {
    console.log("Olá!");
}

saudacao();</code></pre>

            <h3>Parâmetros e retorno</h3>
            <pre><code>function somar(a, b) {
    return a + b;
}

let resultado = somar(5, 3);</code></pre>

            <h3>Eventos</h3>
            <p>Eventos permitem que o JavaScript reaja a ações, como cliques.</p>

            <pre><code>botao.addEventListener("click", function() {
    alert("Você clicou!");
});</code></pre>
        `,
        ajuda: "Uma função é declarada com function. O addEventListener permite executar código quando um evento acontece.",
        exercicios: [
            {
                pergunta: "Qual palavra-chave pode ser utilizada para declarar uma função?",
                resposta: ["function"],
                explicacao: "A palavra-chave function permite declarar uma função."
            },
            {
                pergunta: "Qual método permite escutar eventos de elementos HTML?",
                resposta: ["addeventlistener", "addEventListener"],
                explicacao: "addEventListener registra uma função para ser executada quando um evento ocorre."
            }
        ]
    },

    {
        id: 12,
        modulo: "JavaScript",
        titulo: "DOM e interatividade",
        descricao: "Manipule elementos HTML utilizando JavaScript.",
        conteudo: `
            <h3>O que é DOM?</h3>
            <p>DOM significa Document Object Model. Ele representa a página HTML como uma estrutura que o JavaScript pode acessar e modificar.</p>

            <h3>Selecionando elementos</h3>
            <pre><code>const titulo = document.querySelector("h1");
const botao = document.getElementById("meuBotao");</code></pre>

            <h3>Alterando conteúdo</h3>
            <pre><code>titulo.textContent = "Novo título";</code></pre>

            <h3>Alterando estilos</h3>
            <pre><code>titulo.style.color = "pink";</code></pre>

            <h3>Exemplo interativo</h3>
            <pre><code>const botao = document.querySelector("button");

botao.addEventListener("click", () => {
    document.querySelector("h1").textContent = "Olá!";
});</code></pre>
        `,
        ajuda: "Use querySelector para selecionar elementos pelo seletor CSS e textContent para alterar o texto.",
        exercicios: [
            {
                pergunta: "Qual objeto JavaScript permite acessar e manipular o documento HTML?",
                resposta: ["dom", "document"],
                explicacao: "O DOM representa a estrutura do documento e é acessado pelo objeto document."
            },
            {
                pergunta: "Qual propriedade altera o texto de um elemento HTML?",
                resposta: ["textcontent", "textContent"],
                explicacao: "textContent permite ler ou alterar o texto de um elemento."
            }
        ]
    }
];