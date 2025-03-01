const makePage = require("./javascript/makeContent.js");

//first, render html files, function saves .html files in public folder
const pages = ["page1", "page2", "page3"];
pages.forEach( (page) => makePage("page", page));

const posts = ["post1", "post2"];
posts.forEach( (post) => makePage("post", post)); 
