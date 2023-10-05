import React from "react";

const Component = () => {
  const function1 = () => {
    const data = ["элемент 1", "элемент 2", "элемент 3"];
    function2(data);
  };

  const function2 = (variable) => {
    console.log(variable);
  };

  return (
    <div>
      <h1>Component</h1>
    </div>
  );
};

export default Component;
