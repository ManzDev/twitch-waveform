import { filterData } from "./modules/filterData.js";
import { normalizeData } from "./modules/normalizeData.js";
import { draw } from "./modules/draw.js";

const URL = "audio/avocado-dance.mp3";

window.AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

const visualize = (audioBuffer) => {
  const filteredData = filterData(audioBuffer);
  const normalizedData = normalizeData(filteredData);
  draw(normalizedData);
};

const visualizeAudio = url => {
  fetch(url)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
    .then(audioBuffer => visualize(audioBuffer));
};

visualizeAudio(URL);
