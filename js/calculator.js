const Calculator = (() => {
    const state = {
      display: "0",
      operator: null,
      firstVal: null,
      secondVal: false
    };
  
    const buttons = document.querySelector(".buttons");
  
    const init = () => {
      render();
      listeners();
    };
  
    const render = () => {
      const displayData = document.querySelector(".display");
      displayData.value = state.display;
    };
    render();
  
    const listeners = () => {
      buttons.addEventListener("click", onBtnClick);
    };
    const onBtnClick = event => {
      const target = event.target;
  
      if (!target.matches("button")) {
        return; //only target a button clicked
      }
      if (target.classList.contains("btn__operator")) {
        inputOperator(target.value);
        render();
        return;
      }
      if (target.classList.contains("btn__decimal")) {
        inputDecimal(target.value);
        render();
        return;
      }
      if (target.classList.contains("clear")) {
        resetCalculator();
        render();
        return;
      }
  
      inputNumber(target.value);
      render();
    };
  
    const inputNumber = digit => {
      if (state.secondVal === true) {
        state.display = digit;
        state.secondVal = false;
      } else {
        state.display = state.display === "0" ? digit : state.display + digit;
      }
      console.log(state);
    };
  
    const inputDecimal = decimal => {
      state.display + decimal;
    };
  
    const inputOperator = operator => {
      debugger;
      //convert display value to integer once a operator button is pressed
      const inputValue = parseInt(state.display);
  
      //store value in firstVal if null
      if (state.firstVal === null) {
        state.firstVal = inputValue;
      } else if (state.operator) {
        const result = calculateResult(state.firstVal, inputValue);
        state.display = result;
      }
  
      //await second value once operator button is pressed
      state.secondVal = true;
      state.operator = operator;
      console.log(state);
    };
  
    const calculateResult = (firstValue, secondValue) => {
      if (state.operator === "*") {
        return firstValue * secondValue;
      }
      if (state.operator === "/") {
        return firstValue * secondValue;
      }
      if (state.operator === "+") {
        return firstValue * secondValue;
      }
      if (state.operator === "-") {
        return firstValue * secondValue;
      }
    };
  
    const resetCalculator = () => {
      state.display = "0";
      state.operator = null;
      state.firstVal = null;
      state.secondVal = false;
    };
  
    return {
      init
    };
  })();
  
Calculator.init();
  