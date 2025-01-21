export { Greeting };

function Greeting() {
  return (
    <h1>&quot; I swear by my pretty floral bonat, I will end you.&quot;</h1>
  );
}

const ListItem = (props) => {
  return <li>{props.animal}</li>;
};

const List = (groups) => {
  return (
    <ul>
      {props.animals.map((animal) => {
        <ListItem key={animal} animal={animal} />;
      })}
    </ul>
  );
};

const App = () => {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
};
