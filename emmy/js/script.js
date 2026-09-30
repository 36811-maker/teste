
// ==========================================
// PINKCODE - SCRIPT PRINCIPAL
// ==========================================

// ==========================================
// CONFIGURAÇÕES E SALVAMENTO
// ==========================================

const CHAVE_PROGRESSO = "pinkcode_progresso";
const CHAVE_ANOTACOES = "pinkcode_anotacoes";
const CHAVE_TEMA = "pinkcode_tema";

let nivelAtual = 1;

let progresso = JSON.parse(
    localStorage.getItem(CHAVE_PROGRESSO) || "{}"
);

let anotacoes = JSON.parse(
    localStorage.getItem(CHAVE_ANOTACOES) || "{}"
);

// Garante que os objetos estejam preparados
if (typeof progresso !== "object" || progresso === null) {
    progresso = {};
}

if (typeof anotacoes !== "object" || anotacoes === null) {
    anotacoes = {};
}

// ==========================================
// ELEMENTOS HTML
// ==========================================

const homeView = document.getElementById("homeView");
const lessonView = document.getElementById("lessonView");
const progressView = document.getElementById("progressView");

const moduleGrid = document.getElementById("moduleGrid");
const levelList = document.getElementById("levelList");

const lessonTitle = document.getElementById("lessonTitle");
const lessonDescription = document.getElementById("lessonDescription");
const lessonContent = document.getElementById("lessonContent");

const exerciseArea = document.getElementById("exerciseArea");
const notes = document.getElementById("notes");

const progressOverview = document.getElementById("progressOverview");

// ==========================================
// FUNÇÕES DE SALVAMENTO
// ==========================================

function salvarProgresso() {
    localStorage.setItem(
        CHAVE_PROGRESSO,
        JSON.stringify(progresso)
    );
}

function salvarAnotacoes() {
    localStorage.setItem(
        CHAVE_ANOTACOES,
        JSON.stringify(anotacoes)
    );
}

function nivelConcluido(id) {
    return progresso[id]?.concluido === true;
}

function exercicioConcluido(id, indice) {
    return progresso[id]?.exercicios?.[indice] === true;
}

// ==========================================
// ORGANIZAÇÃO DOS MÓDULOS
// ==========================================

function obterModulos() {
    const modulos = {};

    niveis.forEach(nivel => {
        if (!modulos[nivel.modulo]) {
            modulos[nivel.modulo] = [];
        }

        modulos[nivel.modulo].push(nivel);
    });

    return modulos;
}

// ==========================================
// DESBLOQUEIO DOS NÍVEIS
// ==========================================

function nivelDesbloqueado(id) {
    if (id === 1) {
        return true;
    }

    return nivelConcluido(id - 1);
}

// ==========================================
// PÁGINA INICIAL
// ==========================================

function mostrarModulos() {
    if (!moduleGrid) return;

    const modulos = obterModulos();
    moduleGrid.innerHTML = "";

    Object.entries(modulos).forEach(([nome, lista]) => {
        const concluidos = lista.filter(nivel =>
            nivelConcluido(nivel.id)
        ).length;

        const total = lista.length;
        const percentual = Math.round((concluidos / total) * 100);

        const primeiroDisponivel = lista.find(nivel =>
            nivelDesbloqueado(nivel.id)
        );

        const primeiroNivel = primeiroDisponivel || lista[0];

        const card = document.createElement("div");
        card.className = "module-card";

        card.innerHTML = `
            <div class="module-icon">
                ${nome === "HTML" ? "🌷" : nome === "CSS" ? "🎀" : "💻"}
            </div>

            <h3>${nome}</h3>

            <p>
                ${total} níveis de aprendizado
            </p>

            <div class="progress-bar">
                <div class="progress-fill" style="width: ${percentual}%"></div>
            </div>

            <span class="progress-text">
                ${concluidos} de ${total} níveis concluídos
            </span>

            <button class="btn-primary" type="button">
                ${concluidos === total ? "Revisar módulo" : "Acessar aulas"}
            </button>
        `;

        card.querySelector("button").addEventListener("click", () => {
            abrirNivel(primeiroNivel.id);
        });

        moduleGrid.appendChild(card);
    });

    atualizarResumo();
}

// ==========================================
// RESUMO DO PROGRESSO
// ==========================================

