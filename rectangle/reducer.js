const initialState = {
    width: 100,
    height: 200,
    color: "#FF00FF"
};

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    // ACTION 1 - Increment height by 10
    if (type === "PLUS_10_HEIGHT"){
        const newState = {...state}
        newState.height += 10 
        return newState        
    }

    // ACTION 2 - Increment width by 10

    if (type === "PLUS_10_WIDTH"){
        const newState = {...state}
        newState.width += 10 
        return newState
    }

    // ACTION 3 - Change the color
    if (type === "CHANGE_COLOR"){
        return {...state, color: action.color}
    }

    return state;
}