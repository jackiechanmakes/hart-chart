let refreshButton = document.getElementById("refresh-button");
refreshButton.addEventListener("click", getAlphaChars);

let table = document.getElementById("table");

let downloadButton = document.getElementById("download-button");
downloadButton.addEventListener("click", function() {
    let opt = {
        margin:       [90, 0],
        filename:     'test.pdf',
        // image:        { type: 'jpeg', quality: 1.00 },
        html2canvas:  { scale: 1, width: 1850, height: 900},
        jsPDF:        { unit: 'px', format: 'letter', orientation: 'landscape' }
      };

    html2pdf().set(opt).from(table).to('img').save();

});

// let button = document.getElementById("download-button");
// button.addEventListener("click", function () {
//     // let doc = new jsPDF("p", "mm", [300, 300]);
//         let doc = new jsPDF("p", "pt", 'a4');

//         doc.html(document.querySelector("#table"), {
//             callback: function(doc) {
//                 doc.save("HartChart.pdf");
//             },
//             margin: [60, 60, 60, 60],
//             x: 30,
//             y: 30
//         });
//     // let makePDF = document.querySelector("#table");

//     // fromHTML Method
//     // doc.fromHTML(makePDF);
//     // doc.save("output.pdf");
// });


function getAlphaChars() {
    let letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();

    for (let i = 0, row; row = table.rows[i]; i++) {
        for (let j = 0, col; col = row.cells[j]; j++) {
            col.innerText = letters.charAt(Math.floor(Math.random() * letters.length));
        }
    }
}
