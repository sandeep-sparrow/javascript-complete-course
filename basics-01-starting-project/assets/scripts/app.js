const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function createAndWriteLog(operator, resultBeforeCalculation, calcNumber){
    const calcDescription = `${resultBeforeCalculation} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription)
}

function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += parseInt(enteredNumber);
    createAndWriteLog('+', initialResult, enteredNumber);
}

function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= parseInt(enteredNumber);
    createAndWriteLog('-', initialResult, enteredNumber);;
}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= parseInt(enteredNumber);
    createAndWriteLog('*', initialResult, enteredNumber);
}

function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= parseInt(enteredNumber);
    createAndWriteLog('/', initialResult, enteredNumber);
}

// event listener
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
