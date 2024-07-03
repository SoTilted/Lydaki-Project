import "./style.css";
import myAudio1 from "./assets/working_audio_files/1_mine_1.wav";
import oldAudio1 from "./assets/working_audio_files/1_old_1.wav";
import myAudio2 from "./assets/working_audio_files/2_mine_1.wav";
import oldAudio2 from "./assets/working_audio_files/2_old_1.wav";
import myAudio3 from "./assets/working_audio_files/3_mine_1.wav";
import oldAudio3 from "./assets/working_audio_files/3_old_1.wav";
import myAudio4 from "./assets/working_audio_files/4_mine_1.wav";
import oldAudio4 from "./assets/working_audio_files/4_old_1.wav";
import myAudio5 from "./assets/working_audio_files/5_mine_1.wav";
import oldAudio5 from "./assets/working_audio_files/5_old_1.wav";
import myAudio6 from "./assets/working_audio_files/1_mine_2.wav";
import oldAudio6 from "./assets/working_audio_files/1_old_2.wav";
import myAudio7 from "./assets/working_audio_files/2_mine_2.wav";
import oldAudio7 from "./assets/working_audio_files/2_old_2.wav";
import myAudio8 from "./assets/working_audio_files/3_mine_2.wav";
import oldAudio8 from "./assets/working_audio_files/3_old_2.wav";
import myAudio9 from "./assets/working_audio_files/4_mine_2.wav";
import oldAudio9 from "./assets/working_audio_files/4_old_2.wav";
import myAudio10 from "./assets/working_audio_files/5_mine_2.wav";
import oldAudio10 from "./assets/working_audio_files/5_old_2.wav";
import refAudio1 from "./assets/working_audio_files/1_ref_1.wav";
import refAudio2 from "./assets/working_audio_files/2_ref_1.wav";
import refAudio3 from "./assets/working_audio_files/3_ref_1.wav";
import refAudio4 from "./assets/working_audio_files/4_ref_1.wav";
import refAudio5 from "./assets/working_audio_files/5_ref_1.wav";
import refAudio6 from "./assets/working_audio_files/1_ref_2.wav";
import refAudio7 from "./assets/working_audio_files/2_ref_2.wav";
import refAudio8 from "./assets/working_audio_files/3_ref_2.wav";
import refAudio9 from "./assets/working_audio_files/4_ref_2.wav";
import refAudio10 from "./assets/working_audio_files/5_ref_2.wav";

let sample;
let audioList = [
  refAudio1,
  oldAudio1,
  myAudio1,

  refAudio2,
  myAudio2,
  oldAudio2,

  refAudio3,
  myAudio3,
  oldAudio3,

  refAudio4,
  myAudio4,
  oldAudio4,

  refAudio5,
  oldAudio5,
  myAudio5,

  refAudio6,
  myAudio6,
  oldAudio6,

  refAudio7,
  oldAudio7,
  myAudio7,

  refAudio8,
  myAudio8,
  oldAudio8,

  refAudio9,
  myAudio9,
  oldAudio9,

  refAudio10,
  oldAudio10,
  myAudio10,

];
const soundButtons = [...document.querySelectorAll(".soundButton")];

soundButtons.forEach((element, index) => {
  element.addEventListener("click", (event) => {
    playSound(audioList[index], document.querySelector("#" + event.target.id));
  });
}, audioList);

function removePlayingClass() {
  soundButtons.forEach((element) => {
    element.classList.remove("playing");
  });
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

function shuffleTests() {
  const parent = document.getElementById("test-content");
  const divs = parent.children;
  const frag = document.createDocumentFragment();
  while (divs.length) {
    frag.appendChild(divs[Math.floor(Math.random() * divs.length)]);
  }
  parent.appendChild(frag);
}

document.onload = shuffleTests();
