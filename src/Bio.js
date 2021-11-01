// import React from 'react';

// const Bio = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h2", {}, props.name),
//     React.createElement("h3", {}, props.gender+"!"),
//     React.createElement("h3", {}, props.age),
//   ]);
// };

const Bio = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <h3>{props.gender}</h3>
            <h3>{props.age}</h3>
        </div>
    )
}

export default Bio;



