import React from "react";

const MyContext = React.createContext();

const User = () => (
  <div>
    <MyContext.Consumer>
      {context => <p> User name: {context.name}</p>}
    </MyContext.Consumer>
  </div>
);

const Users = () => (
  <div>
    <MyContext.Provider value={{ name: "Grzechu" }}>
      <h2 className="title is-3">Users</h2>
      <User />
    </MyContext.Provider>
  </div>
);

export default Users;
