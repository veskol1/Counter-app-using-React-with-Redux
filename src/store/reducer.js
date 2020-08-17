
const initialState = {
    counter: 0,
    results : []
};


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'INCREMENT':
                return {
                    ...state,
                    counter: state.counter + 1
                };

        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            };

        case 'INC_FIVE':
            return {
                ...state,
                counter: state.counter + action.value
            };

        case 'SUB_FIVE':
            return {
                ...state,
                counter: state.counter - action.value
            };

        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat(state.counter)
            }
    }

    return state
};


export default reducer;