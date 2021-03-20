import React, { useContext } from "react";
import * as Multistep from "./../components/Multistep/Multistep";

const Users = () => (
  <div>
    <h2 className="title is-3">Users</h2>
    <Multistep>
      <Page>page 1</Page>
      <Page>page 2</Page>
      <Page>page 3</Page>
      <Controls />
    </Multistep>
  </div>
);

export default Users;
