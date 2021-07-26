import { createContext, useState, useContext, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Board } from './Board/Board';
import { SearchBar } from './Board/SearchBar/SearchBar';

export const SearchContext = createContext('');

export const DataContext = createContext([]);

/* What data will look like
[
  {
    id: 1,
    title: "To-Do",
    type: "column",
    cardData: [],
  },
  {
    id: 2,
    title: "In Progress",
    type: "column",
    cardData: [
      {
        id: 1,
        type: 'card',
        column: columnIndex,
        description: 'Get Hired',
        color: "red",
      }
    ],
  },
  {
    id: 3,
    title: "Done",
    type: "column",
    cardData: [],
  },
]);
*/

export const App = () => {
  const initialState = useContext(DataContext);
  const initialSearch = useContext(SearchContext);
  const [searchInput, setSearchInput] = useState(initialSearch);
  const [state, setState] = useState(() => {
    const applicationData = JSON.parse(localStorage.getItem('applicationData'));
    
    if (applicationData !== null) return applicationData;
    else return initialState;
  });

  useEffect(() => {
    localStorage.setItem('applicationData', JSON.stringify(state));
  }, [state]);

  return (
    <DndProvider backend={HTML5Backend}>
      <DataContext.Provider value={[state, setState]}>
        <SearchContext.Provider value={[searchInput, setSearchInput]}>
          <Header />
          <SearchBar/>
          <Board />
          <Footer />
        </SearchContext.Provider>
      </DataContext.Provider>
    </DndProvider>
  );
};