import React from "react";
import { withRouter } from "react-router";
import Carousel from "./Carousel";

class Details extends React.Component {
  constructor(props) {
    super();
    this.state = { loading: true };
  }

  async componentDidMount() {
    console.log(this.props);
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  render() {
    if (this.state.loading) {
      return <h2>loading … </h2>;
    }
    const {
      animal,
      breed,
      city,
      state,
      description,
      name,
      images,
    } = this.state;
    return (
      <div className="details">
        <Carousel images={images} />;
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Details);

// import { useParams } from "react-router-dom";

// const Details = () => {
//     const { id } = useParams();
//     return (
//         <div>
//             <h2>Hi!</h2>
//         </div>
//     )
// }
