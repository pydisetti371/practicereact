// import * as action from "../actions/counterActions";

const initalState = { value: "", valuefulFIlled: false }

export const counterReducer = (state = initalState, action) => {
    console.log(action, "action-6")
    switch (action.type) {
        case "ENTER_VALUE":
            return {
                ...state,
                value: action.payload.payload,
                valuefulFIlled: true
            }
        default:
            return initalState

    }

}