import { takeLatest, call, put, select } from 'redux-saga/effects';
import { LOAD_DATA } from "./constants";
import { successData, errorData } from "./actions";
import ComponentFetchEvents from "./withGoogleCalendar";
export function* tryGetCalendarEvents() {

  try {
    let data = yield ComponentFetchEvents();
    yield put(successData(data));
  } catch (err) {
    yield put(errorData(err));
  }
}
// Individual exports for testing
export default function* googleCalendarSaga() {
  yield takeLatest(LOAD_DATA, tryGetCalendarEvents);
}
