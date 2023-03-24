import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={css.imageGalleryItem}>
        <img
          onClick={() => {
            this.props.onClickModalOpen(this.props.largeImage);
          }}
          className={css.imageGalleryItem__image}
          src={this.props.smallImg}
          alt={this.props.description}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  description: PropTypes.string,
  largeImage: PropTypes.string,
  smallImg: PropTypes.string,
  onClickModalOpen: PropTypes.func,
};
