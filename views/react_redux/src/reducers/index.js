export default (state = 0, action) => {
    switch (action.type) {
        case 'add':
            return state + 1
        case 'less':
            return state - 1
        default:
            return state
    }
}
