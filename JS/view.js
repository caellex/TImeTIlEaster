
updateView();
function updateView(){

    html = `<h1 onmouseover="getRandomFact();" id="textDisplay">Time 'til Easter Eve!</h1>
    <h2 id="countDisplay">${hours} Hours, ${minutes} Minutes, ${seconds} Seconds.</h2>`;

    app.innerHTML = html;


}

function updateViewNoChange(){

    app.innerHTML = html;


}