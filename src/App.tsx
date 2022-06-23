import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { HomeView } from './views/HomeView/HomeView';
import './App.css';
import { ShowView } from './views/ShowView/ShowView';
import { SearchView } from './views/SearchView/SearchView';

function App() {

  return (
    <Routes>
      <Route path="/"
             element={ <Layout /> }>
        <Route path="/"
               element={ <HomeView /> } />
        <Route path="/:type/:id"
               element={ <ShowView /> } />
        <Route path="/search"
               element={ <SearchView /> } />
      </Route>
    </Routes>
  );
}

export default App;
