import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "What is react",
    content: "React is Library"
  },
  {
    title: "What is vue",
    content: "Vue is Library"
  }
];

const options = [
  {
    label: "The color Red",
    value: "red"
  },
  {
    label: "The color Green",
    value: "green"
  },
  {
    label: "The color Blue",
    value: "blue"
  }
];

export default function App() {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
}
