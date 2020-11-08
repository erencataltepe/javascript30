function makeAnimation(pressedKey) {
  const drumButtons = document.querySelectorAll(".key");
  drumButtons.forEach(button => {
    if (button.dataset.key == pressedKey) {
      button.classList.add("playing");
      playSound(pressedKey);
      setTimeout(() => {
        button.classList.remove("playing");
      }, 50)
    }
  })
}


function playSound(pressedKey) {
  const audios = document.querySelectorAll("audio");
  audios.forEach(audio => {
    if (audio.dataset.key == pressedKey) {
      console.log(audio.dataset.key);
      audio.currentTime = 0; //Bu statement butona her bastığımda audio'nun baştan
                            // çalmasını sağlıyor.
      audio.play();
    }
  })
}

document.addEventListener("keydown", (e) => {
  asciiCode = e.key.toUpperCase().charCodeAt(0)
  makeAnimation(asciiCode);
})