import React, { Component } from 'react';
import './App.css';
import hoops from './images/hoops.jpg';

class App extends Component {
  constructor(props) {
    super(props);

      this.state = {
        person: {
          fullName: 'Taiwo Bandipo',
          imgSrc: 'hoops.jpg',
          bio: 'GoMyCode',
          profession: 'Web Developer',
          intervalId: null,
          timeInterval: 0,
        },
        shows: false,
      };
    }
  
    componentDidMount() {
      const intervalId = setInterval(() => {
        this.setState((prevState) => ({ timeInterval: prevState.timeInterval + 1 }));
      }, 1000);
  
      this.setState({ setInterval });
    }
  
    componentWillUnmount() {
      clearInterval(this.state.intervalId);
    }

    toggleShows = () => {
      this.setState((prevState) => ({ shows: !prevState.shows }));

    };

    render() {
      const { fullName, bio, imgSrc, profession } = this.state.person;
      const { shows } = this.state;
  
    return (
      <div className='App'>
        <div className='box'>      
          {shows && (
          <div>
              <div className='profile-image'>
                <img src={hoops} alt={fullName} width={200} height={300} />
              </div>       
                <h1>{fullName}</h1>
                <p>{profession}</p>
                <p>{bio}</p>
          </div>
          )}
          <button onClick={this.toggleShows} className="btn">
            {shows ? 'Hide' : 'Show'} Profile
          </button>
          </div>
      </div>
      );
    }
  }
  
  export default App;

  

