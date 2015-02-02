
function createDivWithCssClass(cssClass) {
    var div = document.createElement("div");
    div.classList.add(cssClass);
    var paragraph = document.createElement("p");
    div.appendChild(paragraph);
    paragraph.innerHTML = cssClass;
    return div;
}

var dimension = 2;
var value = 0;
function dotsTable() {
    for (var i = 0; i < dimension; i++) {
        for (var j = 0; j < dimension; j++) {
            value ++;
            var yellowDiv = createDivWithCssClass("yellow");
            var redDiv = createDivWithCssClass("red");
            var blueDiv = createDivWithCssClass("blue");
            var greenDiv = createDivWithCssClass("green");
            var test = document.getElementById("test");
            test.appendChild(yellowDiv);
            test.appendChild(redDiv);
            test.appendChild(blueDiv);
            test.appendChild(greenDiv);
        }
    }
}
dotsTable();

function clickFunction() {
    document.getElementById("click").innerHTML = "^_^";
    document.getElementsByClassName("yellow")[0].innerHTML = "^_^";
}
