const elements = document.querySelectorAll('.container__calculator__btn');
const display = document.querySelector('.cocontainer__calculator__display');

elements.forEach((item) => {
    item.addEventListener('click', () => {
        if (item.innerText === 'C') {
            display.innerText = '';
            return null;
        }
        if (item.innerText === '=') {
            oblicz();
            return null;
        }
        display.textContent += item.innerText;
    });
});

const oblicz = () => {
    const dispValue = display.innerText;
  
    // Rozpoznawanie operatorów
    const operators = dispValue.match(/[+\-*/]/g);
  
    // Rozdzielanie argumentów
    const args = dispValue.split(/[+\-*/]/g).map(Number);
  
    // Wykonanie pierwszej operacji
    let result = args[0];
    for (let i = 0; i < operators.length; i++) {
      switch (operators[i]) {
        case '+':
          result += args[i+1];
          break;
        case '-':
          result -= args[i+1];
          break;
        case '*':
          result *= args[i+1];
          break;
        case '/':
          result /= args[i+1];
          break;
      }
    }
  
    display.innerText = result;
  };
  
