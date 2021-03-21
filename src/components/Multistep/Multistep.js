import React, { useState, useContext, useEffect } from "react";

const Page = ({ children, pageIndex }) => {
  const { currentPage, updatePageIndexes } = useContext(WizardContext);

  useEffect(() => {
    updatePageIndexes(pageIndex);
  });

  /*
    logika mówiąca, że jeśli strona jest aktywan to 
    ma się wyświetlać a jeśli nie to ma zwracać null
  */

  return currentPage === pageIndex ? children : null;
};

const Controls = () => {
  const { changePage, currentPage, pageIndexes } = useContext(WizardContext);
  return (
    <div>
      <button
        disabled={currentPage === 1}
        onClick={() => changePage(currentPage - 1)}
      >
        Previous
      </button>
      <button
        disabled={currentPage === pageIndexes.length}
        onClick={() => changePage(currentPage + 1)}
      >
        Next
      </button>

      {currentPage === pageIndexes.length && <button>Submit</button>}
    </div>
  );
};

// ----------------------------------------------------------

const WizardContext = React.createContext({
  currentPage: 1,
  changePage: () => {},
  pageIndexes: [],
  updatePageIndexes: () => {}
});

// pageIndexes: i updatePageIndexes - służy do zliczania liczby stron
// -----

const Wizard = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = newPageIndex => {
    setCurrentPage(newPageIndex);
  };

  // pageIndexes: i updatePageIndexes - służy do zliczania liczby stron
  const [pageIndexes, setPageIndexes] = useState([]);

  const updatePageIndexes = pageIndex => {
    if (pageIndexes.includes(pageIndex)) {
      return;
    }

    setPageIndexes([...pageIndexes, pageIndex]);
  };

  // React.Children.map
  // const totalPageNumber = React.Children.map(children, child => {
  //   return child.props.pageIndex ? child : null;
  // }).length;

  return (
    <WizardContext.Provider
      value={{
        currentPage,
        changePage,
        pageIndexes,
        updatePageIndexes
      }}
    >
      {children}
      {/*<p> {totalPageNumber}</p>*/}
    </WizardContext.Provider>
  );
};

export { Wizard, Page, Controls };
