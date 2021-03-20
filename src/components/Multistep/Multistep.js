import React, { useContext } from "react";

const MyContext = React.createContext();

const Multistep = ({ children }) => {
  return <div>{children}</div>;
};

export default Multistep;
