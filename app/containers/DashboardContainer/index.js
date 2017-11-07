/*
 *
 * DashboardContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectDashboardContainer from './selectors';
import * as dashboardActions from './actions';
import { bindActionCreators } from 'redux';

import Dashboard from '../../components/Dashboard';

export class DashboardContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    actions: React.PropTypes.object.isRequired,    
  };

  constructor(props) {
    super(props);
    console.log('constructor');
    
    this.state = {
      cards: []
    };

    //example
    // this.navigateTo = this.navigateTo.bind(this);
  }
  
  componentWillMount(){
    console.log('mounted');
    this.props.actions.requestCards();
  }

  componentWillReceiveProps(nextProps){
    
    console.log('nextProps: ', nextProps);
    
    if (nextProps) {
      this.setState({
        cards: {
          ...this.state.cards,
          ...nextProps.cards
        }
      });
    }
  }

  //example
  // navigateTo(url) {
  //   this.props.actions.push(url);
  // }

  render() {
    return <Dashboard {...this.props} hoveredCard={false}/>
  }
}

const mapStateToProps = selectDashboardContainer();

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(dashboardActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
