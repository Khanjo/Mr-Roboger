//Business Logic

let numArray = [];

function roboOutput(input) {
    let three = "won't you be my neighbor?";
    let two = "boop";
    let one = "beep";
    for (let i = 0; i <= input; i++) {
        if (i.toString().indexOf("3") !== -1) {
            numArray.splice(i, 1, three);
        } else if (i.toString().indexOf("2") !== -1) {
            numArray.splice(i, 1, two);
        } else if (i.toString().indexOf("1") !== -1) {
            numArray.splice(i, 1, one);
        } else {
            numArray.push(i);
        }
    };
};

//User Interface Logic

window.addEventListener("load", function () {
    let form = document.querySelector("form");
    let output = document.getElementById("output")
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let input = parseInt(document.getElementById("num").value);
        roboOutput(input);
        output.innerText = numArray;
        form.reset();
    });
});
