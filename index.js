let hscore = document.getElementById("homescore")
let gscore = document.getElementById("guestscore")

function homeone(){
    hscore.textContent = parseInt(hscore.textContent) +1
}

function hometwo(){
    hscore.textContent = parseInt(hscore.textContent) +2
}

function homethree(){
    hscore.textContent = parseInt(hscore.textContent) +3
}

function guestone(){
    gscore.textContent = parseInt(gscore.textContent) +1
}
function guesttwo(){
    gscore.textContent = parseInt(gscore.textContent) +2
}

function guestthree(){
    gscore.textContent = parseInt(gscore.textContent) +3
}