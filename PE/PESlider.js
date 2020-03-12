
function sliderChange(val) {
	// document.getElementById('sliderVal').innerHTML = val;
	// const { a, w, b, h } = LookupApprovalPercent(val);
	// document.getElementById('asianVal').innerHTML = a; 
	// document.getElementById('whiteVal').innerHTML = w;
	// document.getElementById('hispanicVal').innerHTML = b;
	// document.getElementById('blackVal').innerHTML = h;
	generateDots(fullSet, myData[val].asian, 1);
	generateDots(fullSet, myData[val].white, 2);
	generateDots(fullSet, myData[val].hispanic, 3);
	generateDots(fullSet, myData[val].black, 4);
	generateDots(fullSet, myData[val].mu, 5);
	// document.getElementById('total').innerHTML = Math.round((myData[val].black+myData[val].hispanic+myData[val].white+myData[val].asian)/2);
}


//Not being used
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


