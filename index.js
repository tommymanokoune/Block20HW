let bank = [];
const inputNumber = document.querySelector("input");
const submit = document.querySelector("#submit");
const numBank = document.getElementById("numberBank").querySelector("output");
const sortOne = document.getElementById("sortOne");
const sortAll = document.getElementById("sortAll");
const odd = document.getElementById("odds").querySelector("output");
const even = document.getElementById("evens").querySelector("output");
submit.addEventListener("click", (event) => {
    event.preventDefault();
    numBank.innerText = "";
    bank.push(inputNumber.value);
    numBank.innerText = bank;
});
sortOne.addEventListener("click", () => {
    if (bank.length !== 0) {
        let popped = bank.pop(); 
        if (popped % 2 === 0) {
            even.append(popped + ",");
        } else {
            odd.append(popped + ",");
        }
        numBank.innerText = bank;
    }
});
sortAll.addEventListener("click", () => {
    if (bank.length !== 0) {
        for (let num of bank) {
            if (num % 2 === 0) {
                even.append(num + ",");
            } else {
                odd.append(num + ",");
            }
        }
        bank = [];
        numBank.innerText = "";
    }
});
