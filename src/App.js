/* global React ReactDOM */

const Bio = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.gender),
    React.createElement("h3", {}, props.age),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    React.createElement(Bio, { name: "Sukumar", gender: "male", age: 28 }),
    React.createElement(Bio, { name: "Venkata", gender: "male", age: 27 }),
    React.createElement(Bio, { name: "Devi", gender: "female", age: 25 }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
