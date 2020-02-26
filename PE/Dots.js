// var fullSet = 100

// function generateDots(fullSet,val){
//     var dots = [] //create empty array to be filled with dots
// 	var htmlElements = "";
//     for (var i = 0; i < val; i++) { // create the list of dots
//         dot = document.createElement("span");
//         text_dot = document.createTextNode("B");
//         dot.appendChild(text_dot);
//         dots.push(dot);
//     }
//     for (var i = val; i < fullSet; i++) { // create the list of dots
//         dot = document.createElement("span");
//         text_dot = document.createTextNode("A");
//         dot.appendChild(text_dot);
//         dots.push(dot);
//     }
//     document.getElementById("container1").innerHTML = ""; //clear the div
//     var container1 = document.getElementById("container1"); 
//     for (var i = 0; i < fullSet; i++) { // loop through the list of dots
//         dot = dots[i];
//         container1.appendChild(dot);
//     }
    
// }



var fullSet = 50

function generateDots(fullSet,val, group){
    var dots = [] //create empty array to be filled with dots
	var htmlElements = "";
    for (var i = 0; i < val/2; i++) { // create the list of dots
        var dot = document.createElement('img'); 
        dot.src =  'silhouette'+group+'.svg';  
        dot.style.width = "20px";
        dot.style.height = "20px";
        dot.style.color = "red";
        dots.push(dot);
    }
    for (var i = val/2; i < fullSet; i++) { // create the list of dots
        var dot = document.createElement('img'); 
        dot.src =  'silhouette0.svg'; 
        dot.style.width = "20px";
        dot.style.height = "20px";
        dot.style.color = "red";
        dots.push(dot);
        
    }
    document.getElementById("container"+group).innerHTML = ""; //clear the div
    var container = document.getElementById("container"+group); 
    for (var i = 0; i < fullSet; i++) { // loop through the list of dots
        dot = dots[i];
        container.appendChild(dot);
    }
    
}
