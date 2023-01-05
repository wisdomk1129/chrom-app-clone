const quotesArray = [
    {
        quote: "Just play.Have fun.Enjoy the game.",
        author: "- Michael Jordan -",
    },
    {
        quote: "It is better to be hated for what you are than to be loved for what you are not.",
        author: "- Andre Gide -",
    },
    {
        quote: "Joy is not in things.it is in us.",
        author: "- Richard Wagner -",
    },
    {
        quote: "Remember that happiness is a way of travel - not a destination.",
        author: "- Roy M. Goodman -",
    },
    {
        quote: "Most folks are about as happy as they make up their minds to be.",
        author: "- Abraham Lincoln -",
    },
    {
        quote: "I never did a day's work in my life. It was all fun.",
        author: "- Thomas A. Edison -",
    },
    {
        quote: "If you hate a person, you hate something in him that is part of yourself. What isn't part of ourselves doesn't disturb us.",
        author: "- Hermann Hesse -",
    },
    {
        quote: "Things won are done; joy's soul lies in the doing.",
        author: "- William Shakespeare -",
    },
    {
        quote: "Learning to live in the present moment is part of the path of joy.",
        author: "- Sarah Ban Breathnach -",
    },
    {
        quote: "Happiness depends upon ourselves.",
        author: "- Aristotle -",
    },
];

const quotes = document.querySelector(".quotes span:first-child");
const author = document.querySelector(".quotes span:last-child");
const todaysQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];

quotes.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;