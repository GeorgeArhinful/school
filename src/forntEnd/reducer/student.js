let initialState={}

function student(state = initialState, action) {
    switch (action.type) {
        case 'ACTION_NAME':
            return {
                name:action.payload
            }
        case 'DATA':
            return {
                data:action.payload
            }
        default:
            return state
    }
}

export default student