import React from 'react'
import { Route, Routes } from 'react-router';
import Layout from './layout/Layout'
import MainPage from './pages/main/MainPage';
import TrackListPage from './pages/TrackListPage';
function App() {

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<MainPage />} />
            <Route path='tracks' element={<TrackListPage />}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;