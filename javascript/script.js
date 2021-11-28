// one piece
let strawhat = "https://media.giphy.com/media/UTek0q3N8osh8agH4Y/giphy.gif";
let law = "https://media.giphy.com/media/ObHA57EFxQ3O8/giphy.gif";
let luffy = "https://media.giphy.com/media/ghCX1B38YFXAwttIkg/giphy.gif";

// naruto 
let narutoMove = "https://media.giphy.com/media/2y98KScHKeaQM/giphy.gif";
let ramin = "https://media.giphy.com/media/w7CP59oLYw6PK/giphy.gif";
let kakashiTrick = "https://media.giphy.com/media/Do5GRTYRIhSFy/giphy.gif";

//bleach
let urahara = "https://media.giphy.com/media/aDS8SjVtS3Mwo/giphy.gif";
let kenpachi = "https://media.giphy.com/media/M1oPO3TchPJS/giphy.gif";
let ichigo = "https://media.giphy.com/media/JLYQnbND9gkYU/giphy.gif";
//

let naruto = [narutoMove, ramin, kakashiTrick];
let onePiece = [strawhat, law, luffy];
let bleach = [urahara, kenpachi, ichigo];


// let animes = [bleach, onePiece, naruto];
let animes = naruto.concat(onePiece,bleach);

function animeVideoUpload(anime) {
    document.getElementById("source").src=anime;
}
//
let userSelect = document.getElementById("UserSelect");
let option = document.getElementById("option").value;
//
//
document.getElementById("source").src= animes[Math.floor(Math.random()*animes.length)];
//
function scheduleA(event) {
    let userOption;
    userOption = this.options[this.selectedIndex].text;
    let animeVideo;
    let click = 0
    if(userOption == "Bleach") {
        animeVideo = bleach;
    } else if (userOption == "Naruto") {
        animeVideo = naruto;

    } else if (userOption == "One Piece") {
        animeVideo = onePiece;

    } else {
        let randomAnime = animes[Math.floor(Math.random()*animes.length)];
        animeVideo = randomAnime;
    }
    
    animeVideoUpload(animeVideo);
    document.getElementById("source").src=animeVideo;
    //
}
let counter = 0;
function nextVideo() {
    let userOption = userSelect.value;
    let animeVideo;
    if(userOption == "bleach") {
        counter++;
        if (counter >= bleach.length){
            counter = 0;
        }
        animeVideo = bleach[counter];
    } else if (userOption == "naruto") {
        counter++;
        if (counter >= naruto.length){
            counter = 0;
        }
        animeVideo = naruto[counter];
    } else if (userOption == "one-piece") {
        counter++;
        if (counter >= onePiece.length){
            counter = 0;
        }
        animeVideo = onePiece[counter];
    } else {
        // let randomAnime = animes[Math.floor(Math.random()*animes.length)];
        // animeVideo = randomAnime;
        counter++;
        if (counter == animes.length){
            counter = 0;
        }
        animeVideo = animes[counter];
    }
    animeVideoUpload(animeVideo);
    document.getElementById("source").src=animeVideo;
}

function prevVideo(){
    let userOption = userSelect.value;
    let animeVideo;
    //
    if (userOption == 'bleach'){
        if (counter == 0) {
            counter = bleach.length - 1;
        } else {
            counter--;
        }
        animeVideo = bleach[counter]
    } else if (userOption == 'naruto'){
        if (counter == 0) {
            counter = naruto.length - 1;
        } else {
            counter--;
        }
        animeVideo = naruto[counter]
    } else if (userOption == 'one-piece'){
        if (counter == 0) {
            counter = onePiece.length - 1;
        } else {
            counter--;
        }
        animeVideo = onePiece[counter]
    } else {
        if (counter == 0){
            counter = animes.length - 1;
        } else {
            counter--;
        }
        animeVideo = animes[counter];
    }

    document.getElementById("source").src=animeVideo;
    animeVideoUpload(animeVideo);
}

/////////////////// Download 

let btnDownload = document.getElementById('download');
let clip = document.getElementById("source");

btnDownload.addEventListener('click', () => {
    let clipPath = clip.getAttribute('src');
    let fileName = getFileName(clipPath);

    saveAs(clipPath, fileName);
});

function getFileName(str){
    return str.substring(str.lastIndexOf('/')+1);
}


// document.getElementById("source").src="https://media.giphy.com/media/ayMW3eqvuP00o/giphy.gif";

// https://media.giphy.com/media/ayMW3eqvuP00o/giphy.gif