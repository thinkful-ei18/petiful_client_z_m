import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCat, fetchDog } from './actions/index';

class Dashboard extends Component {
  componentWillMount() {
    this.props.fetchCat();
    this.props.fetchDog();
  }
  render() {
    const catArray = this.props.cats.data;
    const cats = this.props.cats.map(cat => {
      return (
        <div>
          <span>{cat.name}</span>
        </div>
      );
    });
    return <div>{cats}</div>;
  }
}

const mapStateToProps = state => ({
  dogs: state.dogs.items,
  cats: state.cats.items,
});

export default connect(mapStateToProps, { fetchDog, fetchCat })(Dashboard);
