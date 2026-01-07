var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function renderTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("data.json");
        const data = yield response.json();
        const teams = Object.keys(data);
        const table = document.getElementById("records");
        // Header row
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
                if (rowTeam === colTeam) {
                    cell.textContent = "--";
                }
                else {
                    const { W } = data[rowTeam][colTeam];
                    cell.textContent = `${W}`;
                }
            });
        });
    });
}
renderTable();
