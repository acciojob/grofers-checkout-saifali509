const button = document.querySelector("button");
const ans = document.getElementById("ans");

button.addEventListener("click", () => {
    const prices = document.querySelectorAll(".prices");
    let total = 0;

    prices.forEach(price => {
        total += Number(price.textContent);
    });

    ans.textContent = total;
});