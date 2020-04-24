// experiment settings
var expt = {
	name: 'Practical_Ethics',
	maxTrials: 10,
	debug: true,
	rmse_threshold: 0.5,
	rmse_match: 'color',
	saveURL: 'https://experiments.evullab.org/PE/submit.simple.php',
	sona: {
		experiment_id: 1814,
		credit_token: '8adb3035e40c4a07b9be9d24519a0b6c' 
	}
};

// https://ucsd.sona-systems.com/services/SonaAPI.svc/WebstudyCredit?experiment_id=1814&credit_token=8adb3035e40c4a07b9be9d24519a0b6c&survey_code=XXXX
// https://ucsd.sona-systems.com/webstudy_credit.aspx?experiment_id=1814&credit_token=8adb3035e40c4a07b9be9d24519a0b6c&survey_code=XXXX
function debugLog(message) {
	if (expt.debug) {
		console.log(message);
	}
}