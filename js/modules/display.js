const Display = (() => {

    const state = {
        display: '0',
        operator: null,
        firstVal: null,
        secondVal: false
    }

    const buttons = document.querySelector('.buttons');
    
    const init = () => {
        render();
        listeners();
    }

    const render = () => {
      const displayData = document.querySelector('.display');
      displayData.value = state.display;
    }
    render();

    const listeners = () => {
      buttons.addEventListener('click', onBtnClick)
    }
    const onBtnClick = (event) => {
      const target = event.target;

      if(!target.matches('button')){
        return; //only target a button clicked
      }
      if(target.classList.contains('btn__operator')) {
        inputOperator(target.value);
        render();
        return;
      }
      if(target.classList.contains('btn__decimal')) {
        inputDecimal(target.value)
        render();
        return
      }
      //clear button....

      inputNumber(target.value);
      render();
    }

    const inputNumber = digit => {
      if(state.secondVal === true){
        state.display = digit;
        state.secondVal = false;
      } else {
        state.display = state.display === '0' ? digit : state.display + digit;
      }
      console.log(state);
    }
    
    const inputDecimal = decimal => {
      state.display + decimal;
    }

    const inputOperator = operator => {
      //convert display value to integer once a operator button is pressed
      const inputValue = parseInt(state.display)

      //store value in firstVal if null
      if(state.firstVal === null) {
        state.firstVal = inputValue;
      }
      //else if... calculate result..

      //await second value once operator button is pressed
      state.secondVal = true;
      state.operator = operator
    }
    
    return {
        init
    }
})();

export default Display;