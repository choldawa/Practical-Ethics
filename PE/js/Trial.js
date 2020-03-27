
let trialNumber = 0;
const trialData = [];

const initialSliderVal = 100;
var BLOCKS_PER_CHART = 10;
var subjectId = "CH" + Math.round(Math.random() * 10000) + "13";
attentionTrial = 9;
var att = 0; //default to 0 for non-catch trials
var client = parseClient();
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
	document.getElementById('prompt').style.display = 'block';
	document.getElementById('preTrialText').innerHTML = myData_test['prompts_test'][trialNumber];
	document.getElementById('promptButton').disabled = true;
	setTimeout(function(){
		document.getElementById("promptButton").disabled = false;
	  }, 1000);
	document.getElementById('next').disabled = true;

	document.getElementById('demo').style.display = 'none';
	// move to next trial.
	// currentPrompt = prompts[getRandomFromBucket()]
	document.getElementById('trialText').innerHTML = myData_test['prompts_test'][trialNumber];
	// reset the slider
	document.getElementById('trialSlider').value = initialSliderVal;

	generateDots(fullSet, myData_test['datasets_test'][trialNumber][initialSliderVal].asian, 1);
	generateDots(fullSet, myData_test['datasets_test'][trialNumber][initialSliderVal].white, 2);
	generateDots(fullSet, myData_test['datasets_test'][trialNumber][initialSliderVal].hispanic, 3);
	generateDots(fullSet, myData_test['datasets_test'][trialNumber][initialSliderVal].black, 4);
	generateDots(fullSet, myData_test['datasets_test'][trialNumber][initialSliderVal].mu, 5);
	console.log(myData_test['prompts_test'][0]);
	console.log(myData_test['datasets_test'][0][initialSliderVal].mu);

}



function DoneWithExperiment() {
	$("#debriefing").show();
	$('#doneWithDebriefing').on("click", DoneWithDebriefing);
}

function trialDone() {
	$(document).ready(function () {
		if (trialNumber == attentionTrial) {
			att = 1;
		} else {
			att = 0;
		}

		document.getElementById("next").disabled = true;
		// setTimeout(function(){
		//   document.getElementById("next").disabled = false;
		// }, 500);

	});
	document.getElementById('trial').style.display = 'none';
	console.log(att);
	// record what the subject said
	trialData.push({
		att: att,
		trialNumber: trialNumber,
		chosenData: myData_test['datasets_test'][trialNumber][document.getElementById('trialSlider').value],
		prompt: myData_test['prompts_test'][trialNumber],
		// dataset: myData[trialNumber],
		response: document.getElementById('trialSlider').value
	});
	// increment the trialNumber
	trialNumber = trialNumber + 1;
	console.log(trialNumber);
	// if we are done with all trials, then go to completed page
	if (trialNumber >= myData_test['prompts_test'].length) {
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
		userAgent: navigator.userAgent,
		trialList: trialData
	};

	var dataToServer = {
		id: subjectId,
		experimenter: "choldawa",
		experimentName: "PE_Pilot_1",
		curData: JSON.stringify(subjectInfo)
	};
	data = {client: client, trials: trialData};
	/* AJAX */
	writeServer(data);
	$.post("https://psyc241.ucsd.edu/Turk/save.php", dataToServer);
};

function experimentDone() {
	submitExternal(client);

}