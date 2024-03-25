const currentDate = new Date().getTime();
const easterDate = new Date("2024-03-30").getTime();

let app = document.getElementById('app');
let html = "";

let i;
let startCount;

let facts = [
    "The tallest chocolate Easter egg ever made was taller than a giraffe. Standing at about 10.39 meters (34 feet), it was created in Italy in 2011.",
    "In Norway, it's a tradition to read crime novels during Easter. This odd tradition is called 'Easter Crime' or 'Påskekrim' in Norwegian.",
    "The largest Easter egg hunt in the world happened in Florida, USA, in 2007, where over 9,753 children searched for 501,000 Easter eggs.",
    "In some parts of Germany, instead of the Easter Bunny, children believe in the 'Easter Fox' who brings eggs.",
    "In Australia, due to their abundance, the Easter Bilby, a native marsupial, is often used as an alternative symbol for Easter instead of the rabbit.",
    "In Finland, children dress up as witches and go door to door for treats, similar to Halloween, during Easter. This tradition is called 'Virpominen.'",
    "The world record for the largest gathering of people dressed as bunnies was set in 2011 in London when 1,119 people gathered in bunny costumes.",
    "In Bermuda, flying kites on Good Friday is a tradition believed to symbolize Christ's ascension to heaven.",
    "The first Easter eggs were actually dyed red to symbolize the blood of Christ.",
    "The tradition of Easter eggs dates back to at least the 13th century, where decorated eggs were given as gifts to celebrate the spring season and new life."
]

const timeRemaining = easterDate - currentDate;
let hours, minutes, seconds = "test";
let totalSeconds = Math.floor(timeRemaining / 1000)

hours = Math.floor(totalSeconds / 3600);
minutes = Math.floor((totalSeconds % 3600) / 60);
seconds = Math.floor(totalSeconds % 60);