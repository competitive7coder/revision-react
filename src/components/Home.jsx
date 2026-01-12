import React from "react";
import { useState } from "react";

const Home = () => {
  const [age, setAge] = useState(24);
  const [name, setName] = useState("Protyush");


  const fn_name = () => {
    setName ("Raj")
  }
  const in_age = () => {
    setAge(age + 1);
  };
//    const de_age = () => {
//     setAge(age - 1);
//   };
  return (
    <div>
      <h1 className="text-8xl font-bold text-blue-600">Hello, im {name}!</h1>
      <button onClick={fn_name}>Click me</button>
      <h2 className="text-red-500 text-6xl font-extrabold">I am {age} years old</h2>
      <h2>Welcome to my React application.</h2>
      <button onClick={in_age}>Increment me</button>
      <br />
      <br />
      <button onClick={()=>setAge(age - 1)}>Decrement me</button>
    </div>
  );
};

export default Home;
