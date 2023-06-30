let refreshButton = document.getElementById("refresh-button");
refreshButton.addEventListener("click", getAlphaChars);

let table = document.getElementById("table");

let downloadButton = document.getElementById("download-button");
downloadButton.addEventListener("click", function() {
    let mywindow = window.open("", "PRINT",
                "height=400,width=600");

    mywindow.document.write(table.innerHTML);

    mywindow.document.close();
    mywindow.focus();

    mywindow.print();
    mywindow.close();

    return true;
});

function getAlphaChars() {
    let letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();

    for (let i = 0, row; row = table.rows[i]; i++) {
        for (let j = 0, col; col = row.cells[j]; j++) {
            col.innerText = letters.charAt(Math.floor(Math.random() * letters.length));
        }
    }
}
