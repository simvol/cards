/*
 *
 * DashboardContainer reducer
 *
 */

import { fromJS } from 'immutable';
import initialState from '../../_shared/initialState';
import {
  REQUEST_CARDS_SUCCEEDED,
} from './constants';

function dashboardContainerReducer(state = fromJS(initialState.dashboard), action) {
  switch (action.type) {
    case REQUEST_CARDS_SUCCEEDED:
      return state.set('cards', action.cards);
    default:
      return state;
  }
}

export default dashboardContainerReducer;
