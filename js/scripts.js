//Business Logic

function roboOutput(number) {
    let three = "won't you be my neighbor?"
    let numArray = [];
    for (let i = 0; i <= number; i++) {
        if (i.toString().indexOf("3") !== -1) {
            numArray.splice(i, 1, three);
        } else {
            numArray.push(i);
        };
    };
    console.log(numArray)
};

//User Interface Logic

window.addEventListener("load", function () {
    let form = document.getElementById("num")
})
