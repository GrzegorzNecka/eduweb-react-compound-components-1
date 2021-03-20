import React, { useContext } from "react";

const Page = ({ children }) => {
  return <div>{children}</div>;
};

const Controls = () => {
  return (
    <div>
      <button>Previous</button>
      <button>Next</button>
      <button>Submit</button>
    </div>
  );
};

const Multistep = ({ children }) => {
  return <div>{children}</div>;
};

export default { Multistep, Page, Controls };
