import React, { Component } from 'react';
export class DeckDisplay extends Component {

    constructor(props) {
      super(props);

      const cardLookup = this.createCardLookup(props.cards);

      this.state = {
      decks: Array.from({ length: 36 }, () => []),
      cardLookup,
      };
      this.handleDrop = this.handleDrop.bind(this);
    }

    createCardLookup(cards) {
      const cardLookup = {};
      if (cards) {
        cards.forEach(card => {
          cardLookup[card._id] = card;
        });
      }
      return cardLookup;
    }
    
    componentDidUpdate(prevProps) {
      if (prevProps.cards !== this.props.cards) {
        const cardLookup = this.createCardLookup(this.props.cards);
        this.setState({ cardLookup });
      }
    }
    
    handleDrop(e) {
      e.preventDefault();
      const cardId = e.dataTransfer.getData("cardId");
      const deckIndex = e.currentTarget.dataset.deck;
      const deck = this.state.decks[deckIndex];
      const card = this.state.cardLookup[cardId];
      console.log('Card ID:', cardId);
      console.log('Deck index:', deckIndex);
      console.log('Card:', card);
      if (card) {
        const newDeck = [...deck, card];
        const newDecks = [...this.state.decks];
        newDecks[deckIndex] = newDeck;
        this.setState({ decks: newDecks }, () => {
          console.log('Updated decks:', this.state.decks);
        });
      }
    }

    handleDragOver(e) {
      e.preventDefault();
    }    

    handleDragStart(e, cardId) {
      e.dataTransfer.setData("cardId", cardId);
    }
  
    componentDidMount() {
      const cardLookup = this.createCardLookup(this.props.cards);
      this.setState({ cardLookup });
    }
    
    render(){

      return (
        <table className="decks">
          <tbody>
            <tr>
              <td colSpan={6}>
                <p className="DeckTitle">Deck 1</p>
              </td>
            </tr>
            <tr>
              {Array.from({ length: 6 }, (_, i) => i).map((_, index) => (
                <td key={index}>
                  <div className="deck" 
                      data-deck={index}
                      onDrop={this.handleDrop}
                      onDragOver={this.handleDragOver}>
                    {/* Render cards if any are in the current deck */}
                    {this.state.decks[index] &&
                      this.state.decks[index].map((card) => (
                        <div key={card._id} className="card-box">
                          <p>
                            <img
                              draggable="true"
                              onDragStart={(e) => this.handleDragStart(e, card._id)}
                              className="base64image"
                              src={`data:image/jpeg;base64, ${card.Image}`}
                            />
                          </p>
                        </div>
                      ))}
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td colSpan={6}>
                <p className="DeckTitle">Deck 2</p>
              </td>
            </tr>
            <tr>
              {Array.from({ length: 6 }, (_, i) => i + 6).map((_, index) => (
                <td key={index + 6}>
                  <div className="deck" 
                      data-deck={index}
                      onDrop={this.handleDrop}
                      onDragOver={this.handleDragOver}>
                    {/* Render cards if any are in the current deck */}
                    {this.state.decks[index + 6] &&
                      this.state.decks[index + 6].map((card) => (
                        <div key={card._id} className="card-box">
                          <p>
                            <img
                              draggable="true"
                              onDragStart={(e) => this.handleDragStart(e, card._id)}
                              className="base64image"
                              src={`data:image/jpeg;base64, ${card.Image}`}
                            />
                          </p>
                        </div>
                      ))}
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td colSpan={6}>
                <p className="DeckTitle">Deck 3</p>
              </td>
            </tr>
            <tr>
              {Array.from({ length: 6 }, (_, i) => i + 6).map((_, index) => (
                <td key={index + 6}>
                  <div className="deck" 
                      data-deck={index}
                      onDrop={this.handleDrop}
                      onDragOver={this.handleDragOver}>
                    {/* Render cards if any are in the current deck */}
                    {this.state.decks[index + 6] &&
                      this.state.decks[index + 6].map((card) => (
                        <div key={card._id} className="card-box">
                          <p>
                          <img
                              draggable="true"
                              onDragStart={(e) => this.handleDragStart(e, card._id)}
                              className="base64image"
                              src={`data:image/jpeg;base64, ${card.Image}`}
                            />
                          </p>
                        </div>
                      ))}
                  </div>
                </td>
                
              ))}
            </tr>
            <tr>
              <td colSpan={6}>
                <p className="DeckTitle">Deck 4</p>
              </td>
            </tr>
            <tr>
              {Array.from({ length: 6 }, (_, i) => i + 6).map((_, index) => (
                <td key={index + 6}>
                  <div className="deck" 
                      data-deck={index + 6}
                      onDrop={this.handleDrop}
                      onDragOver={this.handleDragOver}>
                    {/* Render cards if any are in the current deck */}
                    {this.state.decks[index + 6] &&
                      this.state.decks[index + 6].map((card) => (
                        <div key={card._id} className="card-box">
                          <p>
                          <img
                              draggable="true"
                              onDragStart={(e) => this.handleDragStart(e, card._id)}
                              className="base64image"
                              src={`data:image/jpeg;base64, ${card.Image}`}
                            />
                          </p>
                        </div>
                      ))}
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td colSpan={6}>
                <p className="DeckTitle">Deck 5</p>
              </td>
            </tr>
            <tr>
              {Array.from({ length: 6 }, (_, i) => i + 6).map((_, index) => (
                <td key={index + 6}>
                  <div className="deck" 
                      data-deck={index + 6}
                      onDrop={this.handleDrop}
                      onDragOver={this.handleDragOver}>
                    {/* Render cards if any are in the current deck */}
                    {this.state.decks[index + 6] &&
                      this.state.decks[index + 6].map((card) => (
                        <div key={card._id} className="card-box">
                          <p>
                          <img
                              draggable="true"
                              onDragStart={(e) => this.handleDragStart(e, card._id)}
                              className="base64image"
                              src={`data:image/jpeg;base64, ${card.Image}`}
                            />
                          </p>
                        </div>
                      ))}
                  </div>
                </td>
                
              ))}
            </tr>
            <tr>
              <td colSpan={6}>
                <p className="DeckTitle">Deck 6</p>
              </td>
            </tr>
            <tr>
              {Array.from({ length: 6 }, (_, i) => i + 6).map((_, index) => (
                <td key={index + 6}>
                  <div className="deck" 
                      data-deck={index + 6}
                      onDrop={this.handleDrop}
                      onDragOver={this.handleDragOver}>
                    {/* Render cards if any are in the current deck */}
                    {this.state.decks[index + 6] &&
                      this.state.decks[index + 6].map((card) => (
                        <div key={card._id} className="card-box">
                          <p>
                          <img
                              draggable="true"
                              onDragStart={(e) => this.handleDragStart(e, card._id)}
                              className="base64image"
                              src={`data:image/jpeg;base64, ${card.Image}`}
                            />
                          </p>
                        </div>
                      ))}
                  </div>
                </td>
                
              ))}
            </tr>
          </tbody>
        </table>
      )
    }
}
      export default DeckDisplay;      