// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
export default function ButtonLevel({ number, setSomething, something }) {
  return (
    <button
      className="button-level"
      onClick={() => setSomething(number)}
      style={
        number === something
          ? {
              background: "#0d9aff",
              color: "#f5f5f5",
            }
          : {}
      }
    >
      {number}
    </button>
  );
}
