import React from "react";
import Accordion from "./components/Accordion";

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

export default function App() {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}
