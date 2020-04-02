
let trialNumber = 0;
const trialData = [];
var subjectData = []

const initialSliderVal = 100;
var BLOCKS_PER_CHART = 10;
var subjectId = "CH" + Math.round(Math.random() * 10000) + "13";
attentionTrial = 7;
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
	setTimeout(function () {
		document.getElementById("promptButton").disabled = false;
	}, 4000);
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
	console.log(myData_test['prompts_test'][trialNumber]  == prompts_dict['Loans']);
	if(trialNumber == 1){
		console.log(prompts_dict[$('input[name=promptCheck1]:checked').val()] == myData_test['prompts_test'][1]);
	}
	
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
	$("#done").html("Thanks for participating! Your answers will help shape the future of algorithmic fairness!");
	$("#done").show();
	subjectData.push({
		subjectId: subjectId,
		promptCheck1: prompts_dict[$('input[name=promptCheck1]:checked').val()] == myData_test['prompts_test'][1],
		promptCheck2: prompts_dict[$('input[name=promptCheck1]:checked').val()] == myData_test['prompts_test'][11],
		// attention: myData_test['datasets_test'][trialNumber][document.getElementById('trialSlider').value] == 0, //should be 0
		age: $('#age').val(),
		gender: $('input[name=gender]:checked').val(),
		thoughts: $('#thoughts').val(),
		strategies: $('#strategies').val(),
		userAgent: navigator.userAgent
		// trialList: trialData
	});

	// var dataToServer = {
	// 	id: subjectId,
	// 	experimenter: "choldawa",
	// 	experimentName: "PE_Pilot_1",
	// 	curData: JSON.stringify(subjectData)
	// };
	data = { client: client, subjectData: subjectData, trials: trialData };
	/* AJAX */
	writeServer(data);
	// $.post("https://psyc241.ucsd.edu/Turk/save.php", dataToServer);
};

function experimentDone() {
	submitExternal(client);

}