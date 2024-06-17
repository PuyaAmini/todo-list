const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

// adding new tasks to the list:
const li_generator = (todo) => {
  const li_html = `<li>
          <span>${todo}</span>
          <img class="delete" src="./src/delete.png" alt="delete" />
        </li>`;
  list.innerHTML += li_html;
};
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    li_generator(todo);
    addForm.reset();
  }
});

//delete todos:
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// search and filter:
const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLocaleLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLocaleLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};
search.addEventListener("keyup", () => {
  const term = search.value.toLocaleLowerCase().trim();
  filterTodos(term);
});

// next issue :
// just show the results of search
//when submit search
