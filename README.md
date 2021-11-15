![logo]()

## <div style="color:#f59800" align="center">---|Welcome to my homework project 👋|---</div>

A simple NodeJS backend service based on the following specification:

It has two endpoints

- Both endpoints receive an array with numbers
- The first endpoint calls the /second-power API endpoint and then returns the power numbers
- The endpoint calls the other endpoint sequentially
- The second endpoint calls the /third-power API endpoint and then returns the third power numbers
- The endpoint calls the other endpoint in parallel
- The parallel calculation goes with a maximum of 10 items in a batch.
  (If you have 14 items in the input array, at first it calculates the third power of the first 10 items in parallel,
  then it goes with the remaining 4 items)

- The service should have proper error handling, the endpoints should return all the successfully calculated values
  regardless of the individual API request results.   (Some of the requests may fail because of the way how the deployed
  service works)

<div align="center">

[![Version](https://img.shields.io/badge/version-v1.0-blue.svg)](https://img.shields.io/badge/version-v1.0-blue.svg?cacheSeconds=2592000)

</div>

<div align="center">

•[PROJECT PHILOSOPHY](https://github.com/NorbertRuff/apex-homework2/#project-philosophy) •
[TECH STACK](https://github.com/NorbertRuff/apex-homework2/#tech-stack) •
[SCREENSHOTS](https://github.com/NorbertRuff/apex-homework2/#screenshots) •
[CONTRIBUTING](https://github.com/NorbertRuff/apex-homework2/#contributing) •
[ABOUT ME](https://github.com/NorbertRuff/apex-homework2/#about-me)
•

</div>

# <div style="color:#f59800" align="center">---|🧐 Project philosophy|---</div>

> To make a project that shows of my skills and passion for JS, front-end development, learn the async await.
>

## 🚦Demo

<div align="center">

![screenshot]()

</div>

## Screenshots

<div align="center">


![screenshot]()

![screenshot]()



</div>

# <div style="color:#f59800" align="center">---|👨‍💻 Tech Stack|---</div>

**API-s used**

- [Provided by Apex](https://simple-rest-api.onrender.com)

> > It has a 20% chance that the corresponding request fails, in this case, the server returns with a BadRequest response.

This service has two public endpoints:

[GET] /second-power?base=value  
[GET] /third-power?base=value

**Dependencies used**

- express
- node-fetch

**Development dependencies used**

- dotenv
- jest
- nodemon
- prettier

# <div style="color:#f59800" align="center">---|Usage|---</div>

**Client:**
Static HTML

## Run Locally

Clone the project

```bash
  git clone https://github.com/NorbertRuff/apex-homework2.git
```

Go to the project directory

```bash
  cd apex-homework2
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

Open http://localhost:3000 to view it in the browser.

## <div style="color:#f59800" align="center">---|Environment Variables|---</div>

To use this project on custom port, you will need to add the following environment variable to your .env file

Create.env file in root:

PORT=YOUR_CUSTOM_PORT

## <div style="color:#f59800" align="center">---|Lessons Learned|---</div>

- ASYNC-AWAIT
- Promise all
- Sequential vs parallel api calls
- Error handling
- NODE js
- Docker
- Best practices

# <div style="color:#f59800" align="center">---|✍️ Contributing|---</div>

Contributions, issues and feature requests are welcome!<br/>

I'm always looking for improvements to the project and contributions from open-source developers are greatly
appreciated.

Feel free to check [issues page](https://github.com/NorbertRuff/apex-homework2/issues).

Give a ⭐️ if this project helped you!

# <div style="color:#f59800" align="center">---|🚀 About Me|---</div>

<h2 align="center">Hi 👋, I'm Norbert</h2>
<h3 align="center">A passionate developer from Codecool Hungary</h3>

<p align="left"> <img src="https://komarev.com/ghpvc/?username=norbertruff&label=Profile%20views&color=0e75b6&style=flat" alt="norbertruff" /> </p>

- 🌱 I’m currently learning **React**

- 👨‍💻 All of my projects are available at [https://github.com/NorbertRuff](https://github.com/NorbertRuff)

- 📫 How to reach me **ruffnorbert88@gmail.com**

<h3 align="left">Connect with me:</h3>

## <div style="color:#f59800" align="center">---|🔗 Links|---</div>

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/NorbertRuff)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ruff-norbert/)

<h2><img src="https://media.giphy.com/media/cj87CxfRtrUifF3Ryk/giphy.gif" height="25"> My Github Stats</h2>

<div align="center">

[![](https://raw.githubusercontent.com/NorbertRuff/NorbertRuff/master/profile-summary-card-output/dracula/0-profile-details.svg)](https://github.com/vn7n24fzkq/github-profile-summary-cards)

[![](https://raw.githubusercontent.com/NorbertRuff/NorbertRuff/master/profile-summary-card-output/dracula/2-most-commit-language.svg)](https://github.com/vn7n24fzkq/github-profile-summary-cards)

[![](https://raw.githubusercontent.com/NorbertRuff/NorbertRuff/master/profile-summary-card-output/dracula/3-stats.svg)](https://github.com/vn7n24fzkq/github-profile-summary-cards) [![](https://raw.githubusercontent.com/NorbertRuff/NorbertRuff/master/profile-summary-card-output/dracula/4-productive-time.svg)](https://github.com/vn7n24fzkq/github-profile-summary-cards)

</div>

## My Skill Set 👩‍💻

<div align="center">  
<img src="https://www.codewars.com/users/NorbertRuff/badges/large">
</div>

<table><td valign="top" width="25%">
<h2 align="center"> 💻 </h2><br>

<div align="center">  
<img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" height="25">
<img src="https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=java&logoColor=white" height="25">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" height="25">
<img src="https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white" height="25">
<img src="https://img.shields.io/badge/Flask-000000?style=flat-square&logo=flask&logoColor=white" height="25">
<img src="https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white" height="25">
</div>


</td>
<td valign="top" width="25%">

<h2 align="center"> 🌐 </h2><br>

<div align="center">  


<img src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3" height="25">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" height="25">
<img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" height="25">
<img src="https://img.shields.io/badge/Bootstrap-563D7C?style=flat-square&logo=bootstrap&logoColor=white" height="25">

</div>

</td><td valign="top" width="25%">

<h2 align="center"> ⚙ </h2><br>

<div align="center">

<img src="https://img.shields.io/badge/-Linux-black?style=flat-square&logo=Linux" height="25"> 
<img src="https://img.shields.io/badge/Windows-0078D6?style=flat-square&logo=windows&logoColor=white" height="25"> 
<img src="https://img.shields.io/badge/Ubuntu-E95420?style=flat-square&logo=ubuntu&logoColor=white" height="25">
<img src="https://img.shields.io/badge/-Git-black?style=flat-square&logo=git" height="25"> 
<img src="https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github" height="25"> 
<img src="https://img.shields.io/badge/Markdown-000000?style=flat-square&logo=markdown&logoColor=white" height="25">

</div>

</td>
<td valign="top" width="25%">

<h2 align="center"> 🎨 </h2><br>

<div align="center">
 <img src="https://aleen42.github.io/badges/src/photoshop.svg" height="25">
<img src="https://aleen42.github.io/badges/src/illustrator.svg" height="25">
<img src="https://aleen42.github.io/badges/src/dreamweaver.svg" height="25">
<img src="https://aleen42.github.io/badges/src/flash.svg" height="25">

 </div>

</td>
</table>  

<div align="center">

<p align="center"> <img src="https://komarev.com/ghpvc/?username=NorbertRuff&label=Profile%20views&color=0e75b6&style=flat-square" alt="prathmesh" /> </p>


</div>

