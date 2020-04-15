//Boto3 for bonuses (API) send_bonus function
//Generate series of prompts



var clickDisabled = true;


function pageLoad() {
	document.getElementById('consent').style.display = 'block';
	document.getElementById('demo').style.display = 'none';
}

function clickConsent() {
	document.getElementById('consent').style.display = 'none';
	document.getElementById('instructions').style.display = 'block';
	// disable next button
	document.getElementById("instructionButton").disabled = true;
     setTimeout(function(){
       document.getElementById("instructionButton").disabled = false;
     }, 4000);
}

function clickInstructions() {
	// disable next button
	document.getElementById("instructionsContButton").disabled = true;
     setTimeout(function(){
       document.getElementById("instructionsContButton").disabled = false;
     }, 5000);

	document.getElementById('instructions').style.display = 'none';
	console.log("Clicked instructions");
	document.getElementById('instructionsCont').style.display = 'block';

}

function clickInstructionsCont() {
	// disable next button
	document.getElementById("demoButton").disabled = true;
     setTimeout(function(){
       document.getElementById("demoButton").disabled = false;
     }, 5000);

	document.getElementById('instructionsCont').style.display = 'none';
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
	}, 1000);
	// var myData = jsPsych.randomization.sampleWithReplacement(dataArray,1)[0];
	document.getElementById('demo').style.display = 'none';
	console.log("Clicked instructions");
	document.getElementById('example').style.display = 'block';
}

function clickExample() {
	document.getElementById('example').style.display = 'none';
	// disable next button
	document.getElementById("next").disabled = true;
	setTimeout(function(){
	  document.getElementById("next").disabled = false;
	}, 1000);
	// var myData = jsPsych.randomization.sampleWithReplacement(dataArray,1)[0];
	trialStart();
}

function clickPrompt() {
	document.getElementById('prompt').style.display = 'none';
	if (trialNumber == 1){
		document.getElementById('promptCheck1').style.display = 'block';
	}else if(trialNumber == 11){
		document.getElementById('promptCheck2').style.display = 'block';
	}
	else{
		document.getElementById('trial').style.display = 'block';
	}
	
}
function clickPromptCheck1() {
	document.getElementById('promptCheck1').style.display = 'none';
	document.getElementById('trial').style.display = 'block';
}

function clickPromptCheck2() {
	document.getElementById('promptCheck2').style.display = 'none';
	document.getElementById('trial').style.display = 'block';
}