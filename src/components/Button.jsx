/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import ButtonLevel from "./ButtonLevel";

export default function Button({ something, setSomething }) {
  return (
    <div className="button">
      {Array.from({ length: 10 }, (_, i) => (
        <ButtonLevel
          key={i + 1}
          number={i + 1}
          setSomething={setSomething}
          something={something}
        />
      ))}
    </div>
  );
}
