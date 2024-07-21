const fecha = document.querySelector("#fecha");
const lista = document.querySelector("#lista");
const input = document.querySelector("#input");
const botonEnter = document.querySelector("#enter");
const check = "ri-checkbox-circle-line";
const uncheck = "ri-circle-line";
const lineThrough = "line-through";
const id = 0;

// Función para agregar un nuevo elemento a la lista
function agregarTarea(tarea, id, realizado, eliminado) {
  const REALIZADO = realizado ? check : uncheck;
  const LINE = realizado ? lineThrough : "";

  if (eliminado) {
    return;
  }
  const elemento = `<li id="elemento">
            <i class="${REALIZADO}" data="realizado" id="${id}"></i>
            <p class="text ${LINE}">${tarea}</p>
            <i class="ri-delete-bin-5-fill" data="eliminado" id="${id}"></i>
          </li>`;
  lista.insertAdjacentHTML("beforeend", elemento);
}

botonEnter.addEventListener("click", () => {
  const tarea = input.value;
  if (tarea) {
    agregarTarea(tarea, id, false, false);
    input.value = "";
    id++;
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const tarea = input.value;
    if (tarea) {
      agregarTarea(tarea, id, false, false);
      input.value = "";
      id++;
    }
  }
});