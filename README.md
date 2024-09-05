<table align="right">
  <tr>
    <td>
      <a href="README-EN.md">🇺🇸 English (apenas no GitHub)</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="README.md">🇧🇷 Português</a>
    </td>
  </tr>
</table>

![](https://github.com/cristianmeelo/challenge-frontend-engineer-react/blob/main/thumbnail.png?raw=true)

![](https://github.com/cristianmeelo/challenge-frontend-engineer-react/blob/main/thumbnail-mockup.png?raw=true#vitrinedev)

<br/>

# CMMS - Tractian

Um teste técnico que visa implementar um CMMS, mostrando e editando características de ativos como máquinas/ motores, gerenciar empresas, unidades usuários, suas responsibilidades e ordens de serviço. Todos os dados provindos de um fakeapi disponibiliza pela Tractian. O resultado final ficou incrível, confira!

<div align="center">
<a href="https://challenge-frontend-engineer-react-nu.vercel.app/">
  <img src="https://img.shields.io/badge/-CONFIRA%20AQUI-lightblue" alt="Image App" >
</a>
</div>

## 🔨 Recursos do projeto

Este desafio tem como objetivo avaliar as habilidades de desenvolvimento front-end, a capacidade de abstrair e implementar o modelo gestão de negócio. Conseguir abstrair bem o problema apresentado e definir os dados mais importantes. Pense com a cabeça do usuário: o que um profissional do setor precisa saber sobre seus ativos?

Aqui estão os recursos adaptados:

- Mostrar todas as características dos ativos;
- Mostrar empresas, unidades e usuários;
- Ações como delegação de responsabilidades, atualização de patrimônio, empresa, unidade e usuários;
- Use gráficos para mostrar níveis de saúde, status e assim por diante.
- Gerar e baixar checklist de ordens de produção.
- Consumir API ~~(https://github.com/tractian/fake-api)~~ https://challenge-frontend-engineer-react-api.vercel.app/.

## ⚙️ Técnicas e tecnologias usadas

Confira essa lista de tudo que vamos usar nesse app:

- `Next`
- `TypeScript`
- `AntDesign`
- `i18n`
- `React Toastify`
- `Highcharts`
- `JS Pdf`
- `Vercel Deployment`
- `GitHub`

## 🛠️ Abra e execute o projeto

Para abrir e executar o projeto, execute `npm i` para instalar as dependências e `npm run dev` para iniciar o projeto.

Em seguida, vá para <a href="http://localhost:3000/">http://localhost:3000/</a> em seu navegador.

## 📚 Mais informações do tutorial

A [Tractian](https://tractian.com/) é uma empresa que oferece soluções para o setor de manutenção de máquinas e motores. Para esse desafio, o mais complexo foi abstrair apenas os dados da Api, e utilizar os componentes memoráveis do AntDesign para contruir uma interface agradável para as pessoas que irão gerenciar o software. Aproveitei para aplicar a internacionalização com i18n, visto que a empresa possui sede em US e MX. Como demanda, a utlização do Highcharts foi bem fácil. É uma biblioteca realmente simples de utilizar e gostei bastante. Não obstante, dei um toque especial com a feature de baixar um ordem de serviço utilizando a lib JSPdf para contrução de PDF. Para esse teste foi solicitado um prazo de 7 dias. Quando desenvolvi, não me senti seguro de utilizar clean archictecture, fica de feedback de mim para mim mesmo.

| :placard: Vitrine.Dev |                                                                                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| :sparkles: Nome       | ** CMMS - Tractian **                                                                                                     |
| :label: Tecnologias   | Next, Typescript, AntDesign, i18n, React Toastify, Highchrts, JS Pdf, Vercel Deployment, GitHub (tecnologias utilizadas) |
| :rocket: URL          | https://challenge-frontend-engineer-react-nu.vercel.app/                                                                 |
| :fire: Desafio        | https://tractian.notion.site/Front-End-Software-Engineer-cf7f9a91d97647abaf99b2565f8ae8fa                                |
