import './App.css';
import Dropdown from './Components/Dropdown';
import Carousel from './Components/Carousel';
import banner from "./Images/EGODEATH.banner.png";
import DeckDisplay from './Components/DeckDisplay';
import React, { Component } from 'react';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
    this.handleCardsUpdate = this.handleCardsUpdate.bind(this);
  }

  handleCardData = (cardData) => {
    this.setState({ cardData });
  };
  

  handleCardsUpdate(cards) {
    this.setState({ cards });
  }

  render(){
  return (
    
    <div className="App">
      <main>
     
        <div className="wrapper"> 
          <div className="container1">
            <div className="box box-1">
              <div className="photo innerBox">
                <img src="https://xsgames.co/randomusers/avatar.php?g=male" alt="profile picture" width="80" height="115" id="photo"/>
              </div>
              <img src={banner} className = "logo" alt="banner" width="550" height="135" placeholder='EGO DEATH logo' style={{ borderRadius: "10px" }} />
              <div className="purchase innerBox">
              <Dropdown/>
              </div>
              </div>
              <div className="box-2">
              <Carousel onCardDataReceived={this.handleCardData} />
            </div>
          </div>
          <div className="container2"> 
          <div className="box box-3">
          <DeckDisplay cardData={this.state.cardData} cards={this.state.cards} />
          </div>
          </div>
        </div>
      </main>
    </div>
  );
}
}

export default App;
