const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 
document.addEventListener('click', function(e){
    const id = e.target.getAttribute('id')
    if (id === 'card1Button'){
        dispatch({type: "ADD", cardNumber: 0})
    }
    if (id === 'card2Button'){
        dispatch({type: "ADD", cardNumber: 1})
    }
})