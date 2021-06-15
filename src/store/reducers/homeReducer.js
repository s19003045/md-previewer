const initState = {
    count: 0,
};

const homeReducer = (state = initState, action) => {
    switch (action.type) {
        case "add":
            return { count: state.count + 1 };
        case "delete":
            return { count: state.count - 1 };
        case "reset":
            return initState;
        default:
            return state;
    }
};

export default homeReducer;
