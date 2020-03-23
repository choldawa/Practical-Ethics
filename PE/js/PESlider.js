
function sliderChange(val) {
	// document.getElementById('sliderVal').innerHTML = val;
	// const { a, w, b, h } = LookupApprovalPercent(val);
	// document.getElementById('asianVal').innerHTML = a; 
	// document.getElementById('whiteVal').innerHTML = w;
	// document.getElementById('hispanicVal').innerHTML = b;
	// document.getElementById('blackVal').innerHTML = h;
	generateDots(fullSet, myData_test['datasets_test'][trialNumber][val].asian, 1);
	generateDots(fullSet, myData_test['datasets_test'][trialNumber][val].white, 2);
	generateDots(fullSet, myData_test['datasets_test'][trialNumber][val].hispanic, 3);
	generateDots(fullSet, myData_test['datasets_test'][trialNumber][val].black, 4);
	generateDots(fullSet, myData_test['datasets_test'][trialNumber][val].mu, 5);
	document.getElementById('next').disabled=false;
	// document.getElementById('total').innerHTML = Math.round((myData[val].black+myData[val].hispanic+myData[val].white+myData[val].asian)/2);
}


// //Not being used
// function calculateThreshold(val) {
// 	return {
// 		'a':  myData[0][val].asian,
// 		'w': myData[0][val].white,
// 		'b': myData[0][val].black,
// 		'h': myData[0][val].hispanic,
// 	}
// }

// function LookupApprovalPercent(val) {
// 	const approvals = calculateThreshold(val);
// 	// do stuff based on the treshold
// 	// determine where the bars are for each distribution using default rate
// 	//calculate 1-cdf to get the approval rate
// 	// return { a, w, h, b }
// 	return approvals;
// }


