const objArrays = require("../content/objectArrays.js"); 
const fs = require('fs');

const makePage = (pageType, ID) => {
    
    let obj;
    if (pageType === "post") { obj = objArrays.postsArray.filter( (obj) => (obj.id === ID))[0]; };
    if (pageType === "page") { obj = objArrays.mainPageArray.filter( (obj) => (obj.id === ID))[0] }; 
    const title = obj.title;
    let content;
    let linksString = ""; 
    if (obj.content) {content = obj.content}; 
    if (obj.links) { (obj.links).forEach( (link) => { linksString = linksString + ` <a href=${link.href}><h3>${link.linkTitle}</h3><img src=${link.linkImgSrc}> </a>`}) };

    const htmlContent = `

    <!DOCTYPE html>
    <html lang="en">
    <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="index.css" />
            <title>Blog Site</title>
    </head>
    <body>
        <div class="wrapper">
            <header>
                <h1>
                    Blog Site
                </h1>
            </header>
            <nav>
                <h3>Navigation</h3>
                <div id="page-links">
                    <a href="/" class="nav-link" id="home">home</a>
                    <a href="/page1.html" class="nav-link" id="page1">page 1</a>
                    <a href="/page2.html" class="nav-link" id="page2">page 2</a>
                    <a href="/page3.html" class="nav-link" id="page3">page 3</a>
                </div>
            </nav>
            <section id="content">
                <h2>${title}</h2>
                <p>${content}</p>
                <div id="links">
                    ${linksString}
                </div>    
            </section>
            <footer>
                <span>by aa-coding, February 2025</span>
            </footer>
        </div>
    </body>
    </html>
    `;
    
    if (pageType === "post") {
        fs.writeFile(`./public/blog/${ID}.html`, htmlContent, (error) => {
            if (error) throw (error);
            console.log("creating html file");
        } );
    };
    if (pageType === "page") {
        fs.writeFile(`./public/${ID}.html`, htmlContent, (error) => {
            if (error) throw (error);
            console.log("creating html file");
        } );
    };
};


module.exports = makePage;