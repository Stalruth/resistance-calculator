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
    let w = 0;
    let b = 0;
    list.querySelectorAll('.input').forEach((el) => {
      console.log(el);
      w += Number(el.querySelector('.wincount').value);
      w += Number(el.querySelector('.tiecount').value) / 2;
      b += Number(el.querySelector('.wincount').value);
      b += Number(el.querySelector('.tiecount').value);
      b += Number(el.querySelector('.losscount').value);
    });
    result = (w * 100) / b;
    document.getElementById('resultpara').classList.remove("hide");
    document.getElementById('result').textContent = result.toFixed(2) + '%';
  }

  function setTies() {
    const show = document.getElementById('TCGMode').checked;
    console.log(show);
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
