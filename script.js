const fecha = document.querySelector("#fecha");
const lista = document.querySelector("#lista");
const input = document.querySelector("#input");
const botonEnter = document.querySelector("#enter");
const check = "ri-checkbox-circle-line";
const uncheck = "ri-circle-line";
const lineThrough = "line-through";
let id = 0;
const LIST = [];

const fechaActual = new Date();
fecha.innerHTML = fechaActual.toLocaleDateString("EN-EN", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

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

function tareaRealizada(element) {
  element.classList.toggle(check);
  element.classList.toggle(uncheck);
  element.parentNode.querySelector(".text").classList.toggle(lineThrough);
  LIST[element.id].realizado = LIST[element.id].realizado ? false : true;
}

function tareaEliminada(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  LIST[element.id].eliminado = true;
}
botonEnter.addEventListener("click", () => {
  const tarea = input.value;
  if (tarea) {
    agregarTarea(tarea, id, false, false);
    LIST.push({
      name: tarea,
      id: id,
      realizado: false,
      eliminado: false,
    });
  }
  input.value = "";
  id++;
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const tarea = input.value;
    if (tarea) {
      agregarTarea(tarea, id, false, false);
      LIST.push({
        name: tarea,
        id: id,
        realizado: false,
        eliminado: false,
      });
    }
    input.value = "";
    id++;
  }
});

lista.addEventListener("click", (e) => {
  const element = e.target;
  const elementData = element.attributes.data.value;
  if (elementData === "realizado") {
    tareaRealizada(element);
  }
  if (elementData === "eliminado") {
    tareaEliminada(element);
  }
});
