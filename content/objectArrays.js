const mainPageArray = [
    {
        id: "page1",
        title: "this is page 1",
        content: "this will be page 1 content.", 

    },

    {
        id: "page2",
        title: "Posts",
        links: [
            {
                linkTitle: '"Post 1 title here"',
                date: "BY Aaron | FEB 26 2025",
                linkImgSrc: "/test_blog/public/images/winebottle612x612.jpg",
                href: "/test_blog/public/blog/post1.html",
            },

            {
                linkTitle: '"Post 2 title Here"',
                date: "BY Aaron | FEB 26 2025",
                linkImgSrc: "/test_blog/public/images/winebottle612x612.jpg",
                href: "/test_blog/blog/post2.html",
            },
        ],
    },

    {
        id: "page3",
        title: "this is page 3",
        content: "this will be page 3 content.", 
    },
];

const postsArray = [

    {
        id: "post1",
        title: '"Post 1 title here"',
        content: "this will be post 1 content.",
        postsrc: "/test_blog/public/images/winebottle612x612.jpg", 

    },

    {
        id: "post2",
        title: '"Post 2 title Here"',
        content: "this will be post 2 content.", 
        postsrc: "/test_blog/public/images/winebottle612x612.jpg",

    },

];

module.exports = { mainPageArray, postsArray };