{
  // tie/draw = half
  function deleteItem(e) {
    e.target.parentNode.parentNode.remove()
  }

  function addItem() {
    const template = document.getElementById('listItem');
    const list = document.getElementById('listing');
    const newItem = document.importNode(template.content, true);
    newItem.querySelector('.alert.button').addEventListener('click', deleteItem);
    list.appendChild(newItem);
  }

  function calculate() {
    const list = document.getElementById('listing');
    const resistance = Array.from(list.querySelectorAll('.input')).map((el) => {
      const wins = Number(el.querySelector('.wincount').value);
      const ties = Number(el.querySelector('.tiecount').value);
      const losses = Number(el.querySelector('.losscount').value);
      return (wins + (ties / 2))/(wins + ties + losses);
    }).reduce((acc, cur, ind) => {
      console.log({acc, cur, ind});
      return ((acc * ind) + cur) / (ind + 1)
    });
    document.getElementById('resultpara').classList.remove("hide");
    document.getElementById('result').textContent = (resistance * 100).toFixed(2) + '%';
  }

  function setTies() {
    const show = document.getElementById('TCGMode').checked;
    if(show) {
      document.body.classList.add('ties');
    } else {
      document.body.classList.remove('ties');
    }
  }

  addItem();
  setTies();
  document.getElementById('add').addEventListener('click', addItem);
  document.getElementById('calculate').addEventListener('click', calculate);
  document.getElementById('TCGMode').addEventListener('input', setTies);
}
