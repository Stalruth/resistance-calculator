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
      b += Number(el.querySelector('.wincount').value) + Number(el.querySelector('.losscount').value);
    });
    result = (w * 100) / b;
    document.getElementById('resultpara').classList.remove("hide");
    document.getElementById('result').textContent = result.toFixed(2) + '%';
  }

  addItem();
  document.getElementById('add').addEventListener('click', addItem);
  document.getElementById('calculate').addEventListener('click', calculate);
}
