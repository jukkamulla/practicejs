function createDivWithStyle(backgroundColor) {
    var div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.borderRadius = "50px";
    div.style.backgroundColor = backgroundColor;
    var paragraph = document.createElement("p");
    div.appendChild(paragraph);
    paragraph.innerHTML = backgroundColor;
    return div;
}

function createDivWithCssClass(cssClass) {
    var div = document.createElement("div");
    div.classList.add(cssClass);
    div.style.borderRadius = "50px";
    var paragraph = document.createElement("p");
    div.appendChild(paragraph);
    paragraph.innerHTML = cssClass;
    return div;
}

var yellowDiv = createDivWithCssClass("yellow");
var redDiv = createDivWithStyle("red");
var blueDiv = createDivWithStyle("blue");
var greenDiv = createDivWithStyle("green");
var test = document.getElementById("test");
test.appendChild(yellowDiv);
test.appendChild(redDiv);
test.appendChild(blueDiv);
test.appendChild(greenDiv);

