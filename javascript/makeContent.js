const objArrays = require("../content/objectArrays.js"); 
const fs = require('fs');
//const path = require("path");

//note: express.static means /public doesn't have to be included in path(?)
//TO DO: breakpoints for responsive design, ie. hamburger menu becomes 

const makePage = (pageType, ID) => {
    
    let obj;
    if (pageType === "post") { obj = objArrays.postsArray.filter( (obj) => (obj.id === ID))[0]; };
    if (pageType === "page") { obj = objArrays.mainPageArray.filter( (obj) => (obj.id === ID))[0] }; 
    const title = obj.title;
    let content;
    let linksString = ""; 
    if (obj.content) { content = obj.content; }; 
    if (obj.links) {
        (obj.links).forEach( (link) => { linksString = linksString + ` <a href=${link.href} class="post-link"><img src=${link.linkImgSrc}><h3>${link.linkTitle}<span id="link-date">${link.date}<span></h3> </a>`}); 
    };

    const htmlContent = `

    <!DOCTYPE html>
    <html lang="en">
    <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet">
            <link rel="stylesheet" href=${pageType === "page" ? "index.css" : "../index.css"}>
            <title>Blog Site</title>
    </head>
    <body>
        <div class="wrapper">
             <header>
                <div id="headerdiv">
                    <img id="menu" src="/assets/Hamburger_icon.svg">
                    <a href="/">
                        Blog Site
                    </a>
                </div>
                <nav>
                    <div id="page-links">
                        <a href="/page1.html" class="nav-link" id="page1">page 1</a>
                        <a href="/page2.html" class="nav-link" id="page2">page 2</a>
                        <a href="/page3.html" class="nav-link" id="page3">page 3</a>
                    </div>   
                </nav>
            </header>
            <section id="content">
                <h2>${title}</h2>
                <p style="${obj.content ? "display: inline" : "display: none"}">${content}</p>
                <div id="links" style="${obj.links ? "display: block" : "display: none"}">
                    <p>LATEST</p>
                    ${linksString}
                </div>    
            </section>
            <footer> 
                <span>by aa-coding, February 2025</span>
                <a href="#top">&gt; back to top &lt;</a>
            </footer>
        </div>
        <script>
        document.querySelector("#menu").addEventListener("click", () => {
            const menubar = document.querySelector("nav");
            menubar.style.display === "none" ? menubar.style.display = "block" : menubar.style.display = "none";
        });
        </script>
    </body>
    </html>
    `;
    
    if (pageType === "post") {
        fs.writeFile(`./public/blog/${ID}.html`, htmlContent, (error) => {
            if (error) throw (error);
            console.log(`creating ${ID}.html file`);
        } );
    };
    if (pageType === "page") {
        fs.writeFile(`./public/${ID}.html`, htmlContent, (error) => {
            if (error) throw (error);
            console.log(`creating ${ID}.html file`);
        } );
    };
};


module.exports = makePage;