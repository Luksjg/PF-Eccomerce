
const InitialState={
    ejemplo : []
}

function rootReducer(state = InitialState, action){
    switch(action.type){
        case "ejemplo":
            return "hola"
        default:
            return "hola"
    }
}

export default rootReducer