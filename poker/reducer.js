const initialState = [
    {
        value: "K",
        suit: "C"
    },
    {
        value: "K",
        suit: "D"
    }
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    // ACTION - Change either card to a random new one (Try implementing one action that both buttons dispatch)
    
    if(type === "ADD"){
        const newState = [...state]
        newState[action.cardNumber] = {
            value: getRandamValue(),
            suit: getRandomSuit()
        }
        console.log(newState[0])
        return newState;
    }
    return state
}


function getRandamValue(){
    const array = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    return array[Math.floor(Math.random() * array .length)]
}

function getRandomSuit(){
    const array = ['H', 'C', 'D', 'S']
    return array[Math.floor(Math.random() * array .length)]
}