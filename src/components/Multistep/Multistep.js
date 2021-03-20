import React, { useState, useContext } from "react";

const Page = ({ children }) => {
  return <div>{children}</div>;
};

const Controls = () => {
  const { changePage, currentPage } = useContext(WizardContext);
  return (
    <div>
      <button onClick={() => changePage(currentPage - 1)}>Previous</button>
      <button>Next</button>
      <button>Submit</button>
    </div>
  );
};

// ----------------------------------------------------------

const WizardContext = React.createContext({
  currentPage: 1,
  changePage: () => {}
});

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
