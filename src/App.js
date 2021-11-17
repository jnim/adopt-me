const Pet = (props) => {
  return React.createElement("div", {id: "pet-instance"}, [
    React.createElement("h2", {id : "pet-name"}, props.name),
    React.createElement("h3", {id : "pet-type"}, props.animal),
    React.createElement("h3", {id : "pet-breed"}, props.breed), 
    ]    
  );
};
const App = () => {
  return React.createElement("div", {},
    [
      React.createElement("h1", { id: "my-brand"}, "Adopt Me!"),
      ...[1,2,3,4].map((i) => React.createElement("h2", {}, i)),
      React.createElement(Pet, {name: "Bertrand", animal: "Slug", breed: "Goopy"} ),
      React.createElement(Pet, {name: "Bingus", animal: "Mouse", breed: "Mincian Velvet"} ),
      React.createElement(Pet, {name: "Khargen", animal: "Cat", breed: "Warrior"} ),
    ] 
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
