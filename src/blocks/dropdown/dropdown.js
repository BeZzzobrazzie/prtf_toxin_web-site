let field = document.querySelector(".dropdown__field");
let expand = document.querySelector(".dropdown__expand");
let list = document.querySelector(".dropdown__list");

field.addEventListener("click", dropdownHide);

function dropdownHide() {
    if(list.hidden) {
        list.hidden = false;
        expand.textContent = "expand_less";
        field.classList.toggle("dropdown__field_expanded");
    }
    else {
        list.hidden = true;
        expand.textContent = "expand_more";
        field.classList.toggle("dropdown__field_expanded");
    }
}





