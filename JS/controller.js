startSecondCount = setInterval(secondCounterLogic, 1000);
function secondCounterLogic(){
    totalSeconds--;
    hours = Math.floor(totalSeconds / 3600);
    minutes = Math.floor((totalSeconds % 3600) / 60);
    seconds = Math.floor(totalSeconds % 60);
}

checkFor0 = setInterval(updatecountdown, 1000);
function getRandomFact(){
    getRandomMath();
    clearInterval(checkFor0);
    let textDisplay = document.getElementById('textDisplay');
    let countDisplay = document.getElementById('countDisplay');
    
    textDisplay.style.display = "none";
    countDisplay.style.display = "none";
    
    
    html = `
    <p>${facts[i]}
    
    `
    updateViewNoChange();
    setTimeout(reloadTimer, 6000);
}    




function getRandomMath(){
    i = Math.floor(Math.random()*10)
    return i;

}

function reloadTimer(){
    checkFor0 = setInterval(updatecountdown, 1000);
    app.innerHTML = html;

}



function updatecountdown(){
    if(totalSeconds <= 0){
        console.log("Easter is upon us!")
    }
    
    updateView();
    
    }
    