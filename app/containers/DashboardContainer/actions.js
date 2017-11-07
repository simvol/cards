/*
 *
 * DashboardContainer actions
 *
 */

import {
  REQUEST_CARDS,
  REQUEST_CARDS_SUCCEEDED,
  REQUEST_CARDS_FAILED,
} from './constants';

export function requestCards() {
  return {
    type: REQUEST_CARDS,
  };
}

export function requestCardsSucceeded(cards) {
  return {
    type: REQUEST_CARDS_SUCCEEDED,
    cards
  };
}

export function requestCardsFailed(message) {
  return {
    type: REQUEST_CARDS_FAILED,
    message
  };
}
