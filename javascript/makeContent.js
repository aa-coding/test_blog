const objArray = require("../content/objectArrays.js"); 

const makePage = (pageID) => {
    const obj = objArray.filter( (obj) => (obj.id === pageID))[0]; 
    const title = obj.title;
    let linksString = ""; 
    if (obj.content) {content = obj.content}; 
    if (obj.links) { (obj.links).forEach( (obj) => { linksString = linksString + ` <div><h3>${obj.linkTitle}</h3> </div>`}) };
        
    //linksArray.push(`<div><h3>${obj.linkTitle}</h3> </div>`) })}; 
    //const linksString = linksArray.toString();
    //const links = linksString.replaceAll(",", " "); 

    return `

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
        <h1>
            ${title}
        </h1>
        <p>
            ${content}
        </p>
        <div>
            ${linksString}
        </div>
    </body>
    </html>
    `;
};

module.exports = makePage;