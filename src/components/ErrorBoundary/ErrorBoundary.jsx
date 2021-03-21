import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import MainSpinner from '../MainSpinner/MainSpinner';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
    };
  }

  static getDerivedStateFromError = () => ({
    isError: true,
  });

  render() {
    const { isError } = this.state;
    const { children } = this.props;

    if (isError) {
      return (
        <div className="container">
          <MainSpinner />
          <ErrorIndicator />
        </div>
      );
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
