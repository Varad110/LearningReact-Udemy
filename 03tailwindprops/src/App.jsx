// import { useState } from "react";
import Card from "./components/Card";

import "./App.css";

function App() {
  // let myObj = {
  //   name: "Varad",
  //   age: 25,
  //   address: {
  //     city: "Nanded",
  //     state: "Maharashtra",
  //     country: "india",
  //   },
  // };
  let newArr = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with Tailwind
      </h1>
      <Card username="hitesh" myAyy={newArr} />
      <Card username="Json" post="Staff Engg." />
      <Card />
    </>
  );
}

export default App;
