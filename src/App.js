import React, { Component } from 'react';
import hoops from './images/hoops.jpg'
import './App.css'


class App extends Component {
  state = {
    person: {
      fullName: 'Taiwo Bandipo',
      bio: 'GoMyCode',
      imgSrc: 'hoops.jpg',
      profession: 'Web Developer'
    },
    shows: false,
    timeInterval: 0
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        timeInterval: prevState.timeInterval + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  handleToggle = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  };

  render() {
    const { person, shows, timeInterval } = this.state;

    return (
      <div className='App'>
        <div className='box'>
        <h1>Person Information</h1>
        {shows && (
          <div>
            <div className='profile-image'>
             <img src={hoops} alt={person.fullName} />
            </div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <p>{person.profession}</p>
          </div>
        )}
        <p>Time interval: {timeInterval} seconds</p>
        <button onClick={this.handleToggle}>
        </button>

      </div>
    </div>
    );
  }
}

export default App;