function atualizarResumo() {
    const total = niveis.length;

    const concluidos = niveis.filter(nivel =>
        nivelConcluido(nivel.id)
    ).length;

    const percentual = Math.round((concluidos / total) * 100);

    const barra = document.querySelector("#overallProgress .progress-fill");
    const texto = document.querySelector("#overallProgress .progress-text");

    if (barra) {
        barra.style.width = `${percentual}%`;
    }

    if (texto) {
        texto.textContent = `${concluidos} de ${total} níveis concluídos (${percentual}%)`;
    }

    if (progressOverview) {
        progressOverview.textContent =
            `${concluidos} de ${total} níveis concluídos`;
    }
}

// ==========================================
// NAVEGAÇÃO ENTRE PÁGINAS
// ==========================================

function esconderPaginas() {
    if (homeView) homeView.style.display = "none";
    if (lessonView) lessonView.style.display = "none";
    if (progressView) progressView.style.display = "none";
}

function showHome() {
    esconderPaginas();

    if (homeView) {
        homeView.style.display = "block";
    }

    mostrarModulos();
}

function showProgress() {
    esconderPaginas();

    if (progressView) {
        progressView.style.display = "block";
    }

    mostrarProgresso();
}

function showLesson() {
    esconderPaginas();

    if (lessonView) {
        lessonView.style.display = "block";
    }
}

// ==========================================
// LISTA DE NÍVEIS
// ==========================================

function mostrarListaNiveis() {
    if (!levelList) return;

    levelList.innerHTML = "";

    const nivel = niveis.find(item => item.id === nivelAtual);

    if (!nivel) return;

    const modulos = obterModulos();
    const lista = modulos[nivel.modulo] || [];

    lista.forEach(item => {
        const desbloqueado = nivelDesbloqueado(item.id);
        const concluido = nivelConcluido(item.id);

        const botao = document.createElement("button");

        botao.type = "button";
        botao.className =
            item.id === nivelAtual ? "active" : "";

        if (!desbloqueado) {
            botao.disabled = true;
        }

        botao.innerHTML = `
            <span>
                ${concluido ? "✓" : desbloqueado ? "○" : "🔒"}
                Nível ${item.id}: ${item.titulo}
            </span>
        `;

        botao.addEventListener("click", () => {
            abrirNivel(item.id);
        });

        levelList.appendChild(botao);
    });
}

// ==========================================
// ABRIR UMA AULA
// ==========================================

function abrirNivel(id) {
    const nivel = niveis.find(item => item.id === id);

    if (!nivel) return;

    if (!nivelDesbloqueado(id)) {
        alert("Conclua o nível anterior para desbloquear este!");
        return;
    }

    nivelAtual = id;

    showLesson();
    mostrarListaNiveis();
    mostrarConteudoNivel(nivel);
    mostrarExercicios(nivel);
    carregarAnotacoes(id);
    atualizarBotoesNavegacao();
}

// ==========================================
// CONTEÚDO DA AULA
// ==========================================

function mostrarConteudoNivel(nivel) {
    if (lessonTitle) {
        lessonTitle.textContent =
            `Nível ${nivel.id} - ${nivel.titulo}`;
    }

    if (lessonDescription) {
        lessonDescription.textContent =
            `${nivel.modulo} | ${nivel.descricao}`;
    }

    if (lessonContent) {
        lessonContent.innerHTML = nivel.conteudo;
    }
}

// ==========================================
// EXERCÍCIOS
// ==========================================


function mostrarExercicios(nivel) {
    if (!exerciseArea) return;

    exerciseArea.innerHTML = `
        <h2>📝 Hora de praticar!</h2>
        <p>Complete os dois exercícios para liberar o próximo nível.</p>

        <div class="exercise-card demo-exercise">
            <h3>💡 Exercício de demonstração</h3>
            <p>Qual linguagem é utilizada para estruturar o conteúdo de uma página web?</p>

            <button class="btn-secondary" id="mostrarRespostaDemo" type="button">
                Ver resposta do exemplo
            </button>

            <div id="respostaDemo" class="exercise-feedback success" hidden>
                <strong>Resposta: HTML</strong>
                <p>O HTML é utilizado para estruturar o conteúdo de páginas web.</p>
            </div>
        </div>

        <div id="listaExercicios"></div>
        <div id="resultadoNivel"></div>
    `;

    const botaoDemo = document.getElementById("mostrarRespostaDemo");
    const respostaDemo = document.getElementById("respostaDemo");

    botaoDemo.addEventListener("click", () => {
        respostaDemo.hidden = !respostaDemo.hidden;

        botaoDemo.textContent = respostaDemo.hidden
            ? "Ver resposta do exemplo"
            : "Ocultar resposta";
    });

    const lista = document.getElementById("listaExercicios");

    nivel.exercicios.forEach((exercicio, indice) => {
        const concluido = exercicioConcluido(nivel.id, indice);

        const card = document.createElement("div");
        card.className = "exercise-card";

        card.innerHTML = `
            <h3>Exercício ${indice + 1}</h3>
            <p>${exercicio.pergunta}</p>

            <textarea
                id="resposta-${nivel.id}-${indice}"
                placeholder="Digite sua resposta aqui..."
                rows="3"
                ${concluido ? "disabled" : ""}
            ></textarea>

            <button
                class="btn-primary"
                id="verificar-${nivel.id}-${indice}"
                type="button"
                ${concluido ? "disabled" : ""}
            >
                ${concluido ? "✓ Concluído" : "Verificar resposta"}
            </button>

            <div
                class="exercise-feedback ${concluido ? "success" : ""}"
                id="feedback-${nivel.id}-${indice}"
                aria-live="polite"
            >
                ${concluido ? "Resposta correta! Exercício concluído." : ""}
            </div>
        `;

        lista.appendChild(card);

        const botao = card.querySelector("button");

        botao.addEventListener("click", () => {
            verificarResposta(nivel, indice);
        });
    });

    mostrarResultadoNivel(nivel);
}

