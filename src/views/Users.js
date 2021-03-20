import React from "react";
import * as Multistep from "./../components/Multistep/Multistep";

const Users = () => (
  <div>
    <h2 className="title is-3">Users</h2>
    <Multistep.Wizard>
      <Multistep.Page>page 1</Multistep.Page>
      <Multistep.Page>page 2</Multistep.Page>
      <Multistep.Page>page 3</Multistep.Page>
      <Multistep.Controls />
    </Multistep.Wizard>
  </div>
);

export default Users;
