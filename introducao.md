# Introdução

Primeiramente é necessário entender como funciona a OmniStack. Basicamente ela é uma stack baseada na linguagem "JavaScript", e procura unir o desenvolvimento back-end, front-end e mobile entorno dessa mesma linguagem.
As ferramentas utilizadas por essa stack são:

- [NodeJS](https://nodejs.org/) - Back-end
- [React](https://reactjs.org/) - Front-end
- [React Native](https://facebook.github.io/react-native/) - Mobile

É interessante instalar o Node.js utilizando um gerenciador de pacotes (como o chocolatey), sendo fácil de atualizar, instalar e desinstalar. É possível achar todas as intruções de instalação nos sites.
Após instalar o Node.js, é interessante instalar o Yarn, que é um gerenciador de pacotes para os projetos.

- [Yarn](https://yarnpkg.com/) - Gerenciador de pacotes

Para desenvolver nosso código, será utilizado o Visual Studio Code, que funciona como uma IDE, mas de forma performática.

- [Visual Studio Code](https://code.visualstudio.com/) - Edição do código

Algumas extensões interessantes para utilizar dentro do VSCode são:

- Dracula - Tema para o Editor
- Material Icon Theme - Icones para cada tipo de arquivo
- Extensões da Rocketseat - Snippets para desenvolvimento (ReactJS e React Native)

Agora, faremos a configuração da fonte para o VSCode, no caso, utilizaremos a fonte Fira Code:

- [Fira Code](https://github.com/tonsky/FiraCode) - Fonte

Faça o download da fonte e instale a fonte no seu sistema operacional. Abra as preferências do VSCode (CTRL + SHIFT + P) e procure o item "Open Settings (JSON)" e adicione as seguintes linhas:

```
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true,
```

Para mais algumas informações:

- [Blog Rocketseat](https://blog.rocketseat.com.br/)
- [Rocketseat Docs](https://docs.rocketseat.dev/)

## JSON Viewer (Extension)

O JSON Viewer é uma extensão que formata resposta no formato de JSON (exibindo de forma ordenada), possibilitando uma compreensão mais rápida da resposta para o desenvolvedor.

## Insomnia

- [Insomnia](https://insomnia.rest/)

É uma aplicação para testar as rotas das API's, pois ela possui suporte para o vários métodos do HTTP (GET, POST, PUT, DELETE).

## MVC

É um padrão de código, sendo ele uma sigla de:

- Models (Representa uma entidade)
- Views (Parte renderizada ao usuário)
- Controllers (Regra de negócio da aplicação, tratando as requisições recebidas pela aplicação)

## ReactJS

Para iniciar um projeto ReactJS, utilizando o Yarn, execute:

```bash
yarn create react-app PROJETO
```