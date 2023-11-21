const checkBtn = document.querySelector("button");
const reservations = {
  bob: { claimed: false },
  ted: { claimed: true },
};

const table = document.createElement("table");
// const titleRow = document.createElement("tr");
// titleRow.innerHTML = "<th>Name</th><th>Claimed</th>";
// table.append(titleRow);
document.body.append(table);

const fillTable = () => {
  table.innerHTML = "<th>Name</th><th>Claimed</th>";
  for (let name of Object.keys(reservations)) {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${name}</td><td>${reservations[name].claimed}</td`;
    table.append(row);
  }
};

fillTable();

checkBtn.addEventListener("click", () => {
  const name = document.querySelector("input").value.toLowerCase();
  if (reservations[name]) {
    reservations[name].claimed
      ? console.log("Hmm, someone already claimed this reservation")
      : console.log(`Welcome ${name}`);
  } else {
    console.log(`Sorry ${name}, nothing under your name`);
    reservations[name] = { claimed: true };
  }
  fillTable();
});
