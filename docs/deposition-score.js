const sheet = document.querySelector("#blind-scores");
const totals = sheet.tFoot.querySelectorAll("td");
const columns = ["A", "B", "C"];
for (const row of sheet.tBodies[0].rows) {
  for (const [index, label] of columns.entries()) {
    const select = document.createElement("select");
    select.setAttribute("aria-label", `Outline ${label}, ${row.cells[0].textContent}`);
    select.add(new Option("—", ""));
    for (const score of [0, 1, 2]) select.add(new Option(String(score), String(score)));
    row.insertCell().append(select);
    select.addEventListener("change", () => {
      const inputs = [...sheet.tBodies[0].rows].map(r => r.cells[index + 1].querySelector("select").value);
      totals[index].textContent = inputs.includes("") ? "—" : String(inputs.reduce((n, value) => n + Number(value), 0));
    });
  }
}
