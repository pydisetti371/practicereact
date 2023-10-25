
const initialState = {
    searchValue: "",
    reducerStateUpdated: false
}

export const searchValueReducer = (state = initialState, action) => {
    console.log("action-reducer", action?.data?.data?.payload)
    switch (action.type) {
        case "UPDATE_REDUCER_STATE":
            return {
                ...state,
                searchValue: action?.data?.data?.payload,
                reducerStateUpdated: true
            }
        default:
            return state
    }
}