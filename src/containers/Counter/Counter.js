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

        console.log("props="+this.props.res)
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onInc} />
                <CounterControl label="Decrement" clicked={this.props.onDec}  />
                <CounterControl label="Add 5" clicked={this.props.onIncFive}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubFive}  />
                <hr/>
                <button onClick={this.props.onStoreRes}>Store result</button>
                    <ul>
                        {this.props.resultsArr.map( res => {
                            return <li key={res.id} onClick={() => this.props.onDeleteRes(res.id)}> {res.value} </li>
                        })}
                    </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr : state.counter,
        resultsArr : state.results
    }
};


const mapDispatchToProps = dispatch => {
  return {
      onInc: () => dispatch({type: 'INCREMENT'}),
      onDec: () => dispatch({type: 'DECREMENT'}),
      onIncFive: () => dispatch({type: 'INC_FIVE', value: 5}),
      onSubFive: () => dispatch({type: 'SUB_FIVE', value: 5}),
      onStoreRes: () => dispatch({type: 'STORE_RESULT'}),
      onDeleteRes: (id) => dispatch({type: 'DELETE_RESULT', deleteId: id})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);