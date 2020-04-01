// experiment settings
var expt = {
	name: 'Practical_Ethics',
	maxTrials: 10,
	debug: true,
	rmse_threshold: 0.5,
	rmse_match: 'color',
	saveURL: 'https://experiments.evullab.org/PE/submit.simple.php',
	sona: {
		experiment_id: 1452,
		credit_token: '9d0ca45d8f504f9488471a03f293f221'
	}
};


function debugLog(message) {
	if (expt.debug) {
		console.log(message);
	}
}