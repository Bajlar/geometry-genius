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

// rhombus area calculate
document.getElementById('btn-rhombus').addEventListener('click', function() {
  serial++
  const elementParameter = document.getElementById('fourth-element').innerText;
  const itemBase = document.getElementById('rhombus-base-field').value;
  const itemHeight = document.getElementById('rhombus-height-field').value;
  const areaTotal = 0.5 * itemBase * itemHeight;
  displayData(elementParameter, areaTotal);
});

// pentagon area calculate
document.getElementById('btn-pentagon').addEventListener('click', function() {
  serial++
  const elementParameter = document.getElementById('fifth-element').innerText;
  const itemBase = document.getElementById('pentagon-parimeter-field').value;
  const itemHeight = document.getElementById('pentagon-base-field').value;
  const areaTotal = 0.5 * itemBase * itemHeight;
  displayData(elementParameter, areaTotal);
});

// ellipse area calculate
document.getElementById('btn-ellipse').addEventListener('click', function() {
  serial++
  const elementParameter = document.getElementById('sixth-element').innerText;
  const itemBase = document.getElementById('ellipse-aSide-field').value;
  const itemHeight = document.getElementById('ellipse-bSide-field').value;
  const areaTotal = (3.14 * itemBase * itemHeight).toFixed(2);
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