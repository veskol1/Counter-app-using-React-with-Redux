import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import {connect} from 'react-redux';

class Counter extends Component {
    state = {
        counter: 0
    };

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {

        console.log("props"+this.props.ctr)
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onInc} />
                <CounterControl label="Decrement" clicked={this.props.onDec}  />
                <CounterControl label="Add 5" clicked={this.props.onIncFive}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubFive}  />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr : state.counter
    }
};


const mapDispatchToProps = dispatch => {
  return {
      onInc: () => dispatch({type: 'INCREMENT'}),
      onDec: () => dispatch({type: 'DECREMENT'}),
      onIncFive: () => dispatch({type: 'INCFIVE', value: 5}),
      onSubFive: () => dispatch({type: 'SUBFIVE', value: 5})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);