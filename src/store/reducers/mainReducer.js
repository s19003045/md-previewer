import Act from "../action";

const initState = {
    menuOpened: true,
    isFirebaseAuthOn: true,
};

const mainReducer = (state = initState, action) => {
    switch (action.type) {
        case Act.SET_MENU_OPENED:
            return { ...state, menuOpened: action.payload };
        case Act.SET_IS_FIREBASE_AUTH_ON:
            return { ...state, isFirebaseAuthOn: action.payload };
        default:
            return state;
    }
};

export default mainReducer;
