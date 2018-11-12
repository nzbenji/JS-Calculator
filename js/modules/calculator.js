const Calculator = (() => {

    const state = {
        display: '0',
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

    const listeners = () => {
      buttons.addEventListener('click', onBtnClick)
    }
    const onBtnClick = (event) => {
      const target = event.target;

      if(target.matches('button')){
        console.log('gdf')
      }
      if(target.classList.contains('btn__operator')) {
        console.log(target.value, 'operator')
      }
      if(target.classList.contains('btn__decimal')) {
        console.log('decimal')
      }
      render();
    }
    const valueInput = () => {

    }
    
    return {
        init
    }
})();

export default Calculator;