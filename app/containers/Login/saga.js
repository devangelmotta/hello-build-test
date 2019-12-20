import { takeLatest, delay, put } from 'redux-saga/effects';
import { newUserSession } from "../../utils/LocalStorageSessions/signin";
import { LOAD_LOGIN } from "./constants";
import { successLogin, errorLogin } from "./actions";
import { loginSuccess, Logout } from "../App/actions";

export function* loginIntent(props) {
  const data = props.data;

  try {
    yield delay(4000)
    let fakeFetch = yield newUserSession(data);
    yield put(successLogin());
    yield put(loginSuccess());
    window.location.replace("http://localhost:3000/signin");
  } catch (err) {

    yield put(errorLogin(err));
    yield put(Logout());
  }
}

// Individual exports for testing
export default function* loginSaga() {
  yield takeLatest(LOAD_LOGIN, loginIntent);
}
