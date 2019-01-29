import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  //   state = {
  //     age: 21
  //   };

  //   handleUpCount = () => {
  //     this.setState({
  //       ...this.state,
  //       age: ++this.state.age
  //     });
  //   };

  //   habdleDownCount = () => {
  //     this.setState({
  //       ...this.state,
  //       age: --this.state.age
  //     });
  //   };

  render() {
    console.log(this.props.age);
    return (
      <div>
        <div>
          <button className="btn" onClick={this.props.handleUpCount}>
            UP
          </button>
          {this.props.age}
          <button className="btn btn-grey" onClick={this.props.habdleDownCount}>
            Down
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = states => {
  return {
    age: states.age
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleUpCount: () => dispatch({ type: 'AGE_UP' }),
    habdleDownCount: () => dispatch({ type: 'AGE_DOWN' })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
