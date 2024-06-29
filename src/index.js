import "./style.css";
import audiofile from "./assets/bad.mp3";
import audiofile2 from "./assets/good.mp3";
let sample;

const sampleA = document.querySelector("#firstA1");
const sampleB = document.querySelector("#firstB1");

sampleA.addEventListener("click", (event) => {
  playSound(audiofile, document.querySelector("#" + event.target.id));
});

sampleB.addEventListener("click", (event) => {
  playSound(audiofile2, document.querySelector("#" + event.target.id));
});

function removePlayingClass() {
  sampleA.classList.remove("playing");
  sampleB.classList.remove("playing");
}

function playSound(audio, thisButton) {
  if (sample) {
    sample.pause();
    [...document.querySelectorAll(".soundButton")].forEach((element) =>
      element.classList.remove("playing")
    );
  }
  thisButton.classList.add("playing");
  sample = new Audio(audio);
  sample.addEventListener("ended", removePlayingClass);
  sample.volume = 0.2;
  sample.play();
}
