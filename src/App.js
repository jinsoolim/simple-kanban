import { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Board } from './Board/Board';
import { SearchBar } from './Board/SearchBar/SearchBar';
import _ from 'lodash';

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

  const [filterSearchInput, setFilterSearchInput] = useState('');

  const applicationData = JSON.parse(localStorage.getItem('applicationData'));
  const [state, setState] = useState(applicationData !== null ? applicationData : initialState);

  const debounced = useCallback(_.debounce(setFilterSearchInput, 1000), [setFilterSearchInput]);

  useEffect(() => {
    debounced(searchInput);
  }, [searchInput])


  useEffect(() => {
    localStorage.setItem('applicationData', JSON.stringify(state));
  }, [state]);

  return (
    <DndProvider backend={HTML5Backend}>
      <DataContext.Provider value={[state, setState]}>
      <SearchContext.Provider value={[searchInput, setSearchInput, filterSearchInput]}>
          <Header />
          <SearchBar/>
          <Board />
          <Footer />
      </SearchContext.Provider>
      </DataContext.Provider>
    </DndProvider>
  );
};