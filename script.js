let refreshButton = document.getElementById("refresh-button");
refreshButton.addEventListener("click", getAlphaChars);

let table = document.getElementById("table");

function getAlphaChars() {
    let result = '';
    let letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    let count = 100;

    while (0 < count) {
        result += letters.charAt(Math.floor(Math.random() * letters.length));
        result += '     ';
        count--;
        if (count % 10 === 0) {
            result += '\n';
        }
    }

    document.getElementById("letters-div").innerText = result;
    return result;
}
