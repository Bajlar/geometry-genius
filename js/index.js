// triangle area calculate
let serial = 0;
document.getElementById('btn-triangle').addEventListener('click', function() {
  serial++
  const elementParameter = document.getElementById('first-element').innerText;
  const itemBase = document.getElementById('triangle-base-input').value;
  const itemHeight = document.getElementById('triangle-height-input').value;
  const areaTotal = 0.5 * itemBase * itemHeight;
  displayData(elementParameter, areaTotal);
});

// rectangle area calculate
document.getElementById('btn-rectangle').addEventListener('click', function() {
  serial++
  const elementParameter = document.getElementById('second-element').innerText;
  const itemBase = document.getElementById('rectangle-width-field').value;
  const itemHeight = document.getElementById('rectangle-lenght-field').value;
  const areaTotal = itemBase * itemHeight;
  displayData(elementParameter, areaTotal);
});

// parallelogram area calculate
document.getElementById('btn-parallelogram').addEventListener('click', function() {
  serial++
  const elementParameter = document.getElementById('third-element').innerText;
  const itemBase = document.getElementById('parallelogram-base-field').value;
  const itemHeight = document.getElementById('parallelogram-height-field').value;
  const areaTotal = itemBase * itemHeight;
  displayData(elementParameter, areaTotal);
});

// commom function display show the data
function displayData(elementParameter, areaTotal) {
  const tableContainer = document.getElementById('table-container');
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${serial}</td>
    <td>${elementParameter}</td>
    <td>${areaTotal}cm<sup>2</sup></td>
    <td><button class="btn btn-primary text-white fw-bold">Convert</button></td>
  `
  tableContainer.appendChild(tr);
}