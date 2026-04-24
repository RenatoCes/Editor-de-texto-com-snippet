const editor = document.getElementById('editor');
const lineNumbers = document.getElementById('lineNumbers');
const fileNameInput = document.getElementById('fileName');
let listaDeSnippets = []; // Armazenará os snippets carregados

// Sincroniza números das linhas
editor.addEventListener('input', () => {
    const lines = editor.value.split('\n').length;
    lineNumbers.innerHTML = Array.from({ length: lines }, (_, i) => i + 1).join('<br>');
});

// Botão Novo Arquivo
function novoArquivo() {
    window.open(window.location.href, '_blank');
}

// Botão Salvar (Download)
function salvarArquivo() {
    const text = editor.value;
    const name = fileNameInput.value || "arquivo.txt";
    const blob = new Blob([text], { type: "text/plain" });
    const anchor = document.createElement("a");
    anchor.download = name;
    anchor.href = window.URL.createObjectURL(blob);
    anchor.click();
}

// Botão Abrir
function abrirArquivo(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    fileNameInput.value = file.name;
    const reader = new FileReader();
    reader.onload = (e) => {
        editor.value = e.target.result;
        editor.dispatchEvent(new Event('input')); // Atualiza linhas
    };
    reader.readAsText(file);
}

// Lógica de Snippets
function carregarSnippets(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            listaDeSnippets = JSON.parse(e.target.result);
            alert("Snippets prontos para uso!");
        } catch (err) {
            alert("Erro: O arquivo de snippets deve ser um JSON válido.");
        }
    };
    reader.readAsText(file);
}

//Expandir Snippet
editor.addEventListener('keydown', function(e) {
    // Verifica se o usuário apertou Espaço (code: 'Space') enquanto segurava o Ctrl
    if (e.ctrlKey && e.code === 'Space') {
        e.preventDefault(); // Impede o espaço de ser inserido no texto

        const cursorPosition = editor.selectionStart;
        const textBeforeCursor = editor.value.substring(0, cursorPosition);
        
        // Pega a última palavra/sigla antes do cursor
        const words = textBeforeCursor.split(/[\s\n\t]/); // Divide por espaço, nova linha ou tab
        const lastWord = words[words.length - 1];

        // Busca o snippet correspondente
        const snippet = listaDeSnippets.find(s => s.prefix === lastWord);

        if (snippet) {
            const textAfterCursor = editor.value.substring(cursorPosition);
            const start = cursorPosition - lastWord.length;
            
            // Substitui o prefixo pelo conteúdo do snippet
            editor.value = editor.value.substring(0, start) + snippet.body + textAfterCursor;

            // Coloca o cursor logo após o snippet inserido
            const novoCursorPos = start + snippet.body.length;
            editor.selectionStart = editor.selectionEnd = novoCursorPos;
            
            // Atualiza a contagem de linhas
            editor.dispatchEvent(new Event('input'));
        }
    }
});
