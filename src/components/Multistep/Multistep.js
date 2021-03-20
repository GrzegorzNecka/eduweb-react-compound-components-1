import React, { useState, useContext } from "react";

const WizardContext = React.createContext({
  currentPage: 1,
  changePage: () => {}
});

const Page = ({ children }) => {
  return <div>{children}</div>;
};

const Controls = () => {
  const context = useContext(WizardContext);
  return (
    <div>
      <button onClick={}>Previous</button>
      <button>Next</button>
      <button>Submit</button>
    </div>
  );
};

const Wizard = ({ children }) => {
  const [currentPage, setCurrentPage] = useState();

  const changePage = newPageIndex => {
    setCurrentPage(newPageIndex);
  };

  return (
    <WizardContext.Provider
      value={{
        currentPage,
        changePage
      }}
    >
      {children}
    </WizardContext.Provider>
  );
};

export { Wizard, Page, Controls };
