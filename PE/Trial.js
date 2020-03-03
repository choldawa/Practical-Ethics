const prompts = ['Prompt 1', 
'Prompt 2'];
let trialNumber = 0;
const trialData = [];

const initialSliderVal = 100;
var BLOCKS_PER_CHART = 10;

function pageLoad() {
	document.getElementById('consent').style.display = 'block';
}

function clickConsent() {
	document.getElementById('consent').style.display = 'none';
	document.getElementById('instructions').style.display = 'block';
}

function clickInstructions() {
	document.getElementById('instructions').style.display = 'none';
	trialStart();
}

function trialStart() {
	// move to next trial.
	document.getElementById('trialText').innerHTML = prompts[trialNumber];
	// reset the slider
	document.getElementById('trialSlider').value = initialSliderVal;
	// document.getElementById('sliderVal').innerHTML = initialSliderVal;
	// document.getElementById('asianVal').innerHTML = myData[initialSliderVal].asian,
	// document.getElementById('whiteVal').innerHTML = myData[initialSliderVal].white,
	// document.getElementById('hispanicVal').innerHTML = myData[initialSliderVal].hispanic,
	// document.getElementById('blackVal').innerHTML = myData[initialSliderVal].black,
	document.getElementById('trial').style.display = 'block';
	generateDots(fullSet, myData[initialSliderVal].asian, 1);
	generateDots(fullSet, myData[initialSliderVal].white, 2);
	generateDots(fullSet, myData[initialSliderVal].hispanic, 3);
	generateDots(fullSet, myData[initialSliderVal].black, 4);
	generateDots(fullSet, myData[initialSliderVal].mu, 5);
}