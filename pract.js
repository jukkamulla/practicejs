function createDivWithStyle(backgroundColor) {
    var div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "50px";
    div.style.backgroundColor = backgroundColor;
    return div;
}

function createDivWithCssClass(cssClass) {
    var div = document.createElement("div");
    div.classList.add(cssClass);
    return div;
}

var yellowDiv = createDivWithCssClass("yellow");
var redDiv = createDivWithStyle("red");
var blackDiv = createDivWithStyle("black");
var greenDiv = createDivWithStyle("green");
var test = document.getElementById("test");
test.appendChild(yellowDiv);
test.appendChild(redDiv);
test.appendChild(blackDiv);
test.appendChild(greenDiv);

