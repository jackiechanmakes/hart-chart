let refreshButton = document.getElementById("refresh-button");
refreshButton.addEventListener("click", getAlphaChars);

let table = document.getElementById("table");

function getAlphaChars() {
    let letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();

    for (let i = 0, row; row = table.rows[i]; i++) {
        for (let j = 0, col; col = row.cells[j]; j++) {
            col.innerText = letters.charAt(Math.floor(Math.random() * letters.length));
        }
    }
}
