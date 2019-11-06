const initialState = [
    "Kamilah",
    "Stuart"
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;
    const newState = [...state]

    // Add a Name Tag
    if(type === 'ADD'){
        newState.push(action.name)
    }

    return newState;
}