import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { REQUEST_CARDS } from '../constants';
import { requestCardsSucceeded, requestCardsFailed } from '../actions';
import { url } from '../../../_shared/api';
// import toastr from 'toastr';

function fetchCardsFromServer(id) {
  return fetch(`${url.imgur}/3/gallery/hot/viral/1.json`)
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson.status === 200){
        return responseJson.data;
      } else {
        console.log('Couldn\'t fetch cards');
      }
    });
}

function* fetchCards(action) {
  try {
   const cards = yield call(fetchCardsFromServer);
   yield put(requestCardsSucceeded(cards))
  } catch (e) {
   // toastr.error('Something went wrong. Please try again later...', 'Error');
   console.log('Error', e);
   yield put(requestCardsFailed(e));
  }
}

export function* fetchCardsSaga() {
  yield* takeLatest(REQUEST_CARDS, fetchCards);
}

// All sagas to be loaded
export default fetchCardsSaga;