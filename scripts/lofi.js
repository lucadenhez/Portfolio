var clicked = false;
var currentSong = []
var songsAmount = 20;
i = 1;

function check() {
    var music = document.getElementById("music");
    var button = document.getElementById("play");
    
    if (!music.paused && !music.ended && 0 < music.currentTime) {
        button.textContent = "Play"
    }
    else {
        button.textContent = "Pause"
    }

    if (clicked == false && music.paused) {
        clicked = true;
        play(music);
    }
    else {
        clicked = false;
        pause(music);
    }
}

function play(music) {
    if (currentSong == "") {
        currentSong.push("music/" + Math.floor(Math.random() * songsAmount).toString() + ".mp3");
        music.src = currentSong
        music.play();
        console.log("[STATUS] Now playing: " + music.src);
    }
    else {
        music.play();
        console.log("[STATUS] Playing again");
    }
}

function pause(music) {
    music.pause();
    console.log("[STATUS] Music Paused. | Was playing: " + music.src)
}

function backwards() {
    var music = document.getElementById("music");
    
    if (currentSong.length > 0 && currentSong.length - i > 0) {
        music.pause();
        music.src = currentSong[0]
        i++;
        music.src = currentSong[currentSong.length - i]
        music.play();
        console.log("[STATUS] Now playing: " + music.src);
    }
}

function next() {
    var music = document.getElementById("music");
    
    music.pause();
    currentSong.push("music/" + Math.floor(Math.random() * songsAmount).toString() + ".mp3");
    if (currentSong.length == 1) {
        music.src = currentSong[0]
    }
    else {
        music.src = currentSong[currentSong.length - 1]
    }
    music.play();
    console.log("[STATUS] Now playing: " + music.src);
}
