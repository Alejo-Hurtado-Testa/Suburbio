const listaCombos = document.querySelector('#listcombos');

const listarCombos = (datos) => {
  const combos = datos;
  combos.forEach((element) => {
    const { nombre, img, descripcion } = element;
    return (listaCombos.innerHTML += `
        <div class="item-combo">
                <div class="item-descripcion">
                  <h2 class="combo-name">${nombre}</h2>
                  <p class="combo-descripcion">
                    ${descripcion}
                  </p>
                  <button class="btn-combo">Reservar</button>
                </div>
                <img
                  src=${img}
                  alt="Logo"
                  class="combo-img"
                />
              </div>
        `);
  });
};

fetch('../assets/combosList.json')
  .then((res) => res.json())
  .then((data) => listarCombos(data));
/*
async function pedirCombos() {
  try {
    const res = await fetch('../assets/combosList.json');
    const data = await res.json();
    return data;
  } catch (error) {
    return [];
  }
}

listarCombos();
*/
