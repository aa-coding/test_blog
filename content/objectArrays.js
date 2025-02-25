const mainPageArray = [
    {
        id: "page1",
        title: "this is page 1",
        content: "this will be page 1 content.", 

    },
    {
        id: "page2",
        title: "this is page 2",
        content: "this will be page 2 content.", 
        links: [
            {
                linkTitle: "link 1",
                linkImgSrc: "/images/winebottle612x612.jpg",
                href: "/blog/post1.html",
            },
            {
                linkTitle: "link 2",
                linkImgSrc: "/images/winebottle612x612.jpg",
                href: "/blog/post2.html",
            },
        ],
    },
    {
        id: "page3",
        title: "this is page 2",
        content: "this will be page 3 content.", 
    },
];

const postsArray = [

    {
        id: "post1",
        title: "this is post 1",
        content: "this will be post 1 content.", 

    },

    {
        id: "post2",
        title: "this is post 2",
        content: "this will be post 2 content.", 

    },

];

module.exports = { mainPageArray, postsArray };