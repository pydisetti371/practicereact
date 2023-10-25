export const searchVal = (data) => {
  return {
    type: "SEARCH_VALUE",
    data
  }
}

export const updateToReducer = (data) => {
    return {
        type:"UPDATE_REDUCER_STATE",
        data
    }
}