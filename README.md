<p align="center">
  <img src="https://github.com/iamtheluiz/aircnc_omnistack9/blob/master/assets/logo.png?raw=true" alt="VirtualDesk Logo" width="450" height="144">
</p>

<p align="center">
  Reserva de Spots em empresas de desenvolvimento!
</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT" alt="MIT License">
    <img src="https://img.shields.io/badge/Open%20Source-%E2%9D%A4-lightseagreen" />
  </a>
  <a href="https://opensource.org/licenses/MIT" alt="MIT License">
  <img src="https://img.shields.io/badge/license-MIT-blue" />
  </a>
</p>

# Aircnc - Semana OmniStack 9

O Aircnc é um aplicativo onde empresas podem disponibilizar espaços para que desenvolvedores "aluguem" os mesmos, tendo contato com seu ambiente de desenvolvimento.

<p align="center">
  <img src="https://github.com/iamtheluiz/aircnc_omnistack9/blob/master/assets/home.png?raw=true" alt="Home page" width="882" height="496">
</p>

## Idealizadores

Esse projeto foi desenvolvido durante a "Semana OmniStack" da Rocketseat:

* [Site Rocketseat](https://rocketseat.com.br)
* [GitHub Rocketseat](https://github.com/Rocketseat/)

## Requisitos

- [NodeJS](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [React](https://reactjs.org/) - Frontend
- [React Native](https://facebook.github.io/react-native/) - Mobile Development

## Iniciando

Primeiro, clone esse respositório:

```bash
# Clone Repository
git clone https://github.com/iamtheluiz/aircnc_omnistack9.git

# Entra na pasta do projeto
cd aircnc_omnistack9/
```

Esta pasta contém outras 4: "assets" (arquivos da documentação), "backend" (sistema backend), "frontend" (sistema web) e mobile (aplicativo móvel). É necessário entrar em cada uma dessas pastas (tirando a pasta "assets") e instalar todas as dependências do projeto:

```bash
# Instala as Dependências do Backend
cd backend/ && yarn install

# Instala as Dependências do Frontend
cd ../frontend/&& yarn install

# Entra na pasta do aplicativo
cd ../mobile/

# Instala as dependências do aplicativo
yarn install

# Iniciar aplicação
yarn start
```

Esse projeto utiliza o [Expo](https://expo.io/) para o desenvolvimento do aplicativo móvel, sendo necessário possui-lo em sua máquina. Mais detalhes podem ser encontrados no site do mesmo, ou no aquivo [introducao.md](introducao.md), que possui outros passos e o ambiente utilizado para desenvolvimento de todo o projeto.

## License

Este projeto está sob a licença MIT - consulte o arquivo [LICENSE.md](LICENSE.md) para obter detalhes.