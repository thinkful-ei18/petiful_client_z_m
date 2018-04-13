import React, { Component } from 'react';
import { connect } from 'react-redux';
import css from './App.css';
import { fetchCat, deleteCat } from './actions/cat';
import { fetchDog, deleteDog, FETCH_ERROR } from './actions/dog';

class Dashboard extends Component {
  componentDidMount() {
    this.props
      .fetchCat()
      .catch(err => fetch('https://adoptanimal.herokuapp.com/refresh'));
    this.props
      .fetchDog()
      .catch(err => fetch('https://adoptanimal.herokuapp.com/refresh'));
  }
  onClickDog(e) {
    e.preventDefault();
    this.props.deleteDog();
    this.props
      .fetchDog()
      .catch(err => fetch('https://adoptanimal.herokuapp.com/refresh'));
  }
  onClickCat(e) {
    e.preventDefault();
    this.props.deleteCat();
    this.props
      .fetchCat()
      .catch(err => fetch('https://adoptanimal.herokuapp.com/refresh'));
  }
  render() {
    if (this.props.cat === null) {
      return null;
    }
    if (this.props.dog === null) {
      return null;
    }
    console.log(this.props.cat.cat);
    // const cat = this.dummyData();
    let dog = this.props.dog.dog;
    let cat = this.props.cat.cat;
    console.log(cat);
    return (
      <div>
        <div>
          <li>
            <img
              height="75%"
              width="75%"
              src={cat.imageURL}
              alt={cat.imageDescription}
            />
            <div>{cat.name}</div>
            <div>{cat.sex}</div>
            <div>{cat.age}</div>
            <div>{cat.breed}</div>
            <div>{cat.story}</div>
          </li>
          <button onClick={e => this.onClickCat(e)}>Adopt</button>
        </div>
        <div>
          <li>
            <img
              height="75%"
              width="75%"
              src={dog.imageURL}
              alt={dog.imageDescription}
            />
            <div>{dog.name}</div>
            <div>{dog.sex}</div>
            <div>{dog.age}</div>
            <div>{dog.breed}</div>
            <div>{dog.story}</div>
          </li>
          <button onClick={e => this.onClickDog(e)}>Adopt</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dog: state.dog,
  cat: state.cat,
  error: state.error,
});

// export default Dashboard;

export default connect(mapStateToProps, {
  fetchDog,
  deleteDog,
  deleteCat,
  fetchCat,
})(Dashboard);
