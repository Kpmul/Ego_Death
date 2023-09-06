import React, { Component } from 'react';
import Tilt from './Tilt';

export class Carousel extends Component {

    constructor(props){
    super(props)
    this.state = {data: []}
    }

    // const [cards, setCards] = useState([]);
  
    async componentDidMount()  {

      async function fetchCards() {
        const response = await fetch('http://localhost:8000/cards'); 
        const data = await response.json();
        return data;
      }
      
      const handleResponse = (data) => {
        console.log(data);
        this.setState({ data: data });
        this.props.onCardDataReceived(data); // Pass the card data to the App component
      };
      const handleError = (error) => console.log(error);
  
    await fetchCards().then(handleResponse).catch(handleError);
    console.log(this.state);
    }

    render(){
      
        return(

        
              <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  {this.state.data.map((item, index) => {
                    const start = index * 6;
                    const end = (index + 1) * 6;
                    const cardRows = this.state.data.slice(start, end);
                    const rowsOfThree = [];
                    for (let i = 0; i < cardRows.length; i += 3) {
                      rowsOfThree.push(cardRows.slice(i, i + 3));
                    }
                    return (
                      <div
                        className={`carousel-item${index === 0 ? ' active' : ''}`}
                        key={item._id}
                      >
                        {rowsOfThree.map((row, rowIndex) => (
                          <div className='card-row' key={rowIndex}>
                            {row.map((card) => (
                              <Tilt className="card-box" selector=".card-box" key={card._id}>
                                <div className="card-box" draggable="true" onDragStart={e => e.dataTransfer.setData("cardId", card._id)}>
                                  {/* <h2>{card.Value}</h2>
                                  <p>{card.Duration}</p>
                                  <p>{card.Blurb}</p> */}
                                  <p><img className="base64image" src={`data:image/jpeg;base64, ${card.Image}`}/></p>
                                </div>
                              </Tilt>
                            ))}
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
                <span className="carousel-control-prev">
                  <button
                    className="carousel-control-prev-icon"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                  >
                    <span className="arrow">&larr;</span>
                  </button>
                  <span className="visually-hidden">Previous</span>
                </span>
                <span className="carousel-control-next">
                  <button
                    className="carousel-control-next-icon"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                  >
                    <span className="arrow">&rarr;</span>
                  </button>
                  <span className="visually-hidden">next</span>
                </span>
              </div>
        
          
          
          
                    
          //   <div id="carouselExample" className="carousel slide">
          //     <div className="carousel-inner">
          //       <div className="carousel-item active">
          //       <div className='card-row'>
                
          //       {this.state.data.slice(0, 3).map((card) => (
          //         <Tilt className="card-box" selector=".card-box">
          //         <div className="card-box">
          //         <div key={card._id}>
          //           {/* <h2>{card.Value}</h2>
          //           <p>{card.Duration}</p>
          //           <p>{card.Blurb}</p> */}
          //           <p><img class="base64image" src={`data:image/jpeg;base64, ${card.Image}`}/></p>         
          //         </div>
          //         </div>
          //         </Tilt>  
          //       ))}
          //       </div>
          //     </div>
          //   </div>
          //   <span className="carousel-control-prev">
          //     <button className="carousel-control-prev-icon" data-bs-target="#carouselExample" data-bs-slide="prev">
          //       <span className="arrow">&larr;</span>
          //     </button>
          //     <span className="visually-hidden">Previous</span>
          //   </span>
          //   <span className="carousel-control-next">
          //     <button className="carousel-control-next-icon" data-bs-target="#carouselExample" data-bs-slide="next">
          //     <span className="arrow">&rarr;</span>
          //     </button>
          //     <span className="visually-hidden">next</span>
          //   </span>
          // </div>    
        )
    }
}    

export default Carousel;