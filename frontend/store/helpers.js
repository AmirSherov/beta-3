
function globalReducer(state, action) {
    switch (action.type) {
        case "darkMode":
            return {
                ...state,
                'darkMode': action.payload
            }
        default:
            return state
    }
}
export {
    globalReducer
};