import React, { Component } from 'react';
import classNames from 'classnames';

class InputError extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: this.props.errorMessage || ''
    }
  }

  render() {
    var errorClass = classNames(this.props.className, {
      'error_container': true,
      'visible': this.props.visible,
      'invisible': !this.props.visible
    })

    return <div className={errorClass}>
      <span>{this.props.errorMessage} </span>
    </div>
  }

}

export default InputError;
