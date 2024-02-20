import { validate, getData, createRow } from "./function.js";
const name = document.getElementById("name");
const button = document.getElementById("button");
const tbody = document.getElementById("tbody");
const from = document.getElementById("from");
button &&
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const isValid = validate(name);
    if (isValid) {
      const todo = {
        name: name.value,
        status: "todo",
        id: Deta.now(),
      };
      let todos = getData();
      todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(todo));
      form.reset();

      let tr = createRow(todo, todos.length);
      tbody.innerHTML += tr;
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  let todos = getData();
  if (todos.length) {
    todos.forEach(todo, (index) => {
      let tr = createRow(todos, index + 1);
      tbody.innerHTML += tr;
    });
  }

  const deleteButtons = document.querySelectorAll("i.fa-trash-can");

  if (deleteButtons.length) {
    deleteButtons.forEach((del) => {
      del &&
        del.addEventListener("click", function (e) {
          e.preventDefault();
          let isDelete = confirm(
            "Rostdan ham bu ma'lumotdi o'chirmoqchimisiz?"
          );
          let id = this.getAttribute("deta-id");
          if (isDelete && id) {
            todos = todos.filter((todo) => {
              return todo.id != id;
            });
            localStorage.setItem("todos", JSON.stringify(todos));
            window.location.reload();
          }
        });
    });
  }
});
