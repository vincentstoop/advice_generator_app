const btn = document.querySelector('[data-get-advice]')
const adviceId = document.querySelector('[data-advice-id')
const adviceText = document.querySelector('[data-advice-text')

const fetchAdvice = async() => {
    try {
        const res = await fetch('https://api.adviceslip.com/advice')
        const data = await res.json()
        return data.slip
    } catch (err) {
        console.error(err);
    }
}

const setAdvice = async() => {
    let advice = await fetchAdvice()
    adviceId.textContent = advice.id
    adviceText.textContent = advice.advice
}

btn.addEventListener('click', setAdvice)
setAdvice()