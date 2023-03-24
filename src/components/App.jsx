import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { getImg } from 'components/API/Api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadButton } from './Button/Button';
import css from './App.module.css';
import { ColorRing } from 'react-loader-spinner';
import { Modal } from './Modal/Modal';
import { Element, animateScroll as scroll, scroller } from 'react-scroll';

export class App extends Component {
  state = {
    value: '',
    page: 2,
    dataImgs: [],
    isLoad: false,
    isModal: false,
    link: '',
  };

  loadImg = (value, page) => {
    this.setState({ isLoad: true });
    getImg(value, page)
      .then(data => {
        if (data.length === 0) {
          alert('no matching images');
          // не работает без этого импорта (не знаю почему), а гит не разрешает пушить
          console.log(scroll);
        }
        data.map(({ id, webformatURL, largeImageURL, tags }) =>
          this.setState(prevState => {
            return {
              dataImgs: [
                ...prevState.dataImgs,
                { id, webformatURL, largeImageURL, tags },
              ],
            };
          })
        );
      })
      .finally(() => {
        this.setState({ isLoad: false });
      });
  };

  onSubmit = value => {
    if (value.trim() === '') {
      return;
    }
    this.setState({ value });
    this.loadImg(value);
    this.setState({ dataImgs: [] });
  };

  onLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
    this.loadImg(this.state.value, this.state.page);
    scroller.scrollTo('myScrollToElement', {
      duration: 1000,
      delay: 100,
      smooth: 'easeInOutQuint',
      offset: 1500,
    });
  };

  onHideModal = evt => {
    if (evt.code === 'Escape') {
      this.setState({ isModal: false });
    }
  };

  onClickModalOpen = img => {
    this.setState({ link: img });
    this.setState({ isModal: true });
  };

  render() {
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.onSubmit}></Searchbar>
        <ImageGallery
          onClickModalOpen={this.onClickModalOpen}
          imgCards={this.state.dataImgs}
        />
        {this.state.isLoad && <ColorRing />}
        {this.state.dataImgs.length !== 0 && !this.state.isLoad && (
          <Element className={css.scrollEl} name="myScrollToElement">
            <LoadButton onLoadMore={this.onLoadMore} />
          </Element>
        )}
        {this.state.isModal && (
          <Modal takeImg={this.state.link} onHideModal={this.onHideModal} />
        )}
      </div>
    );
  }
}
