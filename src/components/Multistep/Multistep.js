import React, { useState, useContext } from "react";

const Page = ({ children, pageIndex }) => {
  const { currentPage } = useContext(WizardContext);

  /*
    logika mówiąca, że jeśli strona jest aktywan to 
    ma się wyświetlać a jeśli nie to ma zwracać null
  */

  return currentPage === pageIndex ? children : null;
};

const Controls = () => {
  const { changePage, currentPage } = useContext(WizardContext);
  return (
    <div>
      <button onClick={() => changePage(currentPage - 1)}>Previous</button>
      <button onClick={() => changePage(currentPage + 1)}>Next</button>
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
