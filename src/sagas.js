import { put, take, call, all } from 'redux-saga/effects'

function* fetchUserData(loginData) {
  // Sample Static User Data
  const userData = [
    {
      userId: 'testLogin',
      password: 'protected',
      name: 'Test user'
    },
    {
      userId: 'testLogin2',
      password: 'protected2',
      name: 'Test user2'
    }
  ]

  const loggedInUser = userData.find((item) => item.userId === loginData.userId)

  // Directly dispatching action from saga
  yield put({ type: 'USER_DATA', user: loggedInUser })
}

function* actionListener() {
  const params = yield take('GET_USER_DATA')

  yield call(fetchUserData, params.data)
}

export default function* rootSaga() {
  // Listening all the actions
  yield all([actionListener()])
}
