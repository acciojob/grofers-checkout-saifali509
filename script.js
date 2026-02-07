const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Get Total Price";
document.body.appendChild(getSumBtn);

// Create answer element expected by Cypress
const ans = document.createElement("div");
ans.id = "ans";
document.body.appendChild(ans);

const getSum = () => {
    const prices = document.querySelectorAll(".prices");

    let total = 0;

    prices.forEach(price => {
        total += Number(price.textContent);
    });

    ans.textContent = total;
};

getSumBtn.addEventListener("click", getSum);