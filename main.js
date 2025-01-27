import './style.css'






const calcule = () => {

    const display = document.querySelector('#display-calcu')
    const buttons = document.querySelectorAll('.button')
    
    
    display.value = 0
    display.addEventListener('click', () => {
        display.value = 0
    })
    
    buttons.forEach(button => {
    button.addEventListener("click", () => {
        let pressedButton = button.textContent;

        if (button.id === "equal") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error';
            }
            return;
        }
        
        if (display.value.length >= 13) {
            return;
        }
        
        if (pressedButton === "x") {
            display.value += "*"
            return
        }
        
        if (display.value === '0' || display.value === 'Error') {
            display.value = pressedButton
        } else {
            display.value += pressedButton;
        }

        
    })
})
}

window.addEventListener('DOMContentLoaded', calcule)