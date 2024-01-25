const listaCombos = document.querySelector("#listcombos");

const listarCombos = async () => {
  const combos = await pedirCombos();
  combos.forEach((element) => {
    const { nombre, img, descripcion } = element;
    return (listaCombos.innerHTML += `
        <div class="item-combo">
                <div class="item-descripcion">
                  <h2 class="combo-name">${nombre}</h2>
                  <p class="combo-descripcion">
                    ${descripcion}
                  </p>
                  <a href="https://api.whatsapp.com/send?phone=5493534797881&text=Hola!+Me+gustaria+reservar+el+combo:+${nombre}!" target="_blank" class="btn-combo">Reservar</a>
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

async function pedirCombos() {
  try {
    const res = await fetch("../assets/combosList.json");
    const data = await res.json();
    return data;
  } catch (error) {
    return [];
  }
}

listarCombos();
