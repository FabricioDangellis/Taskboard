# TaskBoard

Este projeto se trata de um sistema simples para o gerenciamento de tarefas, desenvolvido utilizando **React** e **TypeScript**. 

---

## Sumário

<!--ts-->
  * [Sobre o projeto](#sobre-o-projeto)
  * [Ferramenta Utilizadas](#ferramenta-utilizadas)
  * [Como Utilizar](#como-utilizar)
  * [Funcionalidades](#funcionalidades)
  * [Autor](#autor)

<!--te-->

---

## Sobre o Projeto

O **TaskBoard** é um projeto de gerenciamento de tarefas desenvolvido com **React** e **TypeScript**, que tem como objetivo oferecer uma interface simples, funcional e agradável para organização pessoal. 

O sistema permite criar, editar e excluir tarefas de forma intuitiva, contando com o uso de modais personalizados e mensagens de feedback para garantir melhor experiência ao usuário. Além disso, o projeto foi estruturado com boas práticas de componentização e persistência de dados no LocalStorage, garantindo que as informações sejam salvas mesmo após o fechamento do navegador.

---

## Ferramenta Utilizadas

1. [**React**](https://react.dev):

    - Biblioteca JavaScript de código aberto, desenvolvida pelo Facebook, que serve para construir interfaces de usuário (UIs), focando em componentes reutilizáveis para criar aplicações web e móveis de forma mais eficiente e interativa.

2. [**TypeScript**](https://www-typescriptlang-org.translate.goog/?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc):

    - TypeScript é uma linguagem de programação fortemente tipada que se baseia em JavaScript, oferecendo melhores ferramentas em qualquer escala.

3. [**React Router**](https://reactrouter.com):

    - O React Router é um roteador multiestratégia para React que preenche a lacuna entre o React 18 e o React 19. Você pode usá-lo ao máximo como um framework React ou tão minimamente quanto desejar.

4. [**Lucide React**](https://lucide.dev):

    - Coleção de componentes React para exibir ícones vetoriais de código aberto e personalizáveis.

5. [**Context API**](https://pt-br.react.dev/learn/passing-data-deeply-with-context):

    - Recurso nativo do React que permite a troca de informações globais entre componentes sem a necessidade de passar propriedades manualmente por múltiplos níveis de uma aplicação (prop drilling), criando um estado global acessível a componentes que "escutam" o contexto.

6. [**TailWind CSS**](https://tailwindcss.com):

    - Um framework CSS utilitário-primeiro embalado com classes como flexão‚, pt-4‚, texto-centro e, e girar-90 que pode ser composto para construir qualquer desenho, diretamente na sua marcação.

---

## Como Utilizar

Nesta seção, você encontrará todas as informações necessárias para começar a utilizar este projeto.

### Pré-requisitos 

  - [NodeJS](https://nodejs.org/pt)
  - [npm](https://www.npmjs.com)

### Execução

1. #### Sistema online ####

    - Acesse: [https://mynewtaskboard.vercel.app](https://mynewtaskboard.vercel.app)

2. #### Clonar o Repositório ####

    1. Clone o repositório ou baixe o arquivo ZIP:

        ```bash
        git clone https://github.com/FabricioDangellis/Taskboard.git
        ```
    2. Acesse a pasta do repositóorio:

        ```bash
        cd taskboard
        ```
    3. Faça a instalação do projeto:

        ```bash
        npm install
        ```
    4. Inicialize o sistema:

        ```bash
        npm run dev
        ```
    5. Acesse seu localhost

        - No terminal irá mostrar o local de acesso ao projeto em execução

        Ex: 
        ```bash
          VITE v7.1.7  ready in 2691 ms

          ➜  Local:   http://localhost:5173/
          ➜  Network: use --host to expose
          ➜  press h + enter to show help
        ```

---

## Funcionalidades

- **Criar Task:** cria uma nova task e a adiciona na lista.

- **Editar Task:** edita uma task a partir de seu id. É possivel alterar todos os campos de uma task exeto o id e a data de criação.

- **Excluir Task:** exclui uma task da lista. Para excluir uma task o usuário tem que confirmar essa exclusão no modal que aparecerá na tela.

- **Feedbacks:** Ações que retornam ao usuário uma mensagem quando o mesmo faz algo no sistema.

---

## Autor

<div style="display: flex;
    gap: 10px;
    align-items: center;
    margin: 15px 0px">
  <img src="https://github.com/fabriciodangellis.png" width="60" style="border-radius: 50%;" alt="Foto de perfil do GitHub">
  <a href="https://github.com/FabricioDangellis">Fabrício D'angellis</a>
</div>


---

<div align="center">
  <a href="#taskboard">Voltar ao topo</a>
</div>