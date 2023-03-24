import { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form
          className="form"
          onSubmit={e => {
            e.preventDefault();
            this.props.onSubmit(this.state.value);
            this.setState({ value: '' });
          }}
        >
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}
