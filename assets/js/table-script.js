const table = document.getElementById("table");

    table.addEventListener("mouseover", function (e) {
        const cell = e.target.closest("td, th");
        if (!cell) return;
        const colIndex = cell.cellIndex;

        if (colIndex === 0) return;

        for (let row of table.rows) {
        if (row.cells[colIndex]) {
            row.cells[colIndex].classList.add("highlight");
        }
    }
});

table.addEventListener("mouseout", function (e) {

    const cell = e.target.closest("td, th");

    if (!cell) return;
        const colIndex = cell.cellIndex;

    if (colIndex === 0) return;

    for (let row of table.rows) {
        if (row.cells[colIndex]) {
            row.cells[colIndex].classList.remove("highlight");
        }
    }
});