import { takeLatest, put, delay } from 'redux-saga/effects';
import { LOAD_REGISTER } from "./constants";
import { successRegister, errorRegister } from "./actions";
import { setNewUserLocalStorage } from "../../utils/LocalStorageSessions/singup";

export function* registerIntent(props) {
  const data = props.data;

  try {
    yield delay(4000)
    let fakeFetch = yield setNewUserLocalStorage(data);
    yield put(successRegister());
    window.location.replace("http://localhost:3000/");
  } catch (err) {
    yield put(errorRegister(err));
  }
}

export default function* signUpSaga() {
  yield takeLatest(LOAD_REGISTER, registerIntent);
}
