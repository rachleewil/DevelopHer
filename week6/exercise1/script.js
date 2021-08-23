function main() {
    const q1 = document.getElementById("grow-me");
    q1.classList.add("big");

    const q2 = document.getElementById("shrink-me");
    q2.classList.remove("big");

    const lis = document.querySelectorAll("li");
    // lis.forEach(li => console.log(li.innerText));
        for (let li of lis) {
            console.log(li.innerText);
        }

    const a = document.querySelector(".link");
    a.setAttribute("href", "http://www.exmple.com");
    a.innerText = "somewhere";

    const hide = document.getElementById("hide-me");
    hide.style.display = "none";

    const show = document.getElementById("show-me");
    show.style.display = "block";

    const input = document.getElementById("name").value;
    const h1 = document.querySelector("h1");
    h1.innerText = `Welcome ${input}!`;

}