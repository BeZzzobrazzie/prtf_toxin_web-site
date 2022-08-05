let field = document.querySelector(".dropdown__field");
let expand = document.querySelector(".dropdown__expand");
let list = document.querySelector(".dropdown__list");

field.addEventListener("click", dropdownHide);
list.addEventListener("click", quantityChange);

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

function quantityChange() {
    let target = event.target;
    if(target.classList.contains("dropdown__btn-count_minus")) {
        let dropdown__countGroup = target.closest(".dropdown__count-group");
        let dropdown__count = dropdown__countGroup.querySelector(".dropdown__count");
        if(dropdown__count.textContent == 99) {
            dropdown__countGroup.querySelector(".dropdown__btn-count_plus").classList.add("dropdown__btn-count_further");
        }
        if(dropdown__count.textContent > 0) {
            dropdown__count.textContent = + dropdown__count.textContent - 1;

            if(dropdown__count.textContent == 0) {
                target.classList.remove("dropdown__btn-count_further");
            }
            
        }
    }
    else if(target.classList.contains("dropdown__btn-count_plus")) {


        let dropdown__countGroup = target.closest(".dropdown__count-group");
        let dropdown__count = dropdown__countGroup.querySelector(".dropdown__count");
        if(dropdown__count.textContent == 0) {
            dropdown__countGroup.querySelector(".dropdown__btn-count_minus").classList.add("dropdown__btn-count_further");
        }
        if(dropdown__count.textContent < 99) {
            dropdown__count.textContent = + dropdown__count.textContent + 1;

            if(dropdown__count.textContent == 99) {
                target.classList.remove("dropdown__btn-count_further");
            }
            
        }
    }
}



