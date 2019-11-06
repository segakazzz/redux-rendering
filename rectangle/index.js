const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({type: null}); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 
document.addEventListener('click', function(e){
    const id = e.target.getAttribute('id')
    if (id === 'height'){
        dispatch({type: 'PLUS_10_HEIGHT'})
    }
    if (id === 'width'){
        dispatch({type: 'PLUS_10_WIDTH'})
    }
    if (id === 'red' || id === 'blue'){
        dispatch({type: 'CHANGE_COLOR', color: id})
    }
})

