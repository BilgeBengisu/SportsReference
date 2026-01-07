// creating Data type definitiens
type WinRecord = {
  W: number;
};

type TeamRecords = {
  [opponent: string]: WinRecord;
};

type Data = {
  [team: string]: TeamRecords;
};

// loop through data and create table
async function renderTable() {
    const response = await fetch("data.json");
    const data: Data = await response.json();
    const teams = Object.keys(data);
    const table = document.getElementById("records") as HTMLTableElement;

    // Header rows
    const header = table.insertRow();
    header.insertCell().textContent = "Tm";

    teams.forEach(team => {
        header.insertCell().textContent = team;
    });

    // Body rows
    teams.forEach(rowTeam => {
        const row = table.insertRow();
        row.insertCell().textContent = rowTeam;

        teams.forEach(colTeam => {
            const cell = row.insertCell();

            // if diagonal cell, fill with "--"
            if (rowTeam === colTeam) {
            cell.textContent = "--";
            } else {
            // using Win record from each team to fill all the rows - no losses data needed
            const { W } = data[rowTeam][colTeam];
            cell.textContent = `${W}`;
            }
        });
    });
}

renderTable();
