import React from 'react';
import { Component } from 'react';
import FruitBasket from './FruitBasket';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
    this.fetchFilters = this.fetchFilters.bind(this);
  }

  componentWillMount() {
    this.fetchFilters();
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
  }

  render() {
    return <div></div>
  }
}

export default App;
