let randomNumber = Math.floor(Math.random() * 10) + 1
let attempt = 0

function gussed() {
    var guess = Number(document.getElementById('guess').value);
    var lowOrhigh = document.getElementById("lowOrhigh")
    attempt++;

    if (guess == randomNumber) {
        alert("congratulation! you gussed the correct number "+randomNumber+" in "+attempt+" attempts")
    }
    else if (guess < randomNumber) {
        lowOrhigh.textContent = "Too Low. Try again"
    }
    else if (guess > randomNumber) {
        lowOrhigh.textContent = "Too High. Try again"
    }
}
console.log(randomNumber)