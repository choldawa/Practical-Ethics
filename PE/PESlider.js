const prompts = ['A loan company is conducting market research to find out what method to use to determine who to give loans to...', 'test2'];
let trialNumber = 0;
const trialData = [];

const initialSliderVal = 50;
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
	// document.getElementById('trialSlider').value = initialSliderVal;
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
}



function sliderChange(val) {
	document.getElementById('sliderVal').innerHTML = val;
	// const { a, w, b, h } = LookupApprovalPercent(val);
	// document.getElementById('asianVal').innerHTML = a; 
	// document.getElementById('whiteVal').innerHTML = w;
	// document.getElementById('hispanicVal').innerHTML = b;
	// document.getElementById('blackVal').innerHTML = h;
	generateDots(fullSet, myData[val].asian, 1);
	generateDots(fullSet, myData[val].white, 2);
	generateDots(fullSet, myData[val].hispanic, 3);
	generateDots(fullSet, myData[val].black, 4);
}

function calculateThreshold(val) {
	return {
		'a':  myData[val].asian,
		'w': myData[val].white,
		'b': myData[val].black,
		'h': myData[val].hispanic,
	}
}

function LookupApprovalPercent(val) {
	const approvals = calculateThreshold(val);
	// do stuff based on the treshold
	// determine where the bars are for each distribution using default rate
	//calculate 1-cdf to get the approval rate
	// return { a, w, h, b }
	return approvals;
}

function trialDone() {
	document.getElementById('trial').style.display = 'none';
	// record what the subject said
	trialData.push({
		trialNumber: trialNumber,
		product: prompts[trialNumber],
		response: document.getElementById('trialSlider').value
	});
	// increment the trialNumber
	trialNumber = trialNumber + 1;

	// if we are done with all trials, then go to completed page
	if (trialNumber >= prompts.length) {
		document.getElementById('completed').style.display = 'block';
	} else {
		// if we are not done with all trials, then show the next trial.
		trialStart();
	}s

}

function experimentDone() {
	window.location = 'http://www.evullab.org';
}
