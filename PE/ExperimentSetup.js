//Boto3 for bonuses (API) send_bonus function
//Generate series of prompts

var prompts = ['Prompt 1', 'Prompt 2', 'Prompt 3'];
var promptsShuffled = jsPsych.randomization.shuffle(prompts); //use the shuffled array

var clickDisabled = true;


function pageLoad() {
	document.getElementById('consent').style.display = 'block';
}

function clickConsent() {
	document.getElementById('consent').style.display = 'none';
	document.getElementById('instructions').style.display = 'block';
	// disable next button
	document.getElementById("instructionButton").disabled = true;
     setTimeout(function(){
       document.getElementById("instructionButton").disabled = false;
     }, 1000);
}

function clickInstructions() {
	// disable next button
	document.getElementById("demoButton").disabled = true;
     setTimeout(function(){
       document.getElementById("demoButton").disabled = false;
     }, 1000);

	document.getElementById('instructions').style.display = 'none';
	console.log("Clicked instructions");
	document.getElementById('demo').style.display = 'block';

}

function clickDemo() {
	console.log("checkDemo");
	document.getElementById('demo').style.display = 'none';
	// disable next button
	document.getElementById("next").disabled = true;
	setTimeout(function(){
	  document.getElementById("next").disabled = false;
	}, 500);
	trialStart();
}