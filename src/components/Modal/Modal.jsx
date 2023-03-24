import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.onHideModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.onHideModal);
  }

  render() {
    return (
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src={this.props.takeImg} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  takeImg: PropTypes.string,
  onHideModal: PropTypes.func,
};
