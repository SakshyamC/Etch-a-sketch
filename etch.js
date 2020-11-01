function gridCreater(n) {
  const container = document.querySelector('.container');
  container.style.display = 'grid';
  container.style.border = '1px solid black';
  container.style.gridTemplateColumns = `repeat(${n}, auto)`;
  container.style.gridTemplateRows = `repeat(${n}, auto)`;
  container.style.width = '640px';
  container.style.height = '640px';
  container.style.margin = 'auto';

  for (let i = 0; i < n ** 2; i++) {
    const child = document.createElement('div');
    child.style.border = '1px solid white';
    container.appendChild(child);

    child.addEventListener('mouseover', () => {
      if (document.querySelector("select").value === "black") {
        child.style.backgroundColor = "black";
      } else if (document.querySelector("select").value === "blue") {
        child.style.backgroundColor = "blue";
      } else if (document.querySelector("select").value === "green") {
        child.style.backgroundColor = "green";
      } else if (document.querySelector("select").value === "red") {
        child.style.backgroundColor = "red";
      } else {
        child.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
      }
    })
  }
}

function reset() {
  container.innerHTML = "";
  let x = parseInt(prompt("Enter a number between 1 and 100."));
  if (x >= 1 && x <= 100) {
    gridCreater(x);
  } else {
    reset();
  }
}

const button = document.querySelector(".reset");
const container = document.querySelector('.container');
button.addEventListener('click', reset);

const change = document.querySelector(".change");
change.addEventListener('click', () => {
  document.body.classList.toggle('theme')
})

gridCreater(16);
