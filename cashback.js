const inputNameEl = document.getElementById("name")
const inputPriceEl = document.getElementById("price")

const categoryEl = document.getElementById("category")

const buttonEl = document.getElementById("button")

const resultEl = document.getElementById("result")

buttonEl.addEventListener('click', () => {
    const name = inputNameEl.value
    const price = inputPriceEl.value
    const category = categoryEl.value

    let cashback = 0

    if (category === "apteca") {
        cashback = price * 0.3
    } else if (category === "food") {
        cashback = price * 0.05
    } else if (category === "car") {
        cashback = price * 0.01
    }
    let result = ''
    result = result + `<p>Наименование: ${name}</p>
                       <p>Категория: ${category}</p> 
                       <p>кешбэк: ${cashback}</p>`

    resultEl.innerHTML = result
})