const { createStore } = Redux
const { subscribe, dispatch, getState } = createStore(reducer)

subscribe(() => render(getState()))

dispatch({ type: null }) // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store

document.addEventListener('click', function (e) {
  const id = e.target.getAttribute('id')
  switch (id) {
    case 'sortLikes':
      dispatch({ type: 'SORT_LIKES' })
      break
    case 'sortRetweets':
      dispatch({ type: 'SORT_RETWEETS' })
      break
    case 'sortReplies':
      dispatch({ type: 'SORT_REPLIES' })
      break
    default:
        break
  }
})
