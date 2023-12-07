<table align="right">
  <tr>
    <td>
      <a href="README-EN.md">🇺🇸 English (only in GitHub)</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="README.md">🇧🇷 Português</a>
    </td>
  </tr>
</table>

![](https://github.com/cristianmeelo/challenge-frontend-engineer-react/blob/main/thumbnail.png?raw=true)

![](https://github.com/cristianmeelo/challenge-frontend-engineer-react/blob/main/thumbnail-mockup-en.png?raw=true#vitrinedev)

<div align="center">
<a href="https://challenge-frontend-engineer-react-nu.vercel.app/">
  <img src="https://img.shields.io/badge/-CHECK%20HERE-lightblue"
  alt="Image App" >
</a>
</div>

<br/>

# CMMS - Tractian

A technical test that aims to implement a CMMS, showing and editing characteristics of assets such as machines/motors, managing companies, user units, their responsibilities and work orders. All data from a fakeapi is made available by Tractian. The end result was incredible, check it out!

## 🔨 Project features

This challenge aims to assess front-end development skills, the ability to abstract and implement the business management model. Being able to well abstract the problem presented and define the most important data. Think with the user's mind: what does a sector professional need to know about your assets?

Here are the adapted features:

- Show all the characteristics of the assets;
- Show companies, units and users;
- Actions such as delegation of responsibilities, updating of assets, company, unit and users;
- Use graphs to show health levels, status and so on.
- Generate and download production order checklist.
- Consume API (https://github.com/tractian/fake-api)

## ⚙️ Techniques and technologies used

Check out this list of everything we will use in this app:

- `Next`
- `TypeScript`
- `AntDesign`
- `i18n`
- `React Toastify`
- `Highcharts`
- `JS Pdf`
- `Vercel Deployment`
- `GitHub`

## 🛠️ Open and run the project

To open and run the project, run `npm i` to install the dependencies and `npm run dev` to start the project.

Then go to <a href="http://localhost:3000/">http://localhost:3000/</a> in your browser.

## 📚 More tutorial information

[Tractian](https://tractian.com/) is a company that offers solutions for the machinery and engine maintenance sector. For this challenge, the most complex thing was to abstract only the Api data, and use AntDesign's memorable components to build a pleasant interface for the people who will manage the software. I took the opportunity to apply internationalization with i18n, since the company is based in the US and MX. As per demand, using Highcharts was very easy. It's a really simple library to use and I really liked it. However, I gave it a special touch with the feature of downloading a work order using the JSPdf lib to build a PDF. A period of 7 days was requested for this test. When I developed it, I didn't feel confident using clean architecture, so feedback is left to me.

| :placard: Vitrine.Dev |                                                                                   |
| --------------------- | --------------------------------------------------------------------------------- |
| :sparkles: Name       | **CMMS Tracian**                                                                       |
| :label: Technologies  | Next, Typescript, AntDesign, i18n, React Toastify, Highchrts, JS Pdf, Vercel Deployment, GitHub ( used Technologies) |
| :rocket: URL          | https://challenge-frontend-engineer-react-nu.vercel.app/                             |
| :fire: Challenge      | https://tractian.notion.site/Front-End-Software-Engineer-cf7f9a91d97647abaf99b2565f8ae8fa                                   |
