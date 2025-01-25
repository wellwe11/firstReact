import { useState } from "react";
export { Greeting, Person };

function Greeting() {
  return (
    <h1>&quot; I swear by my pretty floral bonat, I will end you.&quot;</h1>
  );
}

function Person() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Johansson",
    age: 100,
  });

  const changeName = (target, e) => {
    setPerson((prevPerson) => ({ ...prevPerson, [target]: e }));
  };

  return (
    <>
      <h1>{person.firstName}</h1>
      <h1>{person.lastName}</h1>
      <h2>{person.age}</h2>
      <input
        type="text"
        value={person.firstName}
        onChange={(event) => changeName("firstName", event.target.value)}
      />
      <input
        type="text"
        value={person.lastName}
        onChange={(event) => changeName("lastName", event.target.value)}
      />
    </>
  );
}
