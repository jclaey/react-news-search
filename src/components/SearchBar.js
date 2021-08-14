import React, { Component } from 'react';


class SearchBar extends Component {
  state = { term: '' };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment" style={{marginBottom: '5rem'}}>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search For News</label>
            <input type="text" value={this.state.term} onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;