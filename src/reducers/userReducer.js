const userReducer = (state = {}, action) => {
  const obj = {}

  switch (action.type) {
    case 'USER_DATA':
      obj.user = action.user
      break

    default:
      return state
  }

  return { ...state, ...obj }
}

export default userReducer
