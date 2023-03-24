import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  render() {
    return (
      <ul className={css.imageGallery}>
        {this.props.imgCards.map(
          ({ id, webformatURL, largeImageURL, tags }) => {
            return (
              <ImageGalleryItem
                key={id}
                smallImg={webformatURL}
                description={tags}
                onClickModalOpen={this.props.onClickModalOpen}
                largeImage={largeImageURL}
              />
            );
          }
        )}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  imgCards: PropTypes.arrayOf(PropTypes.object),
  onClickModalOpen: PropTypes.func,
};
