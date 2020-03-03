

var fullSet = 100

function generateDots(fullSet,val, group){
    var dots = [] //create empty array to be filled with dots
	var htmlElements = "";
    for (var i = 0; i < val; i++) { // create the list of dots
        var dot = document.createElement('img'); 
        dot.src =  'silhouette'+group+'.svg';  
        dot.style.width = "1%";
        dot.style.height = "1%";
        dots.push(dot);
    }
    for (var i = val; i < fullSet; i++) { // create the list of dots
        var dot = document.createElement('img'); 
        dot.src =  'silhouette0.svg'; 
        dot.style.width = "1%";
        dot.style.height = "1%";
        dots.push(dot);
        
    }
    document.getElementById("container"+group).innerHTML = ""; //clear the div
    var container = document.getElementById("container"+group); 
    for (var i = 0; i < fullSet; i++) { // loop through the list of dots
        dot = dots[i];
        container.appendChild(dot);
    }
    
}
