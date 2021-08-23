"use scrict";
const form = document.getElementById("money");
form.addEventListener("submit", submitForm);
let id = 0;

function submitForm(event) {
    event.preventDefault();
    const data = new FormData(form);
    let how_many = data.get("how_many");
    let which_coin = data.get("which_coin");
    addCoins(how_many, which_coin)
}

function addCoins(count, coin) {
    for(let i = 0; i < count; i++) {
        const c = document.createElement("span");
        const classes = [`${coin}`, "coin"];
        c.id = id;
        id++;
        c.addEventListener("click", removeCoin);
        c.classList.add(...classes);
        c.innerText = coin;
        document.getElementById("output").appendChild(c);
    }
}

function removeCoin(event) {
    console.log(event.target.id);
    const coinToRemove = document.getElementById(event.target.id);
    coinToRemove.remove();
}