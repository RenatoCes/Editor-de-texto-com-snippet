# Editor-de-texto-com-snippet
[Link do editor de texto com snippt](https://renatoces.github.io/Editor-de-texto-com-snippet/).

Um editor de texto e código leve e funcional, desenvolvido puramente com HTML, CSS e JavaScript. Este projeto foi desenhado para ser rápido, organizado e expansível através de snippets personalizados.

## 🚀 Funcionalidades

- **Edição de Código:** Área de texto com contagem automática de linhas.
- **Gestão de Ficheiros:**
  - **Novo:** Abre uma nova instância do editor numa nova aba.
  - **Abrir:** Carrega ficheiros locais diretamente para o editor.
  - **Salvar:** Faz o download do conteúdo editado com o nome e extensão definidos no input superior.
- **Sistema de Snippets:** Atalhos de teclado para inserção rápida de blocos de código.
- **Layout Responsivo:** CSS focado na organização e redimensionamento automático dos elementos da interface.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica.
- **CSS3:** Layout flexível (Flexbox) e estilização Dark Mode.
- **JavaScript (Vanilla):** Lógica de manipulação de ficheiros, DOM e sistema de eventos de teclado.

## 🧩 Como usar os Snippets

A funcionalidade de snippets permite que escrevas atalhos (prefixos) e os transformes em blocos de código completos instantaneamente.

### 1. Estrutura do Ficheiro de Snippets
O editor aceita um ficheiro no formato `.json`. A estrutura deve ser uma lista de objetos, onde cada objeto tem um `prefix` (o gatilho) e um `body` (o código que será inserido).

**Exemplo de ficheiro `meus-snippets.json`:**
```json
[
  {
    "prefix": "html5",
    "body": "<!DOCTYPE html>\n<html>\n<head>\n <title></title>\n</head>\n<body>\n\n</body>\n</html>"
  },
  {
    "prefix": "clg",
    "body": "console.log();"
  },
  {
    "prefix": "fun",
    "body": "function nomeDaFuncao() {\n    // código aqui\n}"
  }
]
