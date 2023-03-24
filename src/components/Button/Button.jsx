import { Component } from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types';
export class LoadButton extends Component {
  render() {
    return (
      <>
        <button
          className={css.button}
          type="submit"
          onClick={this.props.onLoadMore}
        >
          Load more
        </button>
      </>
    );
  }
}

LoadButton.propTypes = {
  onLoadMore: PropTypes.func,
};
