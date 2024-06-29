import "./style.css";
import oldAudio1 from "./assets/bad.mp3";
import myAudio1 from "./assets/good.mp3";
let sample;
// const submitButton = document.querySelector("#submit");
const sampleA = document.querySelector("#firstA1");
const sampleB = document.querySelector("#firstB1");

sampleA.addEventListener("click", (event) => {
  playSound(myAudio1, document.querySelector("#" + event.target.id));
});

sampleB.addEventListener("click", (event) => {
  playSound(oldAudio1, document.querySelector("#" + event.target.id));
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

// submitButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   let result = { myAudio: null, oldAudio: null };
//   const radioButtons = [...document.querySelectorAll("input")];
//   radioButtons.forEach((element) => {
//     if (element.value === "on") {
//         console.log('yes')
//       result[element.name] = element.textContent;
//     }
//   });
//   console.log(result)
// });
