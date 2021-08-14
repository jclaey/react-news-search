import React, { Component } from 'react';
import newsApi from '../apis/newsApi';
import SearchBar from './SearchBar';
import ArticleList from './ArticleList'

class App extends Component {
  state = { articles: [] };

  onSearchSubmit = async term => {
    const res = await newsApi.get('/everything', {
      params: {
        q: term,
        pageSize: 10
      }
    });

    this.setState({ articles: res.data.articles });
  };

  render() {
    return (
      <div className="ui container" style={{marginTop: '1rem'}}>
        <div className="ui huge header">
          <i className="newspaper icon" style={{color: '#006699'}}></i>
          The News App
        </div>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <ArticleList articles={this.state.articles} />
      </div>
    );
  }
}

export default App;