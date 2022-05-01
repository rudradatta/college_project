export const initialState = {
    user : null,
};
// above here is the initial state of the user when not logged in
//then we have some actions
export const actionTypes = {
    SET_USER: "SET_USER",
};
//inside the reducer we have listeners to the above actions
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_USER: // if youjust received an action here SSET_User then return everthing as it is but change
                                    //the user to whatever we passed in as the user payload inside of the action we dispatched
            return{
                ...state,
                user: action.user,
            };

            default:              // if we dont listen return the state
                return state;
    }
};

export default reducer;
