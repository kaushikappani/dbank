import { dbank } from "../../declarations/dbank";

window.addEventListener("load", async() => {
    await fetchBal();
})

const fetchBal = async() => {
    try {
        const currentBal = await dbank.checkBal();
        console.log(currentBal);
        document.getElementById("value").innerText = currentBal;
    } catch (error) {
        console.error("Error during query:", error);
    }
}

document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const button = document.querySelector("#submit-btn");
    console.log(button);
    button.setAttribute("disabled", true);
    button.classList.add("disabled");
    console.log(button);
    const inputAmount = parseFloat(document.getElementById("input-amount").value);
    const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);
    button.removeAttribute("disabled");
    if (document.getElementById("input-amount").value.length != 0) {
        await dbank.topUp(inputAmount);
        await fetchBal();
    }

    if (document.getElementById("withdrawal-amount").value.length != 0) {
        await dbank.withDraw(outputAmount);
        await fetchBal();
    }

})