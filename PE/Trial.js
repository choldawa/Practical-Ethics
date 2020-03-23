
let trialNumber = 0;
const trialData = [];

const initialSliderVal = 100;
var BLOCKS_PER_CHART = 10;
var subjectId = "CH" + Math.round(Math.random() * 10000) + "13";
// var myData;
 //use the shuffled array


// function pageLoad() {
// 	document.getElementById('consent').style.display = 'block';
// }

// function clickConsent() {
// 	document.getElementById('consent').style.display = 'none';
// 	document.getElementById('instructions').style.display = 'block';
// }

// function clickInstructions() {
//     document.getElementById('instructions').style.display = 'none';
//     document.getElementById('demo').style.display = 'block';
// }

// function clickDemo() {
//     document.getElementById('demo').style.display = 'none';
// 	trialStart();
// }

function trialStart() {
	console.log(myData.length);
	console.log(myData);
	document.getElementById('demo').style.display = 'none';
	// move to next trial.
	// currentPrompt = prompts[getRandomFromBucket()]
	document.getElementById('trialText').innerHTML = promptsShuffled[trialNumber];
	// reset the slider
	document.getElementById('trialSlider').value = initialSliderVal;
	// document.getElementById('sliderVal').innerHTML = initialSliderVal;
	// document.getElementById('asianVal').innerHTML = myData[initialSliderVal].asian,
	// document.getElementById('whiteVal').innerHTML = myData[initialSliderVal].white,
	// document.getElementById('hispanicVal').innerHTML = myData[initialSliderVal].hispanic,
	// document.getElementById('blackVal').innerHTML = myData[initialSliderVal].black,
	document.getElementById('trial').style.display = 'block';
	generateDots(fullSet, myData[trialNumber][initialSliderVal].asian, 1);
	generateDots(fullSet, myData[trialNumber][initialSliderVal].white, 2);
	generateDots(fullSet, myData[trialNumber][initialSliderVal].hispanic, 3);
	generateDots(fullSet, myData[trialNumber][initialSliderVal].black, 4);
	generateDots(fullSet, myData[trialNumber][initialSliderVal].mu, 5);

}



function DoneWithExperiment() {
	$("#debriefing").show();
	$('#doneWithDebriefing').on("click", DoneWithDebriefing);
}

function trialDone() {$(document).ready(function () {
	document.getElementById("next").disabled = true;
	setTimeout(function(){
	  document.getElementById("next").disabled = false;
	}, 500);

	});
	document.getElementById('trial').style.display = 'none';
	// record what the subject said

	trialData.push({
		trialNumber: trialNumber,
		chosenData: myData[trialNumber][document.getElementById('trialSlider').value],
		prompt: promptsShuffled[trialNumber],
		// dataset: myData[trialNumber],
		response: document.getElementById('trialSlider').value
	});
	// increment the trialNumber
	trialNumber = trialNumber + 1;
	console.log(trialNumber);
	// if we are done with all trials, then go to completed page
	if (trialNumber >= prompts.length) {
		console.log("here");
		setTimeout(DoneWithExperiment, 50);
		//document.getElementById('done').style.display = 'block';
	} else {
		// if we are not done with all trials, then show the next trial.
		trialStart();
	}

}

function DoneWithDebriefing() {
	$("#debriefing").hide();
	$("#done").html("Thanks for doing the study. Your survey code is " + subjectId);
	$("#done").show();
	var subjectInfo = {
		subjectId: subjectId,
		age: $('#age').val(),
		gender: $('input[name=gender]:checked').val(),
		wasItFun: $('#wasItFun').val(),
		userAgent:  navigator.userAgent,
		trialList: trialData
	  };
	  
	  var dataToServer = {
		id: subjectId,
		experimenter: "choldawa",
		experimentName: "PE_Pilot_1",
		curData: JSON.stringify(subjectInfo)
	  };
	  /* AJAX */
	  $.post("https://psyc241.ucsd.edu/Turk/save.php", dataToServer);
};

function experimentDone() {
	window.location = 'http://www.evullab.org';
}