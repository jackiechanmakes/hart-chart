let refreshButton = document.getElementById("refresh-button");
refreshButton.addEventListener("click", getAlphaChars);

let table = document.getElementById("table");

let downloadButton = document.getElementById("download-button");
downloadButton.addEventListener("click", function() {
    let opt = {
        margin:       [5, 7, 0, 0],
        filename:     'minhs-hart-chart.pdf',
        image:        { type: 'jpeg', quality: 1.00 },
        html2canvas:  { dpi: 200, scale: 5, width: 1050, height: 700},
        jsPDF:        { unit: 'px', format: 'letter', orientation: 'landscape' }
      };

    html2pdf().set(opt).from(table).save();

});

function getAlphaChars() {
    let letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();

    for (let i = 0, row; row = table.rows[i]; i++) {
        for (let j = 0, col; col = row.cells[j]; j++) {
            col.innerText = letters.charAt(Math.floor(Math.random() * letters.length));
        }
    }
}