// ==========================================
// VERIFICAR RESPOSTAS
// ==========================================


function verificarResposta(nivel, indice) {
    const exercicio = nivel.exercicios[indice];

    const campo = document.getElementById(
        `resposta-${nivel.id}-${indice}`
    );

    const feedback = document.getElementById(
        `feedback-${nivel.id}-${indice}`
    );

    const botao = document.getElementById(
        `verificar-${nivel.id}-${indice}`
    );

    if (!campo || !feedback || !botao) return;

    const respostaUsuario = normalizarResposta(campo.value);

    if (!respostaUsuario) {
        feedback.textContent = "Digite uma resposta antes de verificar.";
        feedback.className = "exercise-feedback error";
        return;
    }

    const respostasAceitas = exercicio.resposta.map(resposta =>
        normalizarResposta(resposta)
    );

    const acertou = respostasAceitas.some(resposta =>
        respostaUsuario === resposta
    );

    if (acertou) {
        if (!progresso[nivel.id]) {
            progresso[nivel.id] = {
                exercicios: {},
                concluido: false
            };
        }

        progresso[nivel.id].exercicios[indice] = true;

        feedback.innerHTML = `
            <strong>🎉 Resposta correta!</strong>
            <p>${escaparHTML(exercicio.explicacao)}</p>
        `;

        feedback.className = "exercise-feedback success";

        campo.disabled = true;
        botao.disabled = true;
        botao.textContent = "✓ Concluído";

        verificarConclusaoNivel(nivel);
        salvarProgresso();
        atualizarResumo();
        mostrarResultadoNivel(nivel);
        atualizarBotoesNavegacao();

    } else {
        const respostaCorreta = exercicio.resposta[0];

        feedback.innerHTML = `
            <strong>Resposta incorreta.</strong>
            <p>Resposta correta:
                <code>${escaparHTML(respostaCorreta)}</code>
            </p>
            <p>${escaparHTML(exercicio.explicacao)}</p>
            <p>Tente novamente para concluir o exercício.</p>
        `;

        feedback.className = "exercise-feedback error";
    }
}

// ==========================================
// CONCLUSÃO DO NÍVEL
// ==========================================

function verificarConclusaoNivel(nivel) {
    const exercicios = progresso[nivel.id]?.exercicios || {};

    const todosConcluidos = nivel.exercicios.every((_, indice) =>
        exercicios[indice] === true
    );

    if (todosConcluidos) {
        progresso[nivel.id].concluido = true;
        salvarProgresso();
    }
}

function mostrarResultadoNivel(nivel) {
    const resultado = document.getElementById("resultadoNivel");

    if (!resultado) return;

    if (nivelConcluido(nivel.id)) {
        resultado.innerHTML = `
            <div class="exercise-feedback success">
                🎉 Parabéns! Você concluiu este nível.
                ${nivel.id < niveis.length
                    ? "O próximo nível foi desbloqueado!"
                    : "Você concluiu todos os níveis do PinkCode!"}
            </div>
        `;
    } else {
        const feitos = nivel.exercicios.filter((_, indice) =>
            exercicioConcluido(nivel.id, indice)
        ).length;

        resultado.innerHTML = `
            <p class="progress-text">
                ${feitos} de ${nivel.exercicios.length} exercícios concluídos
            </p>
        `;
    }
}

// ==========================================
// DICAS DE AJUDA
// ==========================================

