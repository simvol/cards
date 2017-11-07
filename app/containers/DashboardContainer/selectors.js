import { createSelector } from 'reselect';

/**
 * Direct selector to the dashboardContainer state domain
 */
const selectDashboardContainerDomain = () => state => state.get('dashboard');

/**
 * Other specific selectors
 */


/**
 * Default selector used by DashboardContainer
 */

const selectDashboardContainer = () => createSelector(
  selectDashboardContainerDomain(),
  (substate) => substate.toJS()
);

export default selectDashboardContainer;
export {
  selectDashboardContainerDomain,
};
