const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 


const form = document.getElementById('nameForm')
const input = form.querySelector('input')
input.addEventListener('change', function(e){
    dispatch({type: "ADD", name: e.target.value})
})