function mostrarAjuda() {
    const nivel = niveis.find(item => item.id === nivelAtual);

    if (!nivel) return;

    let caixa = document.getElementById("dicaNivel");

    if (!caixa) {
        caixa = document.createElement("div");
        caixa.id = "dicaNivel";
        caixa.className = "help-box";

        const destino = exerciseArea || lessonView;
        destino.appendChild(caixa);
    }

    caixa.innerHTML = `
        <h3>💡 Dica</h3>
        <p>${nivel.ajuda}</p>
    `;
}

// ==========================================
// ANOTAÇÕES
// ==========================================

function carregarAnotacoes(id) {
    const campo = document.getElementById("notes");

    if (!campo) return;

    campo.value = anotacoes[id] || "";
}

function salvarNotaAtual() {
    const campo = document.getElementById("notes");

    if (!campo) return;

    anotacoes[nivelAtual] = campo.value;
    salvarAnotacoes();
}

// ==========================================
// NAVEGAÇÃO ENTRE NÍVEIS
// ==========================================

function atualizarBotoesNavegacao() {
    const anterior = document.getElementById("prevLevel");
    const proximo = document.getElementById("nextLevel");

    if (anterior) {
        anterior.disabled = nivelAtual === 1;
    }

    if (proximo) {
        proximo.disabled =
            nivelAtual === niveis.length ||
            !nivelConcluido(nivelAtual);
    }
}

function nivelAnterior() {
    if (nivelAtual <= 1) return;

    abrirNivel(nivelAtual - 1);
}

function proximoNivel() {
    if (nivelAtual >= niveis.length) return;

    if (!nivelConcluido(nivelAtual)) {
        alert("Conclua os exercícios para avançar!");
        return;
    }

    abrirNivel(nivelAtual + 1);
}

// ==========================================
// PÁGINA DE PROGRESSO
// ==========================================

function mostrarProgresso() {
    const container =
        document.getElementById("progressList") ||
        document.querySelector(".progress-list");

    if (!container) {
        atualizarResumo();
        return;
    }

    container.innerHTML = "";

    niveis.forEach(nivel => {
        const concluido = nivelConcluido(nivel.id);
        const desbloqueado = nivelDesbloqueado(nivel.id);

        const item = document.createElement("div");
        item.className =
            `progress-item ${concluido ? "completed" : ""}`;

        item.innerHTML = `
            <div>
                <h3>Nível ${nivel.id}: ${nivel.titulo}</h3>
                <p>${nivel.modulo}</p>
            </div>

            <span class="status">
                ${concluido
                    ? "✓ Concluído"
                    : desbloqueado
                        ? "Em andamento"
                        : "🔒 Bloqueado"}
            </span>
        `;

        if (desbloqueado) {
            item.style.cursor = "pointer";
            item.addEventListener("click", () => {
                abrirNivel(nivel.id);
            });
        }

        container.appendChild(item);
    });

    atualizarResumo();
}

// ==========================================
// MODO ESCURO
// ==========================================

function toggleTheme() {
    document.body.classList.toggle("dark");

    const escuro = document.body.classList.contains("dark");

    localStorage.setItem(CHAVE_TEMA, escuro ? "dark" : "light");

    const botao = document.getElementById("modo");

    if (botao) {
        botao.textContent = escuro ? "☀️" : "🌙";
        botao.setAttribute(
            "aria-label",
            escuro ? "Ativar modo claro" : "Ativar modo escuro"
        );
    }
}

function carregarTema() {
    const tema = localStorage.getItem(CHAVE_TEMA);
    const escuro = tema === "dark";

    document.body.classList.toggle("dark", escuro);

    const botao = document.getElementById("modo");

    if (botao) {
        botao.textContent = escuro ? "☀️" : "🌙";
    }
}

// ==========================================
// EVENTOS DOS BOTÕES
// ==========================================

function configurarEventos() {
    const anterior = document.getElementById("prevLevel");
    const proximo = document.getElementById("nextLevel");
    const campoNotas = document.getElementById("notes");
    const botaoAjuda = document.getElementById("helpButton");

    if (anterior) {
        anterior.addEventListener("click", nivelAnterior);
    }

    if (proximo) {
        proximo.addEventListener("click", proximoNivel);
    }

    if (campoNotas) {
        campoNotas.addEventListener("input", salvarNotaAtual);
    }

    if (botaoAjuda) {
        botaoAjuda.addEventListener("click", mostrarAjuda);
    }
}

// ==========================================
// INICIALIZAÇÃO
// ==========================================

function iniciarPinkCode() {
    carregarTema();
    configurarEventos();
    mostrarModulos();
    atualizarResumo();
}

document.addEventListener("DOMContentLoaded", iniciarPinkCode);