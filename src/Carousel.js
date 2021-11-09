import React, { Component } from "react";

export class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };
  
    // handleIndexClick = (e) => {
    handleIndexClick = (index) => {
      this.setState({
          active: index,
        //   active: e.target.dataset.index
      })
    }

  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            <img
              src={photo}
              key={photo}
              className={index === active ? "active" : ""}
              onClick={() => this.handleIndexClick(index)}
            //   onClick={this.handleIndexClick.bind(this)}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